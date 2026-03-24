import { Breakpoints, SxProps, Theme } from "@mui/material";
import { GridSize, ResponsiveStyleValue } from "@mui/system";

export type Layout = {
    id: string;
    name: string;
    template: string; // HTML string with {{placeholders}}
    additionalFields?: FieldConfig[]; // List of additional field names to show in the editor
    previewImage?: string; // Optional image URL for theme preview (not implemented yet)
};

export type FieldConfig = {
    name: string;
    label: string;
    type?: "text" | "number" | "color" | "multiline" | "select";
    size?: ResponsiveStyleValue<GridSize>;
    rows?: number;
    placeholder?: string;
    options?: { value: string; label: string }[];
    readonly isCustom?: boolean ; // Whether this field is user-added (for showing remove button)
    readonly fromLayout?: boolean; // Whether this field is defined by the theme (for editor display logic)
};