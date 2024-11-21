import { 
    Box,
    Typography,
    Pagination,
    CircularProgress,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Paper,
} from '@mui/material';
import { useState, useEffect, useCallback } from 'react';
import { getPaddies } from '../services/api';

const Paddy = () => {
    const [paddyData, setPaddyData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [size] = useState(10);
    const [totalPages, setTotalPages] = useState(1);

    const fetchPaddy = useCallback(
        async (pageNumber) => {
            setLoading(true);
            try {
                const response = await getPaddies(pageNumber - 1, size); // API uses zero-based page indexing
                setPaddyData(response.content); // Assuming API returns { content: [], totalPages: n }
                setTotalPages(response.totalPages);
            } catch (error) {
                console.error('Error fetching paddy data:', error.message);
            } finally {
                setLoading(false);
            }
        },
        [size] // `size` is a dependency because it's used inside fetchPaddy
    );

    // Initial data fetch
    useEffect(() => {
        fetchPaddy(page);
    }, [fetchPaddy, page]);

    // Handle page change
    const handlePageChange = (_, value) => {
        setPage(value);
    };

    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h5" sx={{ marginBottom: 3 }}>
                Paddy Inventory
            </Typography>

            {/* Show loading spinner */}
            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
                    <CircularProgress />
                </Box>
            ) : (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Quantity</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Price</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>Supplier</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {paddyData.map((paddy) => (
                                <TableRow key={paddy.id}>
                                    <TableCell>{paddy.id}</TableCell>
                                    <TableCell>{paddy.quantity}</TableCell>
                                    <TableCell>{paddy.price}</TableCell>
                                    <TableCell>{paddy.supplier}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}

            {/* Pagination */}
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
                <Pagination
                    count={totalPages}
                    page={page}
                    onChange={handlePageChange}
                    color="primary"
                />
            </Box>
        </Box>
    );
};

export default Paddy;