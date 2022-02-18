import React, { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Button, Box, Paper, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setear } from '../../Redux/user'
import arrayUsuarios from '../../../src/Db/data';

export default function Login() {
    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();
    const MySwal = withReactContent(Swal)
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(usuario, password);
        // aca lanzo la alerta

        // MySwal.fire(
        //     'Bienvenido',//TITULO
        //     usuario,//CONTENIDO
        //     'success'//TIPO
        // )
        // aca actualizo el usuario en el store, despues conparo los fields con los que tengo en la db y si son iguales, entonces lo logueo
        // aca comparo los fields con los que tengo en la db y si son iguales, entonces lo logueo
        // if (usuario === arrayUsuarios[0].usuario && password === arrayUsuarios[0].password) {

        // }

        // arrayUsuarios.map(usuario => {
        //     if (usuario.usuario === user.nombre && usuario.password === user.password) {
        //         console.log('usuario logueado',usuario,user);
        //     }
        // })
        arrayUsuarios.filter(usuario => {
            if (usuario.usuario === user.nombre && usuario.password === user.password) {
               let launchDispatch =  dispatch(setear({
                    nombre: usuario,
                    password: password,
                    usuario: "",
                    apellido: "",
                    edad: 0,
                    email: "",
                    balance: 0,
                    moneda: ""
                }))
                launchDispatch();
                console.log('usuario logueado', usuario, user);
            } else {
                console.log('usuario no logueado', usuario, user);
            }
        })
    }

    const handleSubmitWithEnterKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }
    }

    return (
        <Box
            sx={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '50vh',
                    padding: '5rem',
                }
            }
        >

            <Paper key="1" elevation="12" sx={{
                height: '70vh',
            }}>
                <Box
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '1rem',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="input-email" type="email" label="Email" variant="outlined" value={usuario} onChange={evt => setUsuario(evt.target.value)} />
                    <TextField id="input-password" type="password" label="Password" variant="outlined" onChange={evt => setPassword(evt.target.value)} onKeyPress={handleSubmitWithEnterKey} />
                    <Button variant="contained" color="success" onClick={handleSubmit} >
                        Entrar
                    </Button>
                </Box>
            </Paper>
        </Box>
    )
}
