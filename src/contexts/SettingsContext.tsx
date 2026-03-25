import React, { createContext, useContext, useState, ReactNode, useRef, useEffect } from "react";
import { lightTheme } from "./themes/lighttheme";
import { darkTheme } from "./themes/darktheme";
import { toyhouse_light_css } from "./toyhousecss/toyhouse_light";
import { toyhouse_dark_css } from "./toyhousecss/toyhouse_dark";

type SettingsContextValue = {
    mode: "light" | "dark";
    toyhouseCss: string;
    setMode: (mode: "light" | "dark") => void;
    fullscreenPreview: boolean,
    setFullscreenPreview: (setAs: boolean) => void
};

const SettingsContext = createContext<SettingsContextValue>({
    mode: "light",
    toyhouseCss: "",
    setMode: () => { },
    setFullscreenPreview: () => { },
    fullscreenPreview: false,
});

export const SettingsProvider: React.FC<{ children: ReactNode, currentTheme: any, setCurrentTheme: (theme: any) => void }> = ({ children, setCurrentTheme }) => {
    const [mode, setMode] = useState<"light" | "dark">("light");
    const [toyhouseCss, setToyhouseCss] = useState(toyhouse_light_css);
    const [fullscreenPreview, setFullscreenPreview] = useState(false);

    useEffect(() => {
        if (mode === "dark") {
            setToyhouseCss(toyhouse_dark_css);
            setCurrentTheme(darkTheme);
        } else {
            setToyhouseCss(toyhouse_light_css);
            setCurrentTheme(lightTheme);
        }

    }, [mode])


    return (
        <SettingsContext.Provider value={{ mode, setMode, toyhouseCss, fullscreenPreview, setFullscreenPreview }}>
            {children}
        </SettingsContext.Provider>
    );
};

export const useSettingsContext = () => useContext(SettingsContext);

export default SettingsContext;