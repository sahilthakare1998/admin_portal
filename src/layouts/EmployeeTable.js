import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EmployeeModal from './EmployeeModal'
import { useState } from 'react';

function createData(fullname, username,email) {
  return { fullname, username,email };
}

const rows = [
  createData('Rahul', 'rgmail', 'r.gmail.com')
];



export default function DenseTable() {
    const [dataList,setDataList] = useState(rows[0])
console.log(rows[0])
    const editDetails = (data) => {
        console.log('data',data)
        setDataList(data)
    }
    return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Full Name </TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Edit Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={dataList.fullname}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {dataList.fullname}
              </TableCell>
              <TableCell align="right">{dataList.username}</TableCell>
              <TableCell align="right">{dataList.email}</TableCell>
              <TableCell align="right"><EmployeeModal dataList={dataList} editDetails={editDetails}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
