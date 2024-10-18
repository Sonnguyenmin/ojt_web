import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";

const rootReducer:any = combineReducers({
    // categoryStore,
    auth: authSlice,
    // authSlice
})
    


const store = configureStore({
    reducer: rootReducer,
    // auth: authSlice,
})

export type Store = ReturnType<typeof rootReducer>
export default store;