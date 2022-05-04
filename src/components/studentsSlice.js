import { createSlice } from '@reduxjs/toolkit';


const initialState = [
    { name: 'John', age: 26, course: 'MERN', batch: 'October', id: "1" },
    { name: 'Doe', age: 25, course: 'MERN', batch: 'November', id: "2" },
    { name: 'Biden', age: 26, course: 'MERN', batch: 'September', id: "3" },
    { name: 'Barar', age: 22, course: 'MERN', batch: 'September', id: "4" },
    { name: 'Christ', age: 23, course: 'MERN', batch: 'October', id: "5" },
    { name: 'Elent', age: 24, course: 'MERN', batch: 'November', id: "6" },
]

const studentsSlice =createSlice({

    name: "students",
    initialState,
    reducers: {
        addStudent(state, action) {
            state.push(action.payload);
        },
        updateStudent(state, action) {
            const { name, age, course, batch, id } = action.payload;
            const existingStudent = state.find((student) =>
            student.id === id)
            if (existingStudent) {
                existingStudent.name = name
                existingStudent.age = age
                existingStudent.course = course
                existingStudent.batch = batch
            }
        },
    }
})

export const { addStudent, updateStudent } = studentsSlice.actions;

export default studentsSlice.reducer;