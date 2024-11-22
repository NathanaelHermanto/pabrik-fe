import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '10px',
                },
            },
        },
    },
});

export default theme;
