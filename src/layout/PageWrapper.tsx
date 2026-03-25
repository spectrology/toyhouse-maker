import React from 'react';
import { Box, Breakpoint, Container, Paper } from "@mui/material";

const PageWrapper: React.FC<{ children: React.ReactNode, pageWidth: false | Breakpoint | undefined }> = ({ children, pageWidth }) => {
    return (
        <Container maxWidth={pageWidth}>
            <Paper>
                <Box py={2} px={1}>
                    {children}
                </Box>
            </Paper>
        </Container>
    )
}

export default PageWrapper;

