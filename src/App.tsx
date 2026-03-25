import React, { useEffect } from 'react';
import './App.css';
import CharacterEditor from './pages/CharacterEditor/CharacterEditor';
import { Box, Breakpoint, createTheme, Paper, ThemeProvider, useMediaQuery } from '@mui/material';
import PageMaker from './pages/PageMaker';
import Sidebar from './layout/Sidebar/Sidebar';
import { CharacterProvider } from './contexts/CharacterContext';
import { LayoutProvider } from './contexts/LayoutContext';
import Header from './layout/Header';
import Documentation from './pages/Documentation/Documentation';
import { lightTheme } from './contexts/themes/lighttheme';
import { darkTheme } from './contexts/themes/darktheme';
import { SettingsProvider } from './contexts/SettingsContext';
import PageWrapper from './layout/PageWrapper';

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
  const [tab, setTab] = React.useState(2);

  useEffect(() => {
    document.title = "Toymaker";
  }, [])

  const [currentTheme, setCurrentTheme] = React.useState(lightTheme);
  const bigScreen = useMediaQuery(currentTheme.breakpoints.up('sm'));

  const pageSizes = [
    "md",
    "lg",
    "md"
  ]

  return (
    <div className="App">
      <meta name="title" content="Spec's Toyhouse Maker" />
      <meta name="description" content="A tool to create character pages for Toyhouse. Create and manage character data, then generate HTML to copy into Toyhouse's custom page editor." />
      <ThemeProvider theme={currentTheme}>
        <SettingsProvider currentTheme={currentTheme} setCurrentTheme={setCurrentTheme}>
          <LayoutProvider>
            <CharacterProvider>
              <Sidebar currentTab={tab} setCurrentTab={setTab} open={sidebarOpen || bigScreen} toggleDrawer={() => setSidebarOpen(!sidebarOpen)} />
              <Paper>
                <Box minHeight="100vh" width={bigScreen ? "calc(100% - 250px)" : "100%"} ml={bigScreen ? "250px" : 0}>
                  <Header sidebarOpen={sidebarOpen} setSidebarOpen={(status) => setSidebarOpen(status)} currentTab={tab} setCurrentTab={setTab} />
                  <PageWrapper pageWidth={pageSizes[tab] as Breakpoint}>
                    <CustomTabPanel value={tab} index={0}>
                      <CharacterEditor />
                    </CustomTabPanel>
                    <CustomTabPanel value={tab} index={1}>
                      <PageMaker />
                    </CustomTabPanel>
                    <CustomTabPanel value={tab} index={2}>
                      <Documentation />
                    </CustomTabPanel>
                  </PageWrapper>
                </Box>
              </Paper>
            </CharacterProvider>
          </LayoutProvider>
        </SettingsProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
