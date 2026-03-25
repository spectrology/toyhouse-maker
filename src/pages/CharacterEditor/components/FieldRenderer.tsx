import React from 'react';
import { Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import { FieldConfig } from "../../../types/layout";
import DeleteIcon from '@mui/icons-material/Delete';

interface FieldRendererProps {
    sectionTitle?: string;
    fields: FieldConfig[];
    characterData: any;
    handleChange: (event: React.ChangeEvent<Omit<HTMLInputElement, "value"> & { value: any; }, Element>) => void;
    setAdditionalFields: React.Dispatch<React.SetStateAction<FieldConfig[]>>;
}

const FieldRenderer: React.FC<FieldRendererProps> = ({ sectionTitle, fields, characterData, handleChange, setAdditionalFields }: FieldRendererProps) => {

    return (
        <>
            {sectionTitle &&
                <Grid size={12} pt={1}>
                    {sectionTitle && (
                        <Typography variant="h6" gutterBottom>
                            {sectionTitle}
                        </Typography>
                    )}
                </Grid>
            }
            {fields.map(f => {
                const val = (characterData as any)[f.name];
                const valueProp = f.type === "color" ? (val || "#f7f7f7") : (val ?? "");
                return (
                    <Grid size={typeof f.size === "number" ? { xs: 12, sm: f.size ?? 12 } : f.size ?? 12} key={f.name}>
                        {f.type === "select" ? (
                            <FormControl fullWidth margin="normal">
                                <InputLabel>{f.label}</InputLabel>
                                <Select
                                    label={f.label}
                                    name={f.name}
                                    value={valueProp}
                                    onChange={(event) => { handleChange(event as React.ChangeEvent<Omit<HTMLInputElement, "value"> & { value: any; }, Element>) }}
                                >
                                    {f.options?.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        ) : (
                            <Box display="flex" alignItems="center">
                                <Box flexGrow={1}>
                                    <TextField
                                        fullWidth
                                        label={f.label}
                                        name={f.name}
                                        value={valueProp}
                                        onChange={handleChange}
                                        margin="normal"
                                        type={f.type === "number" || f.type === "color" ? f.type : "text"}
                                        placeholder={f.placeholder}
                                        multiline={f.type === "multiline"}
                                        minRows={f.rows}
                                        InputLabelProps={f.type === "color" ? { shrink: true } : undefined}
                                    />
                                </Box>
                                {/* Remove Field */}
                                {f.isCustom &&
                                    <Box>
                                        <IconButton
                                            color="error"
                                            onClick={() => {
                                                setAdditionalFields((prev) => prev.filter((field) => field.name !== f.name));
                                            }}
                                            sx={{ ml: 1 }}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Box>
                                }
                            </Box>
                        )}
                    </Grid>
                );
            })}
        </>
    )
}

export default FieldRenderer;
