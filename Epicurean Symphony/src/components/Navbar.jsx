import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { BootstrapButton } from './BootstrapButton';
import './logo.css';
import logo from '../components/logo.png'

function Navbar() {
    return (
        <Box
            className="Navbar"
            sx={{
                position: 'fixed',
                marginRight:5 ,
                color: 'white',
                height: '100px',
                fontSize: 25,
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between', // Distribute space between items
                alignItems: 'center',   
                marginLeft: 0,
                paddingLeft: 5,
                zIndex: 1,
                backgroundColor: 'rgb(0,0,0, 0.85)'
            }}
        >
            <Box sx={{
                margin: 0, padding: 0
            }}>
            <Stack spacing={2} direction="row">
                <Link to="/home">
                    <BootstrapButton>
                        Menu
                    </BootstrapButton>
                </Link>
                <Link to="/offer">
                    <BootstrapButton>
                        Offer
                    </BootstrapButton>
                </Link>
                <Link to="/orderTrack">
                    <BootstrapButton>
                        Order Track
                    </BootstrapButton>
                </Link>
            </Stack>
            </Box>

            <Box className="logoName" sx={{
                paddingRight:35
            }}>
            {/* <img src={logo} className="logoName" style={{ width: 60, height: 60, flex: 1, textAlign: 'center', marginRight: 0, fontSize: 35 }} />
             */}
             Epicurean Symphony
            </Box>
            <Box style={{ display: 'flex', alignItems: 'center' }}>
                <img
                    src="account-logo.png" // Replace with your account logo URL
                    alt="Account Logo"
                    style={{ width: '30px', height: 'auto' }}
                />
            </Box>
        </Box>
    );
}

export default Navbar;
