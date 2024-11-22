import React from 'react';
import { Tab } from '@mui/material';
import { Link } from 'react-router-dom';

const LinkTab = (props) => {
    return (
        <Tab
            component={Link}
            {...props}
            to={props.href} // Pass the href prop to `to` for navigation
        />
    );
};

export default LinkTab;
