import TypeChart from "./components/TypeChart/TypeChart"
import { AppType } from "./types"

export const LayoutConfigDoc: React.FC = () => {

    const layoutConfigTypes: AppType[] = [
        {
            id: "id",
            type: "string",
            default: "custom",
            description: "A unique identifier for the layout. This is how Toymaker will refer to the layout. Not needed unless you plan to submit the Layout to the public library.",
            required: false,
        },
        {
            id: "name",
            type: "string",
            description: "The name of the Layout. This is what users will see when selecting a Layout for their character.",
            required: true,
        },
        {
            id: "template",
            type: "string",
            required: true,
            description: "The HTML template for the layout using Moustache Syntax."
        },
        {
            id: "additionalFields",
            type: "FieldConfig[]",
            required: false,
            default: "[]",
            description: "An array of additional fields that can be added to the layout.",
        },
        {
            id: "previewImage",
            type: "string",
            description: "The URL of the preview image for the layout.",
            required: false
        }
    ]

    return (
        <TypeChart id="LayoutConfig" types={layoutConfigTypes} />
    )
}

export default LayoutConfigDoc;
