import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './mainStates'

export const store = configureStore({
    reducer: {
        users: usersReducer
    },
})