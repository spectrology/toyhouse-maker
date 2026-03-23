import React, { createContext, useContext, useState, ReactNode, useRef } from "react";
import { Theme } from "../types/theme";
import { THEMES } from "../themes/themes";

type ThemeContextValue = {
    theme: Theme;
    setTheme: (themeId: string) => void;
};

const ThemeContext = createContext<ThemeContextValue>({
    theme: THEMES[0], // Set a default theme,
    setTheme: () => { }, // Placeholder, will be overridden in provider
});

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setThemeData] = useState<Theme>(THEMES[0]);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const setTheme = (themeId: string) => {
        const found = THEMES.find((t) => t.id === themeId);
        if (found) setThemeData(found);
        else if (themeId === "custom") {
            fileInputRef.current?.click();
        }
    }

    const onFileChange: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        try {
            const text = await file.text();
            setThemeData({
                id: "custom",
                name: "Custom Theme",
                template: text,
            });
        } finally {
            if (fileInputRef.current) fileInputRef.current.value = "";
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <input ref={fileInputRef} type="file" accept="application/json" style={{ display: "none" }} onChange={onFileChange} />
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeContext;