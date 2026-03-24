import { Layout } from "../types/layout";

export const LAYOUTS: Layout[] = [
    {
        id: "daspec",
        name: "Spec Classic",
        previewImage: "https://64.media.tumblr.com/85a6a61421fed8257a778e4c8dd8c3de/fecf77982676669a-37/s1280x1920/119cad2b0f77d91a40f976d41279e4df14ca7183.pnj",
        additionalFields: [
            { name: "tagline", label: "Tagline", type: "text", fromTheme: true },
            { name: "orientation", label: "Orientation", type: "text", fromTheme: true },
            { name: "location", label: "Location", type: "text", fromTheme: true },
            { name: "caste", label: "Caste", type: "text", fromTheme: true },
            { name: "lusus", label: "Lusus", type: "text", fromTheme: true },
            { name: "sidebarImageUrl", label: "Sidebar Image URL", type: "text", fromTheme: true },
            { name: "backgroundImageUrl", label: "Background Image URL", type: "text", fromTheme: true }
        ],
        template: ``
    }
];