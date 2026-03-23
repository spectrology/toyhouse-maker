import React from "react";
import {
    Tabs,
    Tab,
    Toolbar,
    AppBar,
    Typography,
    Grid,
    Box,
} from "@mui/material";

function makeId() {
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 9)}`;
}

interface HeaderProps {
    currentTab: number;
    setCurrentTab: (tab: number) => void;
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Header: React.FC<HeaderProps> = ({ currentTab, setCurrentTab }: HeaderProps) => {

    const handleChange = (event: React.SyntheticEvent, tabIndex: number) => {
        setCurrentTab(tabIndex);
    };

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
        }}>
            <Box px={2}>
                <Tabs value={currentTab} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Character Editor" {...a11yProps(0)} />
                    <Tab label="Page Maker" {...a11yProps(1)} />
                    <Tab label="Documentation" {...a11yProps(2)} />
                </Tabs>
            </Box>
        </Toolbar >
    );
}

export default Header;