import React from 'react'
import "./styles.scss"

export default function Bienvenida({ usuario = {
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    username: "",
    saldo: 0
} }) {
    return (
        <div id="datos-usuario" className="contenedor">
            <h1 >Bienvenida/o, <span id="usuario">{usuario.nombre + " " + usuario.apellido}</span></h1>
            <p >Nombre de usuario: <span id="username">{usuario.username}</span> </p>
            <p >Email: <span id="email">{usuario.email}</span></p>
        </div>
    )
}
