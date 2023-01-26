import { createSlice } from '@reduxjs/toolkit'

const initialState = {value:[]}
export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        reset: (state) => {
            state.value=[];
        },
        initialUsers:(state,action)=>{
            console.log(action.payload);
       state.value=action.payload;
        },
        addUser: (state, action) => {
            state.value.push(action.payload);
        },
        updateUser: (state, action) => {
            state.value[action.payload.id]=action.payload.values;
        },
        deleteUser: (state, action) => {
            state.value.splice(action.payload.id,1);
        },
    },
})

export const { initialUsers,addUser, reset,updateUser,deleteUser } = usersSlice.actions

export default usersSlice.reducer