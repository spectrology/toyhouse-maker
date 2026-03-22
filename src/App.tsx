import React from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterEditor from './pages/CharacterEditor';
import { Box, Grid, Tab, Tabs } from '@mui/material';
import PageMaker from './pages/PageMaker';
import Sidebar from './layout/Sidebar';
import CharacterContext, { CharacterProvider } from './contexts/CharacterContext';
import { ThemeProvider } from './contexts/ThemeContext';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function App() {

  const [tab, setTab] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <div className="App">
      <ThemeProvider>
        <CharacterProvider>
          <Grid container minHeight="100vh">
            <Grid size={3}>
              <Sidebar />
            </Grid>
            <Grid size={9}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={tab} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Character Editor" {...a11yProps(0)} />
                  <Tab label="Page Maker" {...a11yProps(1)} />
                </Tabs>
              </Box>
              <CustomTabPanel value={tab} index={0}>
                <CharacterEditor />
              </CustomTabPanel>
              <CustomTabPanel value={tab} index={1}>
                <PageMaker />
              </CustomTabPanel>
            </Grid>
          </Grid>
        </CharacterProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
