import React, { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { Button, Box, Paper, TextField } from '@mui/material';


export default function Login() {

    const MySwal = withReactContent(Swal)
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(usuario, password);
        // aca lanzo la alerta

        MySwal.fire(
            'Bienvenido',//TITULO
            usuario,//CONTENIDO
            'success'//TIPO
        )
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
