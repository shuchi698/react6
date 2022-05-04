import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './../App.css';
import { addStudent, updateStudent } from './studentsSlice';
import { useDispatch, useSelector } from 'react-redux';


const StudentsDesc = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [btnText, setBtnText] = useState('Submit');

    const dispatch = useDispatch();
    const students = useSelector((state) => state.students.find((student) => student.id === id));



    const [details, setDetails] = useState({
        name: "",
        age: "",
        course: "",
        batch: "",
        id: ""
    });

    useEffect(() => {
        if (id === undefined) {
            setDetails({
                name: "",
                age: "",
                course: "",
                batch: "",
                id: "",
            })
        } else if (id === students.id) {
            setBtnText("Update")
            setDetails({
                name: students.name,
                age: students.age,
                course: students.course,
                batch: students.batch,
            })
        }
    }, [students, id])

    const handleChange = (e) => {
        setDetails({...details, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id === undefined) {
            let newDetails = {...details, id: new Date().getTime().toString()};
            dispatch(
                addStudent(newDetails)
            );
        } else {
            dispatch(
                updateStudent({
                    name: details.name,
                    age: details.age,
                    course: details.course,
                    batch: details.batch,
                    id: id
                })
            )
        }
        navigate("/students");
    }

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <div className='input-container'>
                    <TextField
                        id="name"
                        type="text"
                        label="Name"
                        variant="outlined"
                        className='input'
                        required
                        name="name"
                        value={details.name}
                        onChange={handleChange}
                    />
                    <TextField
                        id="age"
                        type="number"
                        label="Age"
                        variant="outlined"
                        className='input'
                        required
                        name="age"
                        value={details.age}
                        onChange={handleChange}
                    />
                    <TextField
                        id="course"
                        type="text"
                        label="Course"
                        variant="outlined"
                        className='input'
                        required
                        name="course"
                        value={details.course}
                        onChange={handleChange}
                    />
                    <TextField
                        id="batch"
                        type="text"
                        label="Batch"
                        variant="outlined"
                        className='input'
                        required
                        name="batch"
                        value={details.batch}
                        onChange={handleChange}
                    />
                </div>
                <div className='btn-container'>
                    {
                        <Link to="/students" className="link">
                            <button className="cancel-btn">Cancel</button>
                        </Link>
                    }
                    <button type='submit' className='submit-btn'>{btnText}</button>
                </div>
            </form>
        </Box>
    );
}

export default StudentsDesc;