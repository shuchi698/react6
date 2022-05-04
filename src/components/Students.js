import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Students = () => {

    const students = useSelector((state) => state.students);

    return (
        <div className='Students'>
            <div className='students-header'>
                <h1>Students Details</h1>
                <Link to='/students-desc'><button id='student-btn'>Add new student</button></Link>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Age</TableCell>
                        <TableCell align="right">Course</TableCell>
                        <TableCell align="right">Batch</TableCell>
                        <TableCell align="right">Change</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {students.map((student) => (
                    <TableRow
                        key={student.id}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                        <TableCell component="th" scope="student">
                        {student.name}
                        </TableCell>
                        <TableCell align="right">{student.age}</TableCell>
                        <TableCell align="right">{student.course}</TableCell>
                        <TableCell align="right">{student.batch}</TableCell>
                        <TableCell align="right">
                        {
                            <Link to={`/students-desc/${student.id}`}>Edit</Link>
                        }
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Students;


