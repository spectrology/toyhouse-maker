import React, { useEffect, useMemo, useState } from "react";
import {
    Box,
    Typography,
    Button,
    useTheme,
} from "@mui/material";
import { Character } from "../types/character";
import { useCharacterContext } from "../contexts/CharacterContext";
import { useLayoutContext } from "../contexts/LayoutContext";
import { useSettingsContext } from "../contexts/SettingsContext";
import Popout from "react-popout";

function compileTemplate(tpl: string, data: Character) {
    // Replace {{key}} with value (naive). Supports nested keys like a.b
    return tpl.replace(/{{\s*([^}]+)\s*}}/g, (_, path) => {
        const val = path.split(".").reduce((acc: any, p: string) => (acc ? acc[p] : undefined), data);
        return val == null ? "" : String(val);
    });
}

export const PageMaker: React.FC = () => {

    const theme = useTheme();
    const { layout } = useLayoutContext();
    const { toyhouseCss } = useSettingsContext();
    const { selectedId, characters } = useCharacterContext();
    const [characterData, setCharacterData] = useState<Character>(characters[0] || new Character("fake"));
    const [openPopout, setOpenPopout] = useState(true);

    useEffect(() => {
        if (selectedId && selectedId !== characterData?.id) {
            setCharacterData(characters.find((c) => c.id === selectedId) || characters[0] || null);
        }
    }, [selectedId])

    const htmlPreview = useMemo(() => {
        if (!characterData) return "<div style='color:#c00'>Invalid JSON</div>";
        const body = compileTemplate(layout.template, characterData);
        return `
            <style>
                @import url('https://toyhou.se/css/main.css');
                ${toyhouseCss}
            </style>
                ${body}
        `;
    }, [theme, characterData]);

    return (
        <Box display="flex" flexDirection="column" gap={2} overflow="hidden" p={3}>
            {/* HTML Preview: */}
            <Box height="calc(100vh - 280px)" sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                    <Typography variant="h5">HTML Preview</Typography>
                    <Box display="flex" gap={1}>
                        <Button variant="contained" onClick={(e) => {
                            e.preventDefault();
                            setFullscreenPreview(true);
                        }}>
                            Fulllscreen
                        </Button>
                        <Button variant="outlined" onClick={() => {
                            navigator.clipboard.writeText(compileTemplate(layout.template, characterData)).then(() => {
                                alert("HTML copied to clipboard!");
                            })
                        }}>
                            Copy HTML to Clipboard
                        </Button>
                    </Box>
                </Box>
                <Box
                    border={1}
                    borderColor="divider"
                >
                    <div
                        // intentionally using innerHTML to render templates; keep content from local JSON only
                        dangerouslySetInnerHTML={{ __html: htmlPreview }}
                    />
                </Box>
            </Box>
        </Box >
    );
}

export default PageMaker;
