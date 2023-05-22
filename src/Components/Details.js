import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function Details({ user }) {
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "1em" }}>
            <div style={{ width: "60%" }}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>username</StyledTableCell>
                                <StyledTableCell align="center">email</StyledTableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>

                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row">
                                    {user.username}
                                </StyledTableCell>
                                <StyledTableCell align="center">{user.email}</StyledTableCell>


                            </StyledTableRow>

                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>


    )
}

export default Details