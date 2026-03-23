import React, { createContext, useContext, useState, ReactNode, useRef } from "react";
import { Layout } from "../types/layout";
import { LAYOUTS } from "../layouts/layouts";

type LayoutContextValue = {
    theme: Layout;
    setTheme: (themeId: string) => void;
};

const LayoutContext = createContext<LayoutContextValue>({
    theme: LAYOUTS[0], // Set a default theme,
    setTheme: () => { }, // Placeholder, will be overridden in provider
});

export const LayoutProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setThemeData] = useState<Layout>(LAYOUTS[0]);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const setTheme = (themeId: string) => {
        const found = LAYOUTS.find((t) => t.id === themeId);
        if (found) setThemeData(found);
        else if (themeId === "custom") {
            fileInputRef.current?.click();
        }
    }

    const onFileChange: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const text = await file.text();
        try {
            const parsed = JSON.parse(text);
            // Basic validation
            if (typeof parsed.name === "string" && typeof parsed.template === "string") {
                setThemeData(parsed);
            } else {

            }
        }
        catch (e) {
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
        <LayoutContext.Provider value={{ theme, setTheme }}>
            <input ref={fileInputRef} type="file" accept="application/json, text/html, .html" style={{ display: "none" }} onChange={onFileChange} />
            {children}
        </LayoutContext.Provider>
    );
};

export const useLayoutContext = () => useContext(LayoutContext);

export default LayoutContext;