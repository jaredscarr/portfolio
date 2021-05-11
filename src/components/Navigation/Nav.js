import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const Nav = ({ navClick, darkState }) => {
  const classes = useStyles();
  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerState(open);
    navClick()
  };

  let history = useHistory();

  const handleClose = (event) => {
    navClick()
    toggleDrawer(false)

    if (event.currentTarget.attributes.url !== undefined) {
      history.push(event.currentTarget.attributes.url.value);
    }
  };

  const routes = [
    {
      label: 'Home',
      path: '/',
    },
    // {
    //   label: 'About',
    //   path: '/about',
    // },
    {
      label: 'Projects',
      path: '/projects',
    },
    {
      label: 'Contact',
      path: '/contact',
    }
  ];

  const list = () => (
    <div
      className={classes.list}
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
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <MenuOutlinedIcon />
      </Button>
      <Drawer
        className={classes.root}
        anchor="left"
        open={drawerState}
        transitionDuration={{ enter: 200, exit: 500 }}
      >
        {list()}
      </Drawer>
    </div>
  );
}

export default Nav;