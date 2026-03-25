import React from 'react';
import { Box, Breakpoint, Container } from "@mui/material";

const PageWrapper: React.FC<{ children: React.ReactNode, pageWidth: false | Breakpoint | undefined }> = ({ children, pageWidth }) => {
    return (
        <Container maxWidth={pageWidth}>
            <Box pt={2} px={1}>
                {children}
            </Box>
        </Container>
    )
}

export default PageWrapper;

