import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

export const ButtonActive = styled(Button)(({ theme }) => ({
    color: 'rgb(45 212 191)',
    backgroundColor: 'transparent',
    textTransform: 'uppercase',
    borderBottom: '2px solid rgb(45 212 191)',
    borderRadius: '0',
    padding: '10px 25px',
    width: '100%',
    textAlign: 'center',
    '&:hover': {
        backgroundColor: 'transparent',
    },
}));

export const ButtonInActive = styled(Button)(({ theme }) => ({
    color: 'white',
    backgroundColor: 'transparent',
    textTransform: 'uppercase',
    borderRadius: '0',
    padding: '10px 25px',
    '&:hover': {
        backgroundColor: 'transparent',
    },
}));