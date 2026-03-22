import React, { useRef, useEffect } from "react";
import {
    Box,
    List,
    ListItemButton,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Typography,
    Button,
    Stack,
    Divider,
} from "@mui/material";
import { useCharacterContext } from "../contexts/CharacterContext";
import { Character } from "../types/character";
import { useThemeContext } from "../contexts/ThemeContext";

function makeId() {
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}

const Sidebar: React.FC = () => {
    const { characters, addCharacter, addCharacters, selectedId, setSelectedId } = useCharacterContext();
    const { theme } = useThemeContext();

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleAddCharacter = () => {
        const id = makeId();
        addCharacter(new Character(id, `New Character ${characters.length + 1}`, undefined, undefined, undefined, undefined, undefined, "", new Date().toISOString()));
        setSelectedId(id);
    };

    const triggerImport = () => fileInputRef.current?.click();

    const onFileChange: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        try {
            const text = await file.text();
            const parsed = JSON.parse(text);
            const incoming: Character[] = Array.isArray(parsed)
                ? parsed.map((p) => normalize(p))
                : [normalize(parsed)];
            // add to context (ensureId inside context will fill ids)
            console.log(incoming)
            addCharacters(incoming as any);
            if (incoming[0]) setSelectedId(incoming[0].id);
        } catch {
            alert("Failed to import characters. Ensure the file is valid JSON.");
        } finally {
            if (fileInputRef.current) fileInputRef.current.value = "";
        }
    };

    const normalize = (obj: any): Character => {
        return {
            id: typeof obj?.id === "string" ? obj.id : makeId(),
            name: typeof obj?.name === "string" ? obj.name : "Unnamed",
            bio: typeof obj?.bio === "string" ? obj.bio : "",
            createdAt: typeof obj?.createdAt === "string" ? obj.createdAt : new Date().toISOString(),
        };
    };

    const exportData = () => {
        const data = JSON.stringify(characters, null, 2);
        const blob = new Blob([data], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "characters.json";
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    };

    return (
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column", borderRight: "1px solid", borderColor: "divider", bgcolor: "background.paper" }}>
            <Box sx={{ height: "48px", borderBottom: 1, borderColor: "divider", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                    Spec's Select
                </Typography>
            </Box>
            <Box borderBottom={1} borderColor="divider" p={1}>
                Selected Theme: {theme.name}
            </Box>

            <Box sx={{ flex: 1, overflow: "auto", p: 1 }}>
                <List>
                    {characters.map((ch) => (
                        <ListItemButton key={ch.id} selected={ch.id === selectedId} onClick={() => setSelectedId(ch.id)} sx={{ borderRadius: 1, mb: 1 }}>
                            <ListItemAvatar>
                                <Avatar sx={{ bgcolor: "grey.100", color: "text.primary", fontWeight: 700 }}>{ch.name.charAt(0).toUpperCase() || "?"}</Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={ch.name} secondary={ch.occupation || "No occupation"} />
                        </ListItemButton>
                    ))}
                </List>
            </Box>

            <Divider />

            <Box sx={{ position: "sticky", bottom: 0, p: 1, bgcolor: "background.paper" }}>
                <Stack direction="row" spacing={1}>
                    <Button fullWidth variant="outlined" onClick={handleAddCharacter} aria-label="Add another character">+ Add</Button>
                    <Button fullWidth variant="outlined" onClick={triggerImport}>Import</Button>
                    <Button fullWidth variant="outlined" onClick={exportData}>Export</Button>
                </Stack>
                <input ref={fileInputRef} type="file" accept="application/json" style={{ display: "none" }} onChange={onFileChange} />
            </Box>
        </Box>
    );
}

export default Sidebar;