import React from "react";
import {
    Tabs,
    Tab,
    Toolbar,
    Box,
    Button,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useSettingsContext } from "../contexts/SettingsContext";
import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps {
    currentTab: number;
    setCurrentTab: (tab: number) => void;
    setSidebarOpen: (setAs: boolean) => void;
    sidebarOpen: boolean,
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Header: React.FC<HeaderProps> = ({ currentTab, setCurrentTab, setSidebarOpen, sidebarOpen }: HeaderProps) => {

    const handleChange = (event: React.SyntheticEvent, tabIndex: number) => {
        setCurrentTab(tabIndex);
    };
    const theme = useTheme();
    const bigScreen = useMediaQuery(theme.breakpoints.up('sm'));

    const { mode, setMode } = useSettingsContext();

    return (
        <Toolbar sx={{
            borderBottom: 1,
            borderColor: 'divider',
            padding: "none !important",
            minHeight: "0 !important",
            position: "sticky",
            backgroundColor: "background.paper",
            zIndex: 1200,
            sticky: "top",
            top: 0,
            display: "flex",
            justifyContent: "space-between",
        }}>
            {(!bigScreen) &&
                <Box>
                    <Button onClick={() => setSidebarOpen(true)}>
                        <MenuIcon />
                    </Button>
                </Box>
            }
            <Box px={2}>
                <Tabs value={currentTab} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Character Editor" {...a11yProps(0)} />
                    <Tab label="Page Maker" {...a11yProps(1)} />
                    <Tab label="Documentation" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <Box>
                <Button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                    {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
                </Button>
            </Box>
        </Toolbar >
    );
}

export default Header;