import React, { useEffect, useMemo, useState } from "react";
import {
    Box,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Typography,
    Paper,
} from "@mui/material";
import { Character } from "../types/character";
import { useCharacterContext } from "../contexts/CharacterContext";
import { THEMES } from "../themes/themes";

function compileTemplate(tpl: string, data: Character) {
    // Replace {{key}} with value (naive). Supports nested keys like a.b
    return tpl.replace(/{{\s*([^}]+)\s*}}/g, (_, path) => {
        const val = path.split(".").reduce((acc: any, p: string) => (acc ? acc[p] : undefined), data);
        return val == null ? "" : String(val);
    });
}

export default function PageMaker({ initialCharacter }: { initialCharacter?: Character }) {
    const [selectedThemeId, setSelectedThemeId] = useState<string>(THEMES[0].id);
    const [error, setError] = useState<string | null>(null);

    const theme = THEMES.find((t) => t.id === selectedThemeId) ?? THEMES[0];

    const { selectedId, setCharacter, characters } = useCharacterContext();
    const [characterData, setCharacterData] = useState<Character>(characters[0] || new Character("fake"));

    useEffect(() => {
        if (selectedId) {
            setCharacterData(characters.find((c) => c.id === selectedId) || characters[0] || null);
        }
    }, [selectedId])

    const htmlPreview = useMemo(() => {
        if (!characterData) return "<div style='color:#c00'>Invalid JSON</div>";
        const body = compileTemplate(theme.template, characterData);
        return `<link href="https://toyhou.se/css/main.css?cachebust=1774093547" rel="stylesheet">
                <link href="https://toyhou.se/css/site_bootstrap.css?cachebust=1774093547" rel="stylesheet">
                    ${body}`;
    }, [theme, characterData]);

    return (
        <Box>
            {/* Theme Selector: */}
            <Box>
                <Typography variant="subtitle2">Theme</Typography>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <FormControl sx={{ mt: 1 }} fullWidth>
                        <InputLabel id="theme-select-label">Theme</InputLabel>
                        <Select
                            labelId="theme-select-label"
                            value={selectedThemeId}
                            label="Theme"
                            onChange={(e) => setSelectedThemeId(String(e.target.value))}
                            size="small"
                        >
                            {THEMES.map((t) => (
                                <MenuItem key={t.id} value={t.id}>
                                    {t.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            </Box>

            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography variant="subtitle2">HTML Preview</Typography>
                <Paper
                    variant="outlined"
                    sx={{ flex: 1, borderRadius: 1, p: 1, bgcolor: "background.paper", overflow: "auto" }}
                >
                    <div
                        // intentionally using innerHTML to render templates; keep content from local JSON only
                        dangerouslySetInnerHTML={{ __html: htmlPreview }}
                    />
                </Paper>
            </Box>
        </Box>
    );
}