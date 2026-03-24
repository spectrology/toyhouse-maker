import React, { useRef } from "react";
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
    Drawer,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";
import { useCharacterContext } from "../contexts/CharacterContext";
import { Character } from "../types/character";
import { useLayoutContext } from "../contexts/LayoutContext";
import { LAYOUTS } from "../layouts/layouts";
import { useSettingsContext } from "../contexts/SettingsContext";

function makeId() {
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}

interface SidebarProps {
    open: boolean;
    toggleDrawer: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, toggleDrawer }: SidebarProps) => {
    const { characters, addCharacter, addCharacters, selectedId, setSelectedId } = useCharacterContext();
    const { layout, setLayout } = useLayoutContext();

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleAddCharacter = () => {
        const id = makeId();
        addCharacter(new Character(id, `New Character ${characters.length + 1}`, undefined, undefined, undefined, undefined, undefined, "", "", new Date().toISOString()));
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
        <Drawer variant="permanent" open={open} onClose={toggleDrawer}>
            <Box borderBottom={1} borderColor="divider" p={1} display="flex" justifyContent="center" alignItems="center" gap={.5}>
                <Box width="32px" height="32px">
                    <img src={`${process.env.PUBLIC_URL}/assets/toymaker_logo.svg`} alt="logo_img" width="100%" height="100%" />
                </Box>
                <Typography variant="h6">
                    Toymaker
                </Typography>
            </Box>
            {/* Theme Selector: */}
            <Box borderBottom={1} borderColor="divider" p={1}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <FormControl sx={{ mt: 1 }} fullWidth>
                        <InputLabel id="theme-select-label">Theme</InputLabel>
                        <Select
                            labelId="theme-select-label"
                            value={layout.id}
                            label="Theme"
                            onChange={(e) => { setLayout(e.target.value) }}
                            size="small"
                        >
                            {LAYOUTS.map((t) => (
                                <MenuItem key={t.id} value={t.id}>
                                    <Box display="flex" alignItems="center" flexDirection="column" gap={1}>
                                        {t.previewImage && (
                                            <img src={t.previewImage} alt={t.name} style={{ width: 200, height: 100, objectFit: "cover" }} />
                                        )}
                                        <Box display="flex" alignItems="center" justifyContent="center">
                                            <Typography variant="h6">{t.name}</Typography>
                                        </Box>
                                    </Box>
                                </MenuItem>
                            ))}
                            <MenuItem key="custom" value={"custom"}>
                                <Box display="flex" alignItems="center" flexDirection="column" gap={1}>
                                    <Box width={200} height={100} bgcolor="grey.300" display="flex" alignItems="center" justifyContent="center">
                                        <Typography variant="h3" color="text.secondary">
                                            {`</>`}
                                        </Typography>
                                    </Box>
                                    <Box display="flex" alignItems="center" justifyContent="center">
                                        <Typography variant="h6">Custom</Typography>
                                    </Box>
                                </Box>
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>

            {/* Character Selector */}
            <Box sx={{ flex: 1, overflow: "auto", p: 1, width: "250px" }}>
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
            <Box sx={{ position: "sticky", bottom: 0, p: 1, borderTop: 1, borderColor: "divider", bgcolor: "background.paper" }}>
                <Stack direction="row" spacing={1}>
                    <Button fullWidth size="small" variant="outlined" onClick={handleAddCharacter} aria-label="Add another character">+ Add</Button>
                    <Button fullWidth size="small" variant="outlined" onClick={triggerImport}>Import</Button>
                    <Button fullWidth size="small" variant="outlined" onClick={exportData}>Export</Button>
                </Stack>
                <input ref={fileInputRef} type="file" accept="application/json" style={{ display: "none" }} onChange={onFileChange} />
            </Box>
        </Drawer>
    );
}

export default Sidebar;