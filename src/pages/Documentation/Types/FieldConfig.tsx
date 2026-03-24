import TypeChart from "./components/TypeChart/TypeChart"
import { AppType } from "./types"

export const FieldConfigDoc: React.FC = () => {

    const fieldConfigTypes: AppType[] = [
        {
            id: "name",
            type: "string",
            description: "The name of the field. This is how you will refer to the fields content in your template.",
            required: true,
        },
        {
            id: "label",
            type: "string",
            default: "Value of 'name'",
            description: "The label for the field. This is the text that will be displayed to the user in the character editor.",
        },
        {
            id: "type",
            type: "string",
            default: `"text"`,
            description: "The type of the field. This determines the input method and validation."
        },
        {
            id: "options",
            type: "string[]",
            description: "Used exclusively for \"select\" type fields. The options for the field.",
        },
        {
            id: "size",
            type: "number | ResponsiveStyleValue<GridSize>",
            description: "The size of the field in the editor according to the MUI Grid system. Can be a single number or an object specifying sizes for different breakpoints.",
            required: false
        }
    ]

    return (
        <TypeChart id="FieldConfig" types={fieldConfigTypes} />
    )
}

export default FieldConfigDoc;
