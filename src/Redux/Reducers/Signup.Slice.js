import { createSlice } from "@reduxjs/toolkit";

export const SignupSlice = createSlice({
    name: 'signups',
    initialState: {
        users: [

        ]
    }, reducers: {
        signUpSubmit: (state, action) => {
            const perUser = action.payload
            state.users.push(perUser)
        },
        logOut: (state, action) => {
            const user = action.payload
            const data = state.users.filter((users) => {
                return users.username !== user.username && users.email !== user.email
            })
            state.users = data
        }

    }
})
export const { signUpSubmit, logOut } = SignupSlice.actions
export default SignupSlice.reducer