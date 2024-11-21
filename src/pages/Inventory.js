import React, { useState } from 'react';
import { Tabs, Box, Typography } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import LinkTab from '../components/LinkTab';
import Paddy from './Paddy';
import Batch from './Batch';
import Rice from './Rice';

const Inventory = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newIndex) => {
        setTabIndex(newIndex);
    };

    return (
        <>
            <Box sx={{ flexGrow: 1, backgroundColor: '#f5f6fa', padding: 3 }}>

            <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                Inventory
            </Typography>
            <Box sx={{ width: '100%' }}>
                <Tabs
                    value={tabIndex}
                    onChange={handleTabChange}
                    aria-label="Dashboard Tabs"
                    variant="fullWidth"
                >
                    <LinkTab label="Paddy" href="/inventory/paddy" />
                    <LinkTab label="Batch" href="/inventory/batch" />
                    <LinkTab label="Rice" href="/inventory/rice" />
                </Tabs>
            </Box>
            <Box sx={{ padding: 3 }}>
                <Routes>
                    <Route path="paddy" element={<Paddy />} />
                    <Route path="batch" element={<Batch />} />
                    <Route path="rice" element={<Rice />} />
                </Routes>
            </Box>
            </Box>
        </>
    );
};

export default Inventory;
