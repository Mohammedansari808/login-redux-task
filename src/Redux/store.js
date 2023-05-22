import { configureStore } from "@reduxjs/toolkit";
import SignupSlice from "./Reducers/Signup.Slice";

export default configureStore({
    reducer: {
        signup: SignupSlice
    }
})