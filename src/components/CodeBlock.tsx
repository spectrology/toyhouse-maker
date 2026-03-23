import React from 'react';
import { Box, useTheme } from '@mui/material';

interface CodeBlockProps {
    children: React.ReactNode | string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children }) => {
    const theme = useTheme();

    return (
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
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                {children}
            </pre>
        </Box>
    );
};

export default CodeBlock;