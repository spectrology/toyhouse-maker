import React from "react";
import { Alert, Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from "@mui/material";
import CodeBlock from "../../components/CodeBlock";
import { FieldConfigDoc } from "./Types/FieldConfig";
import LayoutConfigDoc from "./Types/LayoutConfig";

export const Documentation: React.FC = () => {

    return (
        <Container maxWidth="md" >
            <Box textAlign="left" p={{ xs: 1, md: 4 }}>
                <h1>Documentation</h1>
                <p>Welcome to <b>Toymaker</b>! This tool is designed to help you create character pages for <a href="http://toyhou.se">Toyhouse</a> with ease.</p>
                <Alert severity="warning" sx={{ border: 1, borderColor: "warning" }}>
                    Toymaker is in <b>beta</b>! This means that while the core features are functional, there may be bugs, and the user interface may change drastically as I work on the app. It also means more features are coming!
                </Alert>

                <h2>Character Data</h2>
                <p>Character data is managed in the Character Editor tab. You can add multiple characters, each with their own set of attributes. The template in the Page Maker tab will use this data to generate the HTML preview.</p>
                <p>Each character has a preset number of attributes, but additional attributes can be added as needed, or will be automatically added based on the selected theme.</p>
                <p>Character data can be exported as JSON for backup and imported back into the app. When importing, characters will be added to the existing character list.</p>

                <h2>Page Maker</h2>
                <p>The Page Maker tab allows you to generate HTML for your character pages based on the selected layout. The HTML preview will update in real-time as you edit character data or change layouts.</p>
                <p>You can copy the generated HTML to your clipboard or open it in a new tab for easier copying. The generated HTML is designed to be pasted directly into Toyhouse's custom page editor.</p>

                <h2>Custom Layouts</h2>
                <p>Toymaker uses Moustache Syntax to render templates. You can create your own layouts by writing html, and putting <CodeBlock inline>&#123;&#123;field_name&#125;&#125;</CodeBlock> where you want to insert character data.</p>
                <p>For example: <CodeBlock inline>{`{{hobbies}}`}</CodeBlock></p>
                <p> You can then add the "hobbies" field to your character's data using the "Add Additional Field" tool in the Character Editor.</p>
                <Alert severity="info" sx={{ border: 1, borderColor: "info" }}>
                    In the future, Toymaker will automatically parse out fields from your template and add them to the character editor, but for now you must add them manually.
                    However, you can still use the same template and character data, since the attribute name will be the same, so feel free to generate character data! It will still be usable later.
                </Alert>
                <p>To import a custom layout, go to the Layout Selector in the sidebar and choose "Custom Layout". Then select your HTML file.</p>
                <h3>Advanced Custom Layout</h3>
                <p>If you're familiar with JSON, you can create more complex layouts with additional features, like a preview image and preformatted fields of different types.</p>
                <p>Custom layouts must have at least a name and a template:</p>

                <CodeBlock>
                    {`{
                    "name": "My Custom Theme",
                    "template": "<div>{{name}}</div>"
                }`}
                </CodeBlock>
                <p>To import an advanced custom layout, go to the Layout Selector in the sidebar and choose "Custom Layout". Then select your JSON file.</p>
                <p>The chart below describes the attributes available for layouts:</p>
                <LayoutConfigDoc />
                <h4>Custom Layout Fields</h4>
                <p>While layouts can utilize either preset fields or dynamically added fields, you can also define custom fields for each layout.</p>
                <p>You can add custom fields to your layout using the "additionalFields" property in the layout's JSON definition.</p>

                <CodeBlock>
                    {`{
                    "name": "My Custom Theme",
                    "template": "<div>{{name}}</div>"
                    "additionalFields": [
                        {
                            "name": "hobbies",
                            "label": "Hobbies",
                            "type": "text"
                        }
                    ]
                }`}
                </CodeBlock>

                <p>In this example, an additional field called "hobbies" is added to the theme. This field will then be available in the character editor when this theme is selected, allowing you to input data for it. You can then use <CodeBlock inline>{`{{hobbies}}`}</CodeBlock>in your template to display this data.</p>
                <p>Additional fields can be of various types, such as text, number, color, multiline, or select. This allows for greater flexibility in the kind of data you can include in your character pages.</p>
                <p>The chart below describes the options available for additional fields:</p>
                <FieldConfigDoc />

            </Box>
        </Container>
    )
}

export default Documentation;
