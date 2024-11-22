import React from 'react';
import { 
    Box, 
    Grid2, 
    Card, 
    CardContent, 
    Typography, 
 } from '@mui/material';
import BarChart from '../components/BarChart';

const DashboardContent = () => {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: '#f5f6fa', padding: 3 }}>
            {/* Dashboard Header */}
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                Dashboard
            </Typography>

            {/* Overview Cards */}
            <Grid2 container spacing={3}>
                <Grid2 item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                                Net Income
                            </Typography>
                            <Typography variant="h4" sx={{ color: '#27ae60' }}>
                                $193,000
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#888' }}>
                                +35% from last month
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid2>
                <Grid2 item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                                Total Return
                            </Typography>
                            <Typography variant="h4" sx={{ color: '#e74c3c' }}>
                                $32,000
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#888' }}>
                                -24% from last month
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid2>
                <Grid2 item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                                Total Performance
                            </Typography>
                            <Typography variant="h4" sx={{ color: '#3498db' }}>
                                565K
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#888' }}>
                                View Count
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid2>
            </Grid2>

            {/* Charts and Reports */}
            <Grid2 container spacing={3} sx={{ marginTop: 3 }}>
                <Grid2 item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                                Revenue
                            </Typography>
                            <BarChart /> {/* Replace with actual chart */}
                        </CardContent>
                    </Card>
                </Grid2>
                <Grid2 item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                                Sales Report
                            </Typography>
                            <BarChart /> {/* Replace with actual chart */}
                        </CardContent>
                    </Card>
                </Grid2>
                <Grid2 item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                                Inventory
                            </Typography>
                            <BarChart /> {/* Replace with actual chart */}
                        </CardContent>
                    </Card>
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default DashboardContent;
