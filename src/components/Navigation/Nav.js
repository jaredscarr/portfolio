import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import ListItemIcon from '@mui/material/ListItemIcon';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

const Nav = ({ navClick, darkState, handleDarkThemeChange }) => {

  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerState(open);
    navClick();
  };

  let navigate = useNavigate();

  const handleClose = (event) => {
    navClick();
    toggleDrawer(false);

    if (event.currentTarget.attributes.url !== undefined) {
      navigate(event.currentTarget.attributes.url.value);
    }
  };

  let icon =  darkState ? <Brightness3Icon /> : <Brightness4Icon />;

  const routes = [
    {
      label: 'Home',
      path: '/',
    },
    // {
    //   label: 'About',
    //   path: '/about',
    // },
    // {
    //   label: 'Projects',
    //   path: '/projects',
    // },
    // {
    //   label: 'Contact',
    //   path: '/contact',
    // }
  ];

  const list = () => (
    <Box
      sx={{width: 250}}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Divider />
      <List>
        {routes.map((route, index) => (
          <ListItem button key={route.label} url={route.path} onClick={handleClose}>
            <ListItemText primary={route.label} />
          </ListItem>
        ))}
        <Divider />
        <ListItem button key="mode">
        <ListItemIcon>{icon}</ListItemIcon>
          <FormControlLabel
            control={<Switch checked={darkState} onChange={handleDarkThemeChange} size="small" />}
          />
          
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box>
      <Button
        onClick={toggleDrawer(true)}
        color='inherit'
      >
        <MenuOutlinedIcon />
      </Button>
      <Drawer
        anchor="left"
        open={drawerState}
        transitionDuration={{ enter: 200, exit: 500 }}
      >
        {list()}
      </Drawer>
    </Box>
  );
}

export default Nav;