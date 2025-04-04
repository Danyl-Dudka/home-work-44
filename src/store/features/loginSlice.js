import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false, 
    error: '',
    login: '',
    password: '',
}
export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.isAuth = true;
            state.error = '';
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        setLogin: (state,action) => {
            state.login = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        }
    },
})

export const {setAuth, setError, setLogin, setPassword} = loginSlice.actions;
export default loginSlice.reducer;
