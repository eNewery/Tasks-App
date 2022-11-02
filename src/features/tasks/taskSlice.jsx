import {createSlice} from "@reduxjs/toolkit"

const initialState = []

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
addTask: (state, action) => {
state.push(action.payload)
},
deleteTask: (state,action) => {
const taskFound = state.find(task => task.id === action.payload)
if (taskFound) {
    state.splice(state.indexOf(taskFound), 1)
}
},
updateTask: (state, action) => {
const {id, title, description } = action.payload;
const foundTask = state.find(task => task.id === id)
if (foundTask) {
    foundTask.title = title
    foundTask.description = description
}
}
    },
})

export const {addTask, deleteTask, updateTask} = taskSlice.actions
export default taskSlice.reducer;