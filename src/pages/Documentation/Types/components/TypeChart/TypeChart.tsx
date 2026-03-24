import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import CodeBlock from "./../../../../../components/CodeBlock";
import TypeHeader from "./TypeHeader";
import { TypeChartProps } from "../../types";

const TypeChart: React.FC<TypeChartProps> = ({ id, types }) => {

    // TODO make this collapsable if there are more than 2 fields

    return (
        <Box>
            <TypeHeader id={id} />
            <TableContainer component={Paper} sx={{ border: 1, borderColor: "divider" }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ whiteSpace: 'nowrap' }}>Label</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Default</TableCell>
                            <TableCell>Description</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            types.map((type) => (
                                <TableRow key={type.id}>
                                    <TableCell>{type.id}</TableCell>
                                    <TableCell><CodeBlock>{type.type}</CodeBlock></TableCell>
                                    <TableCell>{type.default !== undefined ? type.default : "-"}</TableCell>
                                    <TableCell>
                                        <Typography variant="inherit" component="span" color="text.secondary">
                                            {type.required === true ? "(required) " : (type.required === false ? "(optional) " : "")}
                                        </Typography>
                                        {type.description}
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default TypeChart;
