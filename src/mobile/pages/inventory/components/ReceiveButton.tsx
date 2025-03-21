import React, { useState, useEffect } from "react";
import { supabase } from "../../../../lib/supabase";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Paper,
} from "@mui/material";
import { textFieldData } from "../constants";

// 타입 정의
interface Supplier {
  id: number;
  name: string;
}

interface Medicine {
  id: number;
  name: string;
}

interface ReceiveDialogProps {
  open: boolean;
  onClose: () => void;
}

const ReceiveDialog: React.FC<ReceiveDialogProps> = ({ open, onClose }) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedSupplierId, setSelectedSupplierId] = useState<number | null>(
    null
  );

  console.log(
    "FormData",
    formData,
    "suppliers",
    suppliers,
    "medicines",
    medicines
  );

  // 다이얼로그가 열릴 때만 공급자 목록 가져오기
  useEffect(() => {
    if (open) {
      const fetchSuppliers = async () => {
        setLoading(true);
        try {
          const { data, error } = await supabase
            .from("suppliers")
            .select("id, name")
            .order("name");

          if (error) throw error;
          setSuppliers(data || []);
        } catch (error) {
          console.error("공급자 목록을 가져오는 중 오류 발생:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchSuppliers();
    }
  }, [open]);

  // 제약사가 선택되면 해당 제약사의 의약품 목록 가져오기
  useEffect(() => {
    if (selectedSupplierId) {
      const fetchMedicines = async () => {
        setLoading(true);
        try {
          // 두 테이블을 조인하여 의약품 정보 가져오기
          const { data, error } = await supabase
            .from("suppliers_medicines_link")
            .select(
              `
              medicine_id,
              medicines:medicine_id(id, name)
            `
            )
            .eq("supplier_id", selectedSupplierId);

          if (error) throw error;

          console.log("의약품 데이터 응답:", data); // 응답 구조 확인용 로그

          if (data && data.length > 0) {
            // 타입을 any로 처리하여 타입 에러를 우회
            const medicinesData = data
              .filter((item: any) => item.medicines) // null이 아닌 항목만 필터링
              .map((item: any) => ({
                id: item.medicines.id,
                name: item.medicines.name,
              }));

            setMedicines(medicinesData);
          } else {
            setMedicines([]);
          }
        } catch (error) {
          console.error("의약품 목록을 가져오는 중 오류 발생:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchMedicines();
    } else {
      // 제약사가 선택되지 않았으면 의약품 목록 초기화
      setMedicines([]);
    }
  }, [selectedSupplierId]);

  const handleChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));

    // 제약사 선택 시 해당 제약사의 ID 찾기
    if (id === "supplier") {
      const selectedSupplier = suppliers.find(
        (supplier) => supplier.name === value
      );
      setSelectedSupplierId(selectedSupplier?.id || null);

      // 제약사가 변경되면 의약품 선택 초기화
      setFormData((prev) => ({ ...prev, medicine: "" }));
    }
  };

  const handleSubmit = async () => {
    const { error } = await supabase.rpc("insert_transaction", {
      p_supplier_name: formData.supplier,
      p_medicine_name: formData.medicine,
      p_manager_name: formData.manager,
      p_transaction_type: formData.transactionType,
      p_quantity: parseInt(formData.quantity, 10),
    });
    console.log("submit버튼", formData);
    if (error) {
      console.error("입출고 데이터 저장 실패:", error.message);
    } else {
      console.log("입출고 데이터 저장 성공!");
      onClose();
      setFormData({});
      setSelectedSupplierId(null);
    }
  };

  const handleClose = () => {
    onClose();
    setFormData({});
    setSelectedSupplierId(null);
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md">
      <DialogTitle sx={{ fontWeight: 700, fontSize: "1.5rem" }}>
        입 / 출고등록
      </DialogTitle>
      <DialogContent>
        <Box sx={{ mt: 2 }}>
          <Paper variant="outlined" sx={{ p: 2 }}>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 5, mb: 2 }}>
              {/* 공급자 선택 */}
              <Box sx={{ width: "100%" }}>
                <FormControl fullWidth size="small" required>
                  <InputLabel>제약사</InputLabel>
                  <Select
                    value={formData.supplier || ""}
                    label="제약사"
                    onChange={(e) => handleChange("supplier", e.target.value)}
                    disabled={loading}
                    MenuProps={{
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left",
                      },
                      transformOrigin: {
                        vertical: "top",
                        horizontal: "left",
                      },
                      PaperProps: {
                        style: {
                          maxHeight: 300,
                        },
                      },
                    }}
                  >
                    {suppliers.map((supplier) => (
                      <MenuItem key={supplier.id} value={supplier.name}>
                        {supplier.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>

              {/* 의약품 선택 */}
              <Box sx={{ width: "100%" }}>
                <FormControl fullWidth size="small" required>
                  <InputLabel>의약품</InputLabel>
                  <Select
                    value={formData.medicine || ""}
                    label="의약품"
                    onChange={(e) => handleChange("medicine", e.target.value)}
                    disabled={loading || !selectedSupplierId}
                    MenuProps={{
                      anchorOrigin: {
                        vertical: "bottom",
                        horizontal: "left",
                      },
                      transformOrigin: {
                        vertical: "top",
                        horizontal: "left",
                      },
                      PaperProps: {
                        style: {
                          maxHeight: 300,
                        },
                      },
                    }}
                  >
                    {medicines.map((medicine) => (
                      <MenuItem key={medicine.id} value={medicine.name}>
                        {medicine.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>

              {/* 나머지 필드들 */}
              {textFieldData.slice(2).map((field) => (
                <Box key={field.id} sx={{ width: "100%" }}>
                  {field.type === "select" ? (
                    <FormControl
                      id={field.id}
                      fullWidth
                      size={field.size}
                      required={field.required}
                    >
                      <InputLabel>{field.label}</InputLabel>
                      <Select
                        key={field.id}
                        value={formData[field.id] || ""}
                        label={field.label}
                        onChange={(e) => handleChange(field.id, e.target.value)}
                        MenuProps={{
                          anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left",
                          },
                          transformOrigin: {
                            vertical: "top",
                            horizontal: "left",
                          },
                          PaperProps: {
                            style: {
                              maxHeight: 200,
                            },
                          },
                        }}
                      >
                        {field.options?.map((option) => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  ) : (
                    <TextField
                      fullWidth
                      id={field.id}
                      label={field.label}
                      type={field.type}
                      size={field.size}
                      required={field.required}
                      value={formData[field.id] || ""}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                    />
                  )}
                </Box>
              ))}
            </Box>
          </Paper>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>취소</Button>
        <Button
          variant="contained"
          disabled={
            !formData.supplier ||
            !formData.medicine ||
            !formData.manager ||
            !formData.transactionType ||
            !formData.quantity
          }
          onClick={handleSubmit}
        >
          등록
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReceiveDialog;
