import { 
    Box,
    Divider,
    Typography,
} from '@mui/material';

const Batch = () => {

    return (
        <>
            <Box sx={{ flexGrow: 1, backgroundColor: '#f5f6fa', padding: 3 }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                    Inventory
                </Typography>

                <Divider sx={{ marginBottom: 3 }} />

                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    Batch Inventory
                </Typography>
            </Box>
        </>
    );
};

export default Batch;