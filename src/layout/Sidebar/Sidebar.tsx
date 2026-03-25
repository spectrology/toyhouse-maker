import React, { useRef, useState } from "react";
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
    Chip,
    useTheme,
    useMediaQuery,
    Tooltip,
} from "@mui/material";
import { useCharacterContext } from "../../contexts/CharacterContext";
import { Character } from "../../types/character";
import { useLayoutContext } from "../../contexts/LayoutContext";
import { LAYOUTS } from "../../layouts/layouts";
import SearchIcon from '@mui/icons-material/Search';
import LogoDisplay from "../../components/TitleDisplay";
import { SearchBar } from "./SearchBar";

function makeId() {
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}

interface SidebarProps {
    open: boolean;
    toggleDrawer: () => void;
    currentTab: number;
    setCurrentTab: (tab: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ open, toggleDrawer, currentTab, setCurrentTab }: SidebarProps) => {
    const { characters, addCharacter, addCharacters, selectedId, setSelectedId } = useCharacterContext();
    const { layout, setLayout } = useLayoutContext();
    const theme = useTheme();
    const bigScreen = useMediaQuery(theme.breakpoints.up('sm'));
    const [characterFilter, setCharacterFilter] = useState<string>("");

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleAddCharacter = () => {
        const id = makeId();
        addCharacter(new Character(id, `New Character ${characters.length + 1}`, undefined, undefined, undefined, undefined, undefined, "", "", new Date().toISOString()));
        setSelectedId(id);
        if (currentTab === 2) setCurrentTab(0);
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
            addCharacters(incoming as any);
            if (incoming[0]) setSelectedId(incoming[0].id);
            // If characters are uploaded and we're looking at docs, go to character editor
            if (currentTab === 2) setCurrentTab(0);
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
        const blob = new Blob([data], { type: ".tymkr" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "characters.tymkr";
        document.body.appendChild(a);
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    };

    return (
        <Drawer variant={bigScreen ? "persistent" : "temporary"} open={open} onClose={toggleDrawer}>
            <Box borderBottom={1} borderColor="divider">
                <LogoDisplay />
            </Box>
            {/* Small Screen Tab Selector */}
            {!bigScreen &&
                <FormControl fullWidth>
                    <Select value={currentTab} onChange={(e) => setCurrentTab(e.target.value as number)} fullWidth size="small" sx={{ borderRadius: 0 }}>
                        <MenuItem value={0}>Character Editor</MenuItem>
                        <MenuItem value={1}>Page Maker</MenuItem>
                        <MenuItem value={2}>Documentation</MenuItem>
                    </Select>
                </FormControl>
            }
            {/* Layout Selector: */}
            <Box borderBottom={1} borderColor="divider" p={1}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                    <FormControl sx={{ mt: 1 }} fullWidth>
                        <InputLabel id="layout-select-label">Layout</InputLabel>
                        <Select
                            labelId="layout-select-label"
                            value={layout.id}
                            label="Layout"
                            onChange={(e) => { setLayout(e.target.value) }}
                            size="small"
                        >
                            {LAYOUTS.map((t) => (
                                <MenuItem key={t.id} value={t.id}>
                                    {bigScreen &&
                                        <Box display="flex" alignItems="center" flexDirection="column" gap={1}>
                                            {t.previewImage && (
                                                <img src={t.previewImage} alt={t.name} style={{ width: 200, height: 100, objectFit: "cover" }} />
                                            )}
                                            <Box display="flex" alignItems="center" justifyContent="center">
                                                <Typography variant="h6">{t.name}</Typography>
                                            </Box>
                                        </Box>
                                    }
                                    {!bigScreen && t.name}
                                </MenuItem>
                            ))}
                            <MenuItem key="custom" value={"custom"}>
                                {bigScreen &&
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
                                }
                                {!bigScreen && "Custom"}
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>

            {/* Character Selector */}
            <Box py={1} sx={{ borderBottom: 1, borderColor: "divider" }} display="flex" alignItems="center" justifyContent="space-between">
                <SearchBar title="Characters" onSearch={setCharacterFilter} />
            </Box>
            <Box sx={{ flex: 1, overflow: "auto", p: 1, width: "250px" }}>
                {!!characters.length &&
                    <List>
                        {characters.filter((ch) => ch.name.toLowerCase().includes(characterFilter.toLowerCase())).map((ch) => (
                            <ListItemButton key={ch.id} selected={ch.id === selectedId} onClick={() => {
                                setSelectedId(ch.id)
                                if (currentTab === 2) setCurrentTab(0);
                            }} sx={{ borderRadius: 1, mb: 1 }}>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: "grey.100", color: "text.primary", fontWeight: 700 }}>{ch.name.charAt(0).toUpperCase() || "?"}</Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={ch.name} secondary={ch.occupation || "No occupation"} />
                            </ListItemButton>
                        ))}
                    </List>
                }
                {!characters.length &&
                    <Box px={3}>
                        <Typography my={2} variant="body2" color="text.secondary" textAlign="center" >
                            No characters yet.
                        </Typography>
                        <Typography variant="body2" color="text.secondary" textAlign="center">
                            Click <b>"Add"</b> to create your first character, or <b>"Import"</b> to load a Toymaker file.
                        </Typography>
                    </Box>}
                    {!!characterFilter.length && !characters.some((ch) => ch.name.toLowerCase().includes(characterFilter.toLowerCase())) && (
                        <Box px={3}>
                            <Typography my={2} variant="body2" color="text.secondary" textAlign="center" >
                                No characters match your search.
                            </Typography>
                        </Box>
                    )}
            </Box>
            <Box sx={{ position: "sticky", bottom: 0, p: 1, borderTop: 1, borderColor: "divider", bgcolor: "background.paper" }}>
                <Stack direction="row" spacing={1}>
                    <Button fullWidth size="small" variant="outlined" onClick={handleAddCharacter} aria-label="Add another character">+ Add</Button>
                    <Button fullWidth size="small" variant="outlined" onClick={triggerImport}>Import</Button>
                    <Button fullWidth size="small" variant="outlined" onClick={exportData}>Export</Button>
                </Stack>
                <input ref={fileInputRef} type="file" accept=".tymkr, application/json" style={{ display: "none" }} onChange={onFileChange} />
            </Box>
        </Drawer>
    );
}

export default Sidebar;