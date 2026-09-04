import { createSlice } from "@reduxjs/toolkit";

const StudentSlice=createSlice({
    name:"student",
    initialState:{array:[],
        stud:null

    },
    reducers:{
        addStudent:(state,action)=>{
           state.array=[...state.array,action.payload]

        },
        madeAttaindence:(state,action)=>{
            const student=state.array.find((st)=>(
                st.id==action.payload.id
            ))
            if(student){
                student.attaindence=action.payload.attaindence
            }


        },
        deleteStudent:(state,action)=>{
            const newarr=state.array.filter((st)=>(
                st.id!==action.payload

            ))

            state.array=newarr;
        },
        viewStudent:(state,action)=>{
            const st=state.array.find((stud)=>(
                stud.id==action.payload
            ))
            state.stud=st
        }

        
    }
})
export const {addStudent,madeAttaindence,deleteStudent,viewStudent} = StudentSlice.actions
export default StudentSlice.reducer;