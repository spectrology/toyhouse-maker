import React from "react";
import { Alert, Box, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useTheme } from "@mui/material";
import CodeBlock from "../components/CodeBlock";

export const Documentation: React.FC = () => {

    const theme = useTheme();

    return (
        <Container maxWidth="md" >
            <Box textAlign="left" p={4}>
                <h1>Documentation</h1>
                <p>Welcome to <b>Toymaker</b>! This tool is designed to help you create character pages for <a href="http://toyhou.se">Toyhouse</a> with ease.</p>

                <h2>Character Data</h2>
                <p>Character data is managed in the Character Editor tab. You can add multiple characters, each with their own set of attributes. The template in the Page Maker tab will use this data to generate the HTML preview.</p>
                <p>Each character has a preset number of attributes, but additional attributes can be added as needed, or will be automatically added based on the selected theme.</p>
                <p>Character data can be exported as JSON for backup and imported back into the app. When importing, characters will be added to the existing character list.</p>
                <h2>Page Maker</h2>
                <p>The Page Maker tab allows you to generate HTML for your character pages based on the selected theme. The HTML preview will update in real-time as you edit character data or change themes.</p>
                <p>You can copy the generated HTML to your clipboard or open it in a new tab for easier copying. The generated HTML is designed to be pasted directly into Toyhouse's custom page editor.</p>
                <h2>Custom Themes</h2>

                <p>You can create your own themes by writing html templates, and putting &#123;&#123; field_name &#125;&#125; where you want to insert character data.</p>
                <p>For example: &#123;&#123; hobbies &#125;&#125;</p>
                <p> You can then add the "hobbies" field to your character's data using the "Add Additional Field" tool in the Character Editor.</p>
                <Alert severity="info" sx={{ border: 1, borderColor: "info" }}>
                    In the future, Toymaker will automatically parse out fields from your template and add them to the character editor, but for now you must add them manually.
                    However, you can still use the same template and character data, since the attribute name will be the same.
                </Alert>
                <p>To import a custom theme, go to the Theme Selector in the sidebar and choose "Custom Theme". Then select your HTML file. The template should use syntax to insert character data.</p>
                <h3>Advanced Custom Theme Options</h3>
                <p>To take advantage of advanced theme options, custom themes must be written in JSON format. Custom themes must have at least a name and a template:</p>

                <CodeBlock>
                    {`{
                        "name": "My Custom Theme",
                        "template": "<div>{{ name }}</div>"
                    }`}
                </CodeBlock>
                <p>To import an advanced custom theme, go to the Theme Selector in the sidebar and choose "Custom Theme". Then select your JSON file.</p>
                <h4>Theme Fields</h4>
                <p>While themes can utilize either preset fields or dynamically added fields, you can also define custom fields for each theme.</p>
                <p>You can add custom fields to your theme using the "additionalFields" property in the theme's JSON definition.</p>

                <CodeBlock>
                    {`{
    "name": "My Custom Theme",
    "template": "<div>{{ name }}</div>"
    "additionalFields": [
        {
            "name": "hobbies",
            "label": "Hobbies",
            "type": "text"
        }
    ]
}`}
                </CodeBlock>

                <p>In this example, an additional field called "hobbies" is added to the theme. This field will then be available in the character editor when this theme is selected, allowing you to input data for it. You can then use &#123;&#123; hobbies &#125;&#125; in your template to display this data.</p>
                <p>Additional fields can be of various types, such as text, number, color, multiline, or select. This allows for greater flexibility in the kind of data you can include in your character pages.</p>
                <p>The chart below describes the options available for additional fields:</p>
                <TableContainer component={Paper} sx={{ border: 1, borderColor: "divider" }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ whiteSpace: 'nowrap' }}>Attribute Name</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Default</TableCell>
                                <TableCell>Description</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>name</TableCell>
                                <TableCell><CodeBlock>string</CodeBlock></TableCell>
                                <TableCell>-</TableCell>
                                <TableCell><i>(required)</i> The name of the field. This is how you will refer to the fields content in your template, i.e. &#123;&#123; name &#125;&#125;</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>label</TableCell>
                                <TableCell><CodeBlock>string</CodeBlock></TableCell>
                                <TableCell>Defaults to the value of name</TableCell>
                                <TableCell>The label for the field. This is the text that will be displayed to the user in the character editor.</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>type</TableCell>
                                <TableCell><CodeBlock>"text" | "number" | "color" | "multiline" | "select"</CodeBlock></TableCell>
                                <TableCell>"text"</TableCell>
                                <TableCell>The type of the field. This determines the input method and validation.</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>options</TableCell>
                                <TableCell><CodeBlock>string[]</CodeBlock></TableCell>
                                <TableCell>-</TableCell>
                                <TableCell>Used exclusively for "select" type fields. The options for the field.</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

            </Box>
        </Container>
    )
}

export default Documentation;
