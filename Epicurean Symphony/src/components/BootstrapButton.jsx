import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 15,
    padding: '10px 10px',
    width: '100%',
    border: 'none',
    margin: 0,
    lineHeight: 1.5,
    backgroundColor: 'none',
    borderColor: 'none',
    color: '#DAA520',
    textAlign: 'center',
    textDecoration: 'none', // Remove underline by default
    position: 'relative',
    '&:hover': {
        color: '#FFD700',
        textDecoration: 'underline',
        backgroundColor: '',
        borderColor: '#FFD700',
        boxShadow: 'none',
    },
    '&:active': {
        fontWeight: 'bold',
        backgroundColor: 'none',
        borderColor: 'none',
        color: '#FFD700'
    },
    '&:focus': {
        boxShadow: '0 0 0 0 #111111',
    },
});
