import React, { useEffect, useState } from "react";
import { Box, TextField, Button, Container, Grid, FormControl, InputLabel, Select, MenuItem, Typography, Divider, Tooltip } from "@mui/material";
import { Character } from "../../types/character";
import { useCharacterContext } from "../../contexts/CharacterContext";
import { useLayoutContext } from "../../contexts/LayoutContext";
import { FieldConfig } from "../../types/layout";
import BackupTableIcon from '@mui/icons-material/BackupTable';
import FieldRenderer from "./components/FieldRenderer";

const fields: FieldConfig[] = [
    { name: "name", label: "Name", type: "text", size: 12, isCustom: false },
    { name: "age", label: "Age", type: "text", size: 6, isCustom: false },
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

        <Box>
            {characterData &&
                <Box sx={{ display: "flex" }}>
                    <Box component="form" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
                        <Box display="flex" alignItems="right" justifyContent="right" gap={1}>
                            <Button type="submit" variant="contained">Save</Button>
                            <Button type="button" onClick={() => deleteCharacter(selectedId!)} color="error" variant="contained">Delete</Button>
                        </Box>
                        <Grid container columnSpacing={1} mb={1}>
                            <FieldRenderer fields={fields} characterData={characterData} handleChange={handleChange} setAdditionalFields={setAdditionalFields} />
                            <FieldRenderer fields={additionalFields} characterData={characterData} handleChange={handleChange} setAdditionalFields={setAdditionalFields} />
                            <FieldRenderer sectionTitle="From Layout" fields={layout.additionalFields || []} characterData={characterData} handleChange={handleChange} setAdditionalFields={setAdditionalFields} />
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
        </Box>
    );
};

export default CharacterEditor;