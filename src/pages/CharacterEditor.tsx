import React, { useEffect, useState } from "react";
import { Box, TextField, Button, Container, Grid, FormControl, InputLabel, Select, MenuItem, Typography } from "@mui/material";
import { Character } from "../types/character";
import { useCharacterContext } from "../contexts/CharacterContext";
import { useThemeContext } from "../contexts/ThemeContext";
import { FieldConfig } from "../types/theme";

const fields: FieldConfig[] = [
    { name: "name", label: "Name", type: "text", xs: 12, isCustom: false },
    { name: "age", label: "Age", type: "number", xs: 3.5, isCustom: false },
    { name: "ageunit", label: "Unit", type: "select", options: [{ value: "sweeps", label: "Sweeps" }, { value: "years", label: "Years" }], xs: 2.5, isCustom: false },
    { name: "height", label: "Height", type: "text", xs: 6, isCustom: false },
    { name: "pronouns", label: "Pronouns", type: "text", xs: 6, placeholder: "e.g. she/her", isCustom: false },
    { name: "occupation", label: "Occupation", type: "text", xs: 6, isCustom: false },
    { name: "blood", label: "Blood", type: "color", xs: 12, isCustom: false },
    { name: "bio", label: "About", type: "multiline", xs: 12, rows: 4, isCustom: false },
];

const CharacterEditor: React.FC = () => {

    const { selectedId, setCharacter, characters } = useCharacterContext();
    const { theme } = useThemeContext();
    const [characterData, setCharacterData] = useState<Character>(characters[0]);
    const [additionalFields, setAdditionalFields] = useState<FieldConfig[]>([]);
    const [nextAdditionalFieldName, setNextAdditionalFieldName] = useState<string>("");

    useEffect(() => {
        if (selectedId) {
            setCharacterData(characters.find((c) => c.id === selectedId) || characters[0]);
        }
    }, [selectedId])

    const handleChange = (e: React.ChangeEvent<Omit<HTMLInputElement, "value"> & { value: any; }, Element>) => {
        const { name, value } = e.target as HTMLInputElement;
        const cfg = fields.find((f) => f.name === name) || additionalFields.find((f) => f.name === name) || theme?.additionalFields?.find((f) => f.name === name);
        setCharacterData((prev) => ({
            ...prev,
            [name]: cfg?.type === "number" ? (value === "" ? undefined : Number(value)) : value
        }));
    };

    const handleSave = () => {
        console.log("Saved character:", characterData);
        setCharacter(selectedId!, characterData);
        alert("Character saved (see console)");
    };

    const addAdditionalField = (name: string) => {
        const newField: FieldConfig = {
            name: name as keyof Character & string,
            label: name.charAt(0).toUpperCase() + name.slice(1),
            type: "text",
            xs: 12,
            isCustom: true,
        };
        setAdditionalFields((prev) => [...prev, newField]);
    };

    return (
        <Container sx={{ py: 3 }}>
            {characterData &&
                <Box sx={{ display: "flex", gap: 3 }}>
                    <Box component="form" onSubmit={(e) => { e.preventDefault(); handleSave(); }} sx={{ flex: 1, maxWidth: 720 }}>
                        <Grid container spacing={2}>
                            {[...fields, ...additionalFields, ...(theme.additionalFields || [])].map((f) => {
                                const val = (characterData as any)[f.name];
                                const valueProp = f.type === "color" ? (val || "#f7f7f7") : (val ?? "");
                                return (
                                    <Grid size={f.xs ?? 12} key={f.name}>
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
                                            <Grid container>
                                                <Grid size={(f.isCustom || f.fromTheme) ? 10 : 12}>
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
                                                </Grid>
                                                <Grid size={(f.isCustom || f.fromTheme) ? 2 : 0} sx={{ display: "flex", alignItems: "center" }}>
                                                    {f.isCustom && (
                                                        <Button
                                                            variant="outlined"
                                                            color="error"
                                                            onClick={() => {
                                                                setAdditionalFields((prev) => prev.filter((field) => field.name !== f.name));
                                                            }}
                                                            sx={{ ml: 1 }}
                                                        >
                                                            Remove
                                                        </Button>
                                                    )}
                                                    {f.fromTheme && (
                                                        <Typography variant="caption" color="textSecondary" sx={{ ml: 1 }}>From Theme</Typography>
                                                    )}
                                                </Grid>
                                            </Grid>
                                        )}
                                    </Grid>
                                );
                            })}
                        </Grid>
                        <Box display="flex" alignItems="center" mt={2}>
                            {/* Add Additional Field */}
                            <TextField
                                label="Add Custom Field"
                                fullWidth
                                value={nextAdditionalFieldName}
                                error={[...additionalFields, ...fields].some((f) => f.name === nextAdditionalFieldName)}
                                onChange={(e) => setNextAdditionalFieldName(e.target.value)}
                            />
                            <Button variant="outlined" disabled={!nextAdditionalFieldName || [...additionalFields, ...fields].some((f) => f.name === nextAdditionalFieldName)} onClick={() => { addAdditionalField(nextAdditionalFieldName); setNextAdditionalFieldName(""); }}
                                sx={{ ml: 1, whiteSpace: "nowrap" }}
                            >
                                Add Field
                            </Button>
                        </Box>
                        {[...additionalFields, ...fields].some((f) => f.name === nextAdditionalFieldName) && (
                            <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                                Field with this name already exists.
                            </Typography>
                        )}
                        <Button type="submit" variant="contained" sx={{ mt: 2 }}>Save</Button>
                    </Box>
                </Box>
            }
            {!characterData && (
                <Typography variant="h6" color="textSecondary">
                    No character selected.
                </Typography>
            )}
        </Container>
    );
};

export default CharacterEditor;