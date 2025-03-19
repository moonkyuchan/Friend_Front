import React, { useState } from "react";
import { supabase } from "../../../../lib/supabase";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Paper,
} from "@mui/material";
import { textFieldData } from "../constants";

const ReceiveButton: React.FC = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async () => {
    const { error } = await supabase.rpc("insert_transaction", {
      p_supplier_name: formData.supplier,
      p_medicine_name: formData.medicine,
      p_manager_name: formData.manager,
      p_transaction_type: formData.transactionType,
      p_quantity: parseInt(formData.quantity, 10),
    });

    if (error) {
      console.error("입출고 데이터 저장 실패:", error.message);
    } else {
      console.log("입출고 데이터 저장 성공!");
    }
  };

  return (
    <Box sx={{ display: "flex", mb: 1, mt: 1 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsAddDialogOpen(true)}
        size="medium"
      >
        입/출고 등록
      </Button>

      <Dialog
        open={isAddDialogOpen}
        onClose={() => {
          setIsAddDialogOpen(false);
        }}
        maxWidth="md"
      >
        <DialogTitle sx={{ fontWeight: 700, fontSize: "1.5rem" }}>
          입 / 출고등록
        </DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <Paper variant="outlined" sx={{ p: 2 }}>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {textFieldData.map((field) => (
                  <Box
                    key={field.id}
                    sx={{
                      width: "100%",
                    }}
                  >
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
                          onChange={(e) =>
                            handleChange(field.id, e.target.value)
                          }
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
          <Button
            onClick={() => {
              setIsAddDialogOpen(false);
              setFormData({});
            }}
          >
            취소
          </Button>
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
    </Box>
  );
};

export default ReceiveButton;
