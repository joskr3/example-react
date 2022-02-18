import React from 'react'
import "./styles.scss"

export default function Consultar({ usuario = {
  nombre: "",
  usuario: "",
  apellido: "",
  edad: 0,
  email: "",
  password: "",
  balance: 0,
  moneda: ""
}, fnRegresarAlInicio }) {

  return (
    <div class="contenedor">
      <h3>Consulta</h3>
      <div class="contenedor__resultado">
        <h3>Resultado de la consulta</h3>
        <p>Saldo: <span id="resultado-consulta">{usuario.saldo}</span></p>
        <button type="button" class="contenedor__resultado__boton-resetear" onClick={fnRegresarAlInicio}>Volver al inicio</button>
      </div>

    </div>
  )
}
