import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Brightness3Icon from '@material-ui/icons/Brightness3'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import InvertColorsSharpIcon from '@material-ui/icons/InvertColorsSharp'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Switch from '@material-ui/core/Switch'
import TuneIcon from '@material-ui/icons/Tune'

const useStyles = makeStyles({
  root: {
    marginLeft: 'auto',
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

const ThemeToggle = ({ darkState, handleDarkThemeChange, partyState, handlePartyThemeChange }) => {
  const classes = useStyles();
  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerState(open);
  };

  const themes = [
    {
      themeName: 'Dark',
      // label: darkState ? 'Light' : 'Dark',
      icon: darkState ? <Brightness3Icon /> : <Brightness4Icon />,
      onChange: handleDarkThemeChange,
      checked: darkState,
    },
    {
      themeName: 'Party',
      // label: partyState ? 'Shut It Down' : 'Party',
      icon: <InvertColorsSharpIcon />,
      onChange: handlePartyThemeChange,
      checked: partyState,
    },
  ]

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Divider />
      <List>
        {themes.map(obj => (
          <ListItem button key={obj.themeName}>
            <ListItemIcon>{obj.icon}</ListItemIcon>
            <FormControlLabel
              control={<Switch checked={obj.checked} onChange={obj.onChange} size="small" />}
              label={obj.label}
            />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <Button onClick={toggleDrawer(true)}>
        <TuneIcon />
      </Button>
      <Drawer
        anchor="right"
        open={drawerState}
        onClose={toggleDrawer(false)}
        transitionDuration={{ enter: 200, exit: 1100 }}
      >
        {list()}
      </Drawer>
    </div>
  );
}

export default ThemeToggle;