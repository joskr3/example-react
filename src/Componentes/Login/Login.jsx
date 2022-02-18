import React from 'react'

import { Button, Box, Paper, TextField } from '@mui/material';

export default function Login() {
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
                    <TextField id="input-email" type="email" label="Email" variant="outlined" />
                    <TextField id="input-password" type="password" label="Password" variant="outlined" />
                    <Button variant="contained" color="success">
                        Entrar
                    </Button>
                </Box>
            </Paper>
        </Box>
    )
}
