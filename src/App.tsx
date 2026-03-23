import React, { useEffect } from 'react';
import './App.css';
import CharacterEditor from './pages/CharacterEditor';
import { Box, createTheme, Paper, ThemeProvider } from '@mui/material';
import PageMaker from './pages/PageMaker';
import Sidebar from './layout/Sidebar';
import { CharacterProvider } from './contexts/CharacterContext';
import { LayoutProvider } from './contexts/LayoutContext';
import Header from './layout/Header';
import Documentation from './pages/Documentation';
import { light } from '@mui/material/styles/createPalette';

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

  useEffect(() => {
    document.title = "Toymaker";
  }, [])

  const darkTheme = createTheme(
    {
      "palette": {
        "mode": "dark",
        "background": {
          "default": "#090909",
          "paper": "#090909"
        },
        "primary": {
          "main": "#4a4a59"
        },
        "secondary": {
          "main": "#939393"
        },
        "warning": {
          "main": "#f7bf41"
        },
        "info": {
          "main": "#02d1c1"
        },
        "success": {
          "main": "#bcd862"
        },
        "error": {
          "main": "#e14646"
        }
      },
      "shape": {
        "borderRadius": 10
      },
      "typography": {
        "fontWeightLight": 400,
        "fontWeightRegular": 500,
        "fontWeightMedium": 600,
        "fontWeightBold": 800,
        "fontSize": 14
      },
      "shadows": [
        "none",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  )

  const lightTheme = createTheme(
    {
      "palette": {
        "mode": "light",
        "background": {
          "default": "#f6f6f6",
          "paper": "rgb(249, 249, 249)"
        },
        "primary": {
          "main": "#4a4a59"
        },
        "secondary": {
          "main": "#939393"
        },
        "warning": {
          "main": "#f7bf41"
        },
        "info": {
          "main": "#02d1c1"
        },
        "success": {
          "main": "#bcd862"
        },
        "error": {
          "main": "#e14646"
        }
      },
      "shape": {
        "borderRadius": 10
      },
      "typography": {
        "fontFamily": "Arial",
        "fontWeightLight": 400,
        "fontWeightRegular": 500,
        "fontWeightMedium": 600,
        "fontWeightBold": 800,
        "fontSize": 14
      },
      "shadows": [
        "none",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  );

  const [currentTheme, setCurrentTheme] = React.useState(lightTheme);

  return (
    <div className="App">
      <meta name="title" content="Spec's Toyhouse Maker" />
      <meta name="description" content="A tool to create character pages for Toyhouse. Create and manage character data, then generate HTML to copy into Toyhouse's custom page editor." />
      <ThemeProvider theme={currentTheme}>
        <LayoutProvider>
          <CharacterProvider>
            <Sidebar open={sidebarOpen} toggleDrawer={() => setSidebarOpen(!sidebarOpen)} />

            <Paper><Box minHeight="100vh" width={sidebarOpen ? "calc(100% - 250px)" : "100%"} ml={sidebarOpen ? "250px" : 0}>
              <Header setCurrentTheme={(themeType) => setCurrentTheme(themeType === "dark" ? darkTheme : lightTheme)} currentTheme={currentTheme} currentTab={tab} setCurrentTab={setTab} />
              <CustomTabPanel value={tab} index={0}>
                <CharacterEditor />
              </CustomTabPanel>
              <CustomTabPanel value={tab} index={1}>
                <PageMaker />
              </CustomTabPanel>
              <CustomTabPanel value={tab} index={2}>
                <Documentation />
              </CustomTabPanel>
            </Box>
            </Paper>
          </CharacterProvider>
        </LayoutProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
