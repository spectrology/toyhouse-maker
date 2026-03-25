import React from "react";
import {
    Tabs,
    Tab,
    Toolbar,
    Box,
    Button,
    useMediaQuery,
    useTheme,
    Typography,
} from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useSettingsContext } from "../contexts/SettingsContext";
import MenuIcon from '@mui/icons-material/Menu';
import LogoDisplay from "../components/TitleDisplay";

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
            position: "sticky",
            backgroundColor: "background.paper",
            zIndex: 1200,
            sticky: "top",
            minHeight: "64px !important",
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
            {bigScreen &&
                <Box maxWidth="calc(100% - 64px)">
                    <Tabs value={currentTab} onChange={handleChange} aria-label="basic tabs example" variant="scrollable">
                        <Tab label="Character Editor" {...a11yProps(0)} />
                        <Tab label="Page Maker" {...a11yProps(1)} />
                        <Tab label="Documentation" {...a11yProps(2)} />
                    </Tabs>
                </Box>}
            {!bigScreen &&
                <LogoDisplay />
            }
            <Box>
                <Button onClick={() => setMode(mode === "light" ? "dark" : "light")}>
                    {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
                </Button>
            </Box>
        </Toolbar >
    );
}

export default Header;