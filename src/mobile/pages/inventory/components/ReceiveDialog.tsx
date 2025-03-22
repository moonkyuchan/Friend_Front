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

interface ReceiveDialogProps {
  open: boolean;
  onClose: () => void;
}

interface FormData {
  supplier?: string | number;
  medicine?: string | number;
  manager?: string | number;
  transactionType?: string | number;
  quantity?: string | number;
  [key: string]: string | number | undefined;
}

const ReceiveDialog: React.FC<ReceiveDialogProps> = ({ open, onClose }) => {
  const [formData, setFormData] = useState<FormData>({});
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [loading, setLoading] = useState(false);
  const [medicines, setMedicines] = useState<{ id: number; name: string }[]>(
    []
  );
  console.log("formData", formData);

  // console.log("FormData:", formData, "suppliers:", suppliers);

  // 1. 제약사 목록을 DB에서 가져온다 (id와 name)
  useEffect(() => {
    const fetchSuppliers = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("suppliers")
          .select("id, name")
          .order("name");

        if (error) throw error;
        // 2. suppliers 상태에 데이터 저장
        setSuppliers(data || []);
      } catch (error) {
        console.error("공급자 목록을 가져오는 중 오류 발생:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSuppliers();
  }, []);

  // 7. formData.supplier가 변경될 때 해당 제약사의 의약품 목록을 가져옴
  useEffect(() => {
    console.log("의약품찾기 시작");
    if (formData.supplier) {
      const fetchMedicines = async () => {
        setLoading(true);
        try {
          // supplier_medicine_link 테이블과 medicines 테이블 조인
          const { data, error } = await supabase
            .from("supplier_medicine_link")
            .select(
              `
              medicine_id,
              medicines:medicine_id(id, name)
            `
            )
            .eq("supplier_id", formData.supplier);

          if (error) throw error;

          console.log("의약품 데이터 응답:", data);

          if (data && data.length > 0) {
            // medicines 객체에서 필요한 데이터 추출
            const medicinesData = data
              .filter((item: any) => item.medicines) // null이 아닌 항목만 필터링
              .map((item: any) => ({
                id: item.medicines.id,
                name: item.medicines.name,
              }));

            console.log("가공된 의약품 데이터:", medicinesData);
            setMedicines(medicinesData);
          } else {
            // 데이터가 없으면 빈 배열로 설정
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
      // supplier가 선택되지 않았으면 의약품 목록 초기화
      setMedicines([]);
    }
  }, [formData.supplier]); // formData.supplier가 변경될 때만 실행

  // input 변경 처리 함수
  const handleChange = (id: string, value: string | number) => {
    // 4. 제약사를 선택하면 해당 값 처리
    if (id === "supplier") {
      // 제약사 이름으로 객체 찾기
      const selectedSupplier = suppliers.find(
        (supplier) => supplier.name === value
      );

      if (selectedSupplier) {
        // 5 & 6. formData의 supplier 값을 해당 제약사의 ID로 저장
        setFormData((prev) => ({
          ...prev,
          supplier: selectedSupplier.id, // 이름 대신 ID 저장
        }));
        console.log(`제약사 "${value}" 선택됨, ID: ${selectedSupplier.id}`);
      }

      // 제약사가 변경되면 의약품 선택 초기화
      setFormData((prev) => ({ ...prev, medicine: "" }));
    } else if (id === "medicine") {
      // 의약품 이름으로 객체 찾기
      const selectedMedicine = medicines.find(
        (medicine) => medicine.name === value
      );

      if (selectedMedicine) {
        // formData의 medicine 값을 해당 의약품의 ID로 저장
        setFormData((prev) => ({
          ...prev,
          medicine: selectedMedicine.id, // 이름 대신 ID 저장
        }));
        console.log(`의약품 "${value}" 선택됨, ID: ${selectedMedicine.id}`);
      }
    } else {
      // 담당자, 입출고, 수량 등 다른 필드는 그대로 값 저장
      setFormData((prev) => ({ ...prev, [id]: value }));
      console.log(`${id} 필드 값 변경: ${value}`);
    }
  };

  const handleSubmit = async () => {
    if (!formData.quantity) return;

    // 선택된 제약사와 의약품의 이름 찾기 (ID가 저장되어 있으므로)
    const supplierName =
      suppliers.find((s) => s.id === formData.supplier)?.name || "";
    const medicineName =
      medicines.find((m) => m.id === formData.medicine)?.name || "";

    console.log("제출 데이터 확인:", {
      supplierName,
      medicineName,
      manager: formData.manager,
      transactionType: formData.transactionType,
      quantity: formData.quantity,
    });

    const { error } = await supabase.rpc("insert_transaction", {
      p_supplier_name: supplierName,
      p_medicine_name: medicineName,
      p_manager_name: String(formData.manager || ""),
      p_transaction_type: String(formData.transactionType || ""),
      p_quantity:
        typeof formData.quantity === "string"
          ? parseInt(formData.quantity, 10)
          : formData.quantity || 0,
    });

    console.log("submit버튼", formData);
    if (error) {
      console.error("입출고 데이터 저장 실패:", error.message);
    } else {
      console.log("입출고 데이터 저장 성공!");
      onClose();
      setFormData({});
    }
  };

  const handleClose = () => {
    onClose();
    setFormData({});
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
              {/* 3. 공급자 선택 - 첫번째 셀렉트 옵션 */}
              <Box sx={{ width: "100%" }}>
                <FormControl fullWidth size="small" required>
                  <InputLabel>제약사</InputLabel>
                  <Select
                    value={
                      typeof formData.supplier === "number"
                        ? suppliers.find((s) => s.id === formData.supplier)
                            ?.name || ""
                        : formData.supplier || ""
                    }
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
                    value={
                      typeof formData.medicine === "number"
                        ? medicines.find((m) => m.id === formData.medicine)
                            ?.name || ""
                        : formData.medicine || ""
                    }
                    label="의약품"
                    onChange={(e) => handleChange("medicine", e.target.value)}
                    disabled={loading || !formData.supplier}
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
