import { configureStore } from "@reduxjs/toolkit"
import userReducer from './userSliceCustomer'
import adminReducer from './userSliceAdmin'
const store=configureStore({
    reducer:{
        user:userReducer,
        user:adminReducer
    }
})
export default store