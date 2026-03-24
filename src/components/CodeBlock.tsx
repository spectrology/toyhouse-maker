import React from 'react';
import { Box, useTheme } from '@mui/material';

interface CodeBlockProps {
    children: React.ReactNode | string;
    inline?: boolean,
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, inline }) => {
    const theme = useTheme();
    // todo better formatting for json data
    return (
        <>
            {!inline &&
                <Box
                    sx={{
                        backgroundColor: theme.palette.background.paper,
                        color: theme.palette.text.primary,
                        fontFamily: 'Courier New, monospace',
                        padding: 2,
                        borderRadius: 1,
                        overflow: 'auto',
                        border: `1px solid ${theme.palette.divider}`,
                    }}
                >
                    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', maxWidth: "120px" }}>
                        {children}
                    </pre>
                </Box>
            }
            {inline &&
                <Box
                    component="span"
                    sx={{
                        backgroundColor: theme.palette.background.paper,
                        color: theme.palette.text.primary,
                        fontFamily: 'Courier New, monospace',
                        padding: 0.2,
                        borderRadius: 1,
                        overflow: 'auto',
                        border: `1px solid ${theme.palette.divider}`,
                    }}
                >
                    {children}
                </Box>
            }
        </>
    );
};

export default CodeBlock;