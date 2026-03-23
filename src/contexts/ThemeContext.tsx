import React, { createContext, useContext, useState, ReactNode } from "react";
import { Theme } from "../types/theme";
import { THEMES } from "../themes/themes";

type ThemeContextValue = {
    theme: Theme;
    setTheme: (themeId: string) => void;
};

const ThemeContext = createContext<ThemeContextValue>({
    theme: THEMES[0], // Set a default theme,
    setTheme: () => {}, // Placeholder, will be overridden in provider
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setThemeData] = useState<Theme>(THEMES[0]);

    const setTheme = (themeId: string) => {
        const found = THEMES.find((t) => t.id === themeId);
        if (found) setThemeData(found);
        else if (themeId === "custom") {
            const customTheme: Theme = {
                id: "custom",
                name: "Custom Theme",
                template: "<div>{{name}}</div>",
                additionalFields: [],
            };
            setThemeData(customTheme);
        }
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeContext;