import React, { useEffect, useState } from "react";
import { Box, TextField, Button, Container, Grid, FormControl, InputLabel, Select, MenuItem, Typography, Divider } from "@mui/material";
import { Character } from "../types/character";
import { useCharacterContext } from "../contexts/CharacterContext";
import { useLayoutContext } from "../contexts/LayoutContext";
import { FieldConfig } from "../types/layout";

const fields: FieldConfig[] = [
    { name: "name", label: "Name", type: "text", size: 12, isCustom: false },
    { name: "age", label: "Age", type: "number", size: 3.5, isCustom: false },
    { name: "ageunit", label: "Unit", type: "select", options: [{ value: "sweeps", label: "Sweeps" }, { value: "years", label: "Years" }], size: 2.5, isCustom: false },
    { name: "height", label: "Height", type: "text", size: 6, isCustom: false },
    { name: "pronouns", label: "Pronouns", type: "text", size: 6, placeholder: "e.g. she/her", isCustom: false },
    { name: "occupation", label: "Occupation", type: "text", size: 6, isCustom: false },
    { name: "color", label: "Associated Color", type: "color", size: 12, isCustom: false },
    { name: "bio", label: "About", type: "multiline", size: 12, rows: 4, isCustom: false },
];

const CharacterEditor: React.FC = () => {

    const { selectedId, setCharacter, characters, deleteCharacter } = useCharacterContext();
    const { layout } = useLayoutContext();
    const [characterData, setCharacterData] = useState<Character | null>(characters[0]);
    const [additionalFields, setAdditionalFields] = useState<FieldConfig[]>([]);
    const [nextAdditionalFieldName, setNextAdditionalFieldName] = useState<string>("");

    useEffect(() => {
        if (selectedId) {
            setCharacterData(characters.find((c) => c.id === selectedId) || characters[0]);
        } else {
            setCharacterData(null);
        }
    }, [selectedId])

    const handleChange = (e: React.ChangeEvent<Omit<HTMLInputElement, "value"> & { value: any; }, Element>) => {
        const { name, value } = e.target as HTMLInputElement;
        const cfg = fields.find((f) => f.name === name) || additionalFields.find((f) => f.name === name) || layout?.additionalFields?.find((f) => f.name === name);
        setCharacterData((prev) => ({
            ...(prev || new Character("fake")),
            [name]: cfg?.type === "number" ? (value === "" ? undefined : Number(value)) : value
        }));
    };

    const handleSave = () => {
        if (characterData) {
            console.log("Saved character:", characterData);
            setCharacter(selectedId!, characterData);
            alert("Character saved.");
        }
    };

    const addAdditionalField = (name: string) => {
        const newField: FieldConfig = {
            name: name as keyof Character & string,
            label: name.charAt(0).toUpperCase() + name.slice(1),
            type: "text",
            size: 12,
            isCustom: true,
        };
        setAdditionalFields((prev) => [...prev, newField]);
    };

    return (
        <Container maxWidth="md">

            {characterData &&
                <Box sx={{ display: "flex" }} p={3}>
                    <Box component="form" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                        <Box display="flex" alignItems="right" justifyContent="right" gap={1}>
                            <Button type="submit" variant="contained">Save</Button>
                            <Button type="button" onClick={() => deleteCharacter(selectedId!)} color="error" variant="contained">Delete</Button>
                        </Box>
                        <Grid container columnSpacing={1} mb={1}>
                            {[...fields, ...additionalFields, ...(layout.additionalFields || []).map(f => {
                                return {
                                    ...f,
                                    fromLayout: true,
                                }
                            })].map((f) => {
                                const val = (characterData as any)[f.name];
                                const valueProp = f.type === "color" ? (val || "#f7f7f7") : (val ?? "");
                                return (
                                    <Grid size={f.size ?? 12} key={f.name}>
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
                                                <Grid size={(f.isCustom || f.fromLayout) ? 10 : 12}>
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
                                                <Grid size={(f.isCustom || f.fromLayout) ? 2 : 0} sx={{ display: "flex", alignItems: "center" }}>
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
                                                    {f.fromLayout && (
                                                        <Typography variant="caption" color="textSecondary" sx={{ ml: 1 }}>From Theme</Typography>
                                                    )}
                                                </Grid>
                                            </Grid>
                                        )}
                                    </Grid>
                                );
                            })}
                        </Grid>
                        <Divider />
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
                    </Box>
                </Box>
            }
            {!characterData && (
                <Box pt={4}>
                    <Typography variant="h6" color="textSecondary">
                        No character selected.
                    </Typography>
                </Box>
            )}
        </Container>
    );
};

export default CharacterEditor;