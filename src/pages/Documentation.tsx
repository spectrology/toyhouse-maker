import React from "react";
import { Box, Container } from "@mui/material";

export const Documentation: React.FC = () => {
    return (
        <Container maxWidth="md" sx={{ py: 4 }} >
            <Box textAlign="left">
                <h1>Documentation</h1>
                <p>Welcome to Spec's Toyhouse Maker! This tool is designed to help you create character pages for Toyhouse with ease.</p>

                <h2>Character Data</h2>
                <p>Character data is managed in the Character Editor tab. You can add multiple characters, each with their own set of attributes. The template in the Page Maker tab will use this data to generate the HTML preview.</p>
                <p>Each character has a preset number of attributes, but additional attributes can be added as needed, or will be automatically added based on the selected theme.</p>
                <p>Character data can be exported as JSON for backup and imported back into the app. When importing, characters will be added to the existing character list.</p>
                <h2>Page Maker</h2>
                <p>The Page Maker tab allows you to generate HTML for your character pages based on the selected theme. The HTML preview will update in real-time as you edit character data or change themes.</p>
                <p>You can copy the generated HTML to your clipboard or open it in a new tab for easier copying. The generated HTML is designed to be pasted directly into Toyhouse's custom page editor.</p>
                <h2>Custom Themes</h2>

                <p>You can create your own themes by writing html templates, and putting &#123;&#123; field_name &#125;&#125; where you want to insert character data.</p>
                <p>For example:</p>
                <pre>
                    <div>&#123;&#123; hobbies &#125;&#125;</div>
                </pre>
                <p> You can then add the "hobbies" field to your character's data using the "Add Additional Field" tool in the Character Editor.</p>
                <p>To import a custom theme, go to the Theme Selector in the sidebar and choose "Custom Theme". Then select your HTML file. The template should use syntax to insert character data.</p>
                <h3>Advanced Custom Theme Options</h3>
                <p>To take advantage of advanced theme options, custom themes must be written in JSON format. Custom themes must have at least a name and a template:</p>
                <pre>
                    {`
                    "name": "My Custom Theme",
                    "template": "<div>{{ name }}</div>"
                    `}
                </pre>
                <p>To import an advanced custom theme, go to the Theme Selector in the sidebar and choose "Custom Theme". Then select your JSON file.</p>
                <h4>Theme Fields</h4>
                <p>While themes can utilize either preset fields or dynamically added fields, you can also define custom fields for each theme.</p>
                <p>You can add custom fields to your theme using the "additionalFields" property in the theme's JSON definition.</p>
                <pre>
                    {`
                    "name": "My Custom Theme",
                    "template": "<div>{{ name }}</div>"
                    "additionalFields": [
                        {
                            "name": "hobbies",
                            "label": "Hobbies",
                            "type": "text"
                        }
                    ]
                `}
                </pre>

                <p>In this example, an additional field called "hobbies" is added to the theme. This field will then be available in the character editor when this theme is selected, allowing you to input data for it. You can then use &#123;&#123; hobbies &#125;&#125; in your template to display this data.</p>
                <p>Additional fields can be of various types, such as text, number, color, multiline, or select. This allows for greater flexibility in the kind of data you can include in your character pages.</p>
                <p>The chart below describes the options available for additional fields:</p>
                <table>
                    <thead>
                        <tr>
                            <th>Attribute Name</th>
                            <th>Type</th>
                            <th>Default</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>name</td>
                            <td>string</td>
                            <td>-</td>
                            <td>(required) The name of the field. This is how you will refer to the fields content in your template, i.e. &#123;&#123; name &#125;&#125;</td>

                        </tr>
                        <tr>
                            <td>label</td>
                            <td>string</td>
                            <td>Defaults to the value of name</td>
                            <td>The label for the field. This is the text that will be displayed to the user in the character editor.</td>
                        </tr>
                        <tr>
                            <td>type</td>
                            <td><span>"text" | "number" | "color" | "multiline" | "select"</span></td>
                            <td>"text"</td>
                            <td>The type of the field. This determines the input method and validation.</td>
                        </tr>
                        <tr>
                            <td>options</td>
                            <td>string[]</td>
                            <td>-</td>
                            <td>Used exclusively for "select" type fields. The options for the field.</td>
                        </tr>
                    </tbody>

                </table>
            </Box>
        </Container>
    )
}

export default Documentation;
