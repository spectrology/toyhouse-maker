import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import TagIcon from '@mui/icons-material/Tag';

type TypeHeaderProps = {
    id: string;
};

const TypeHeader: React.FC<TypeHeaderProps> = ({ id }) => {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <Box display="flex" id={id.toLowerCase()} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} alignItems="center">
            <Typography my={1} variant="h6">
                <Typography variant="inherit" color="grey" mr={1} style={{ fontStyle: 'italic' }} component="span">type</Typography>
                {id}
            </Typography>
            {/* <Box>
                {isHovered &&
                (
                    <IconButton
                        color="info"
                        size="small"
                        onClick={async (e) => {
                            e.stopPropagation();
                            const hash = id.toLowerCase();
                            const url = `${window.location.origin}${window.location.pathname}#${hash}`;
                            try {
                                await navigator.clipboard.writeText(url);
                                console.log("Copied link:", url);
                            } catch {
                                const ta = document.createElement("textarea");
                                ta.value = url;
                                document.body.appendChild(ta);
                                ta.select();
                                document.execCommand("copy");
                                document.body.removeChild(ta);
                                console.log("Copied link (fallback):", url);
                            }
                        }}
                    >
                        <TagIcon />
                    </IconButton>
                )
            }
            </Box> */}
        </Box>
    );
};

export default TypeHeader;
