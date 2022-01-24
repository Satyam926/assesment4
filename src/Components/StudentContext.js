import React, { useState,createContext } from "react";


export const StudentContext = createContext();

export const StudentProvider = (props) => {


    const [rows, setRows] = useState([
        {
            id : 1,
            name: "Varun",
            age : 25,
            course : "MERN",
            batch : "october"
        } ,

        {
            id : 2,
            name: "Shivam",
            age : 22,
            course : "MERN",
            batch : "November"
        } ,

        {
            id : 3,
            name: "Satyam Thakur",
            age : 23,
            course : "MERN",
            batch : "September"
        } ,

        {
            id : 4,
            name: "Ajay",
            age : 24,
            course : "MERN",
            batch : "September"
        } ,

        {
            id : 5,
            name: "Ravi",
            age : 20,
            course : "MERN",
            batch : "December"
        }
   ])


    return (
            <StudentContext.Provider value={[rows,setRows]}>
            {props.children}
        </StudentContext.Provider>
    )
}