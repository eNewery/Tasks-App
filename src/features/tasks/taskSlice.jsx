import {createSlice} from "@reduxjs/toolkit"

const initialState = [{
    title:"Cocinar",
    description:"Cortar el pollo",
    completed:false,
    id:1,
}]

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
addTask: (state, action) => {
state.push(action.payload)
}
    }
})

export const {addTask} = taskSlice.actions
export default taskSlice.reducer;