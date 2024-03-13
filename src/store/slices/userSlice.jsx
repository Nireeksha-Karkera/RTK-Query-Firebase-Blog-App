import {createSlice} from "@reduxjs/toolkit"
import { clearAllUsers } from "../action"

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
        //console.log(action.payload)
        },

        removeUser(state,action){
            //console.log("hii" + action.payload)
            //state.pop(action.payload)
            state.splice(action.payload,1)
        },

        // ClearAllUsers(state,action) {
        //     // console.log("hi deleet")
        //     return []
        // },

    },
    extraReducers(builder){
        builder.addCase(clearAllUsers, () => {
            return []
        })
    }
})
console.log(userSlice.actions.addUser())

export default userSlice.reducer
export const {addUser,removeUser} = userSlice.actions


