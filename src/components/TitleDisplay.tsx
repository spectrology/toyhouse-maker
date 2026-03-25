import React from 'react';
import { Box, Chip, Typography } from "@mui/material";

const LogoDisplay: React.FC = () => {
    return (
        <Box p={1} display="flex" justifyContent="center" alignItems="center" gap={.5}>
            <Box width="32px" height="32px">
                <img src={`${process.env.PUBLIC_URL}/assets/toymaker_logo.svg`} alt="logo_img" width="100%" height="100%" />
            </Box>
            <Typography variant="h6">
                Toymaker <Chip color="primary" size="small" label="BETA" />
            </Typography>
        </Box>
    )
}

export default LogoDisplay;
