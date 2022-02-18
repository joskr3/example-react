import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    nombre: "",
    usuario: "",
    apellido: "",
    edad: 0,
    email: "",
    password: "",
    balance: 0,
    moneda: ""
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setear: (state, action) => {
            state.nombre = action.payload.nombre
            state.usuario = action.payload.usuario
            state.apellido = action.payload.apellido
            state.edad = action.payload.edad
            state.email = action.payload.email
            state.password = action.payload.password
            state.balance = action.payload.balance
            state.moneda = action.payload.moneda
        },
        consultar: (state) => {
            state.nombre,
            state.usuario,
            state.apellido,
            state.edad,
            state.email
        },
        retirar: (state, action) => {
            state.balance -= action.payload
        },
        depositar: (state, action) => {
            state.balance += action.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { setear, consultar, retirar, depositar } = userSlice.actions

export default userSlice.reducer