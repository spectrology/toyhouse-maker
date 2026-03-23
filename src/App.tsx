import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterEditor from './pages/CharacterEditor';
import { Box, Container, Grid, Tab, Tabs } from '@mui/material';
import PageMaker from './pages/PageMaker';
import Sidebar from './layout/Sidebar';
import CharacterContext, { CharacterProvider } from './contexts/CharacterContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './layout/Header';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}

function App() {

  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const [tab, setTab] = React.useState(0);

  return (
    <div className="App">
      <ThemeProvider>
        <CharacterProvider>
          <Sidebar open={sidebarOpen} toggleDrawer={() => setSidebarOpen(!sidebarOpen)} />
          <Box width={sidebarOpen ? "calc(100% - 250px)" : "100%"} ml={sidebarOpen ? "250px" : 0}
          >
            <Header currentTab={tab} setCurrentTab={setTab} />
            <CustomTabPanel value={tab} index={0}>
              <CharacterEditor />
            </CustomTabPanel>
            <CustomTabPanel value={tab} index={1}>
              <PageMaker />
            </CustomTabPanel>
          </Box>
        </CharacterProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
