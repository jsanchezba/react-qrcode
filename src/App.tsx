import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import QrCode from './static/qr-code.png';
import './App.css';

function App() {
    const theme = createTheme({
        shape: {
            borderRadius: 20,
        }, 
    });

    function submit(e: React.FormEvent) {
        console.log('sumbmited!');
        e.preventDefault();
    }

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
            <Card className="card" sx={{ 
                width: {
                    sx: 1.0, // 100%
                    sm: 200,
                    md: 300,
                  },
                  p: 2
             }}>
                <img src={QrCode} className="qr-code" alt="logo" />
                <form onSubmit={submit}>
                    <TextField label="Enter your URL..." variant="outlined" sx={{ my: 2 }} fullWidth/>
                </form>
                <h1>Improve your front-end skills by building products</h1>
                <p>Scan the QR to visit Frontend mentor and take your coding skills to the next level</p>
            </Card>
            </ThemeProvider>
            
            
        </div>
    );
}

export default App;
