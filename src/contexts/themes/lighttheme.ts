import { createTheme } from "@mui/material";


export const lightTheme = createTheme(
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