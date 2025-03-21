import React, { useState } from "react";
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
  Typography,
} from "@mui/material";
import { textFieldData } from "../constants";

const RegisterButton: React.FC = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <Box sx={{ display: "flex", mb: 1, mt: 1 }}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsAddDialogOpen(true)}
        size="medium"
      >
        상품등록
      </Button>

      <Dialog
        open={isAddDialogOpen}
        onClose={() => {
          setIsAddDialogOpen(false);
        }}
        maxWidth="md"
        fullScreen
      >
        <DialogTitle sx={{ fontWeight: 700, fontSize: "1.5rem" }}>
          상품등록
        </DialogTitle>
        <DialogContent>
          <Box sx={{ mt: 2 }}>
            <Paper variant="outlined" sx={{ p: 2 }}>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                {textFieldData.slice(0, 3).map((field) => (
                  <Box
                    key={field.id}
                    sx={{
                      width: "100%",
                    }}
                  >
                    {field.type === "select" ? (
                      <FormControl
                        fullWidth
                        size={field.size}
                        required={field.required}
                      >
                        <InputLabel>{field.label}</InputLabel>
                        <Select
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

            {/* 공급업체 정보 그룹 */}
            <Paper variant="outlined" sx={{ mt: 2, p: 2 }}>
              <Typography
                variant="subtitle1"
                sx={{ mb: 2, fontWeight: "bold" }}
              >
                공급업체 정보
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                }}
              >
                {textFieldData.slice(3, 8).map((field) => (
                  <Box
                    key={field.id}
                    sx={{
                      width: "100%",
                    }}
                  >
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
              !formData.name ||
              !formData.category ||
              !formData.type ||
              !formData.supplier ||
              !formData.purchasePrice
            }
          >
            등록
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default RegisterButton;
