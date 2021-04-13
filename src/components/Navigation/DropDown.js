import React from 'react';
import { useSpring, animated } from 'react-spring/three';
import { useHistory } from 'react-router';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

import { withStyles } from '@material-ui/core/styles';

const StyledMenu = withStyles({
  paper: {
    // border: '1px solid #d3d4d5',
    // backgroundColor: 'transparent', // does making this transparent help or hinder the design layout? It introduces elements I now need to hide
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    transitionDuration={1000}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    margin: theme.spacing(5),
  },
}))(MenuItem);

const DropDown = ({ menuState, onClick }) => {

  let history = useHistory();

  // need a spring transition here to control the List appearance
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    onClick();
    setAnchorEl(null);
    if (event.currentTarget.attributes.url !== undefined) {
      history.push(event.currentTarget.attributes.url.value);
    }
  };

  const menu = anchorEl ? <MenuOpenIcon onClick={onClick} /> : <MenuIcon onClick={onClick} />;

  return (
    <div>
      <Button
        color="inherit"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        { menu }
      </Button>
      <StyledMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem url="/" onClick={handleClose}>Home</StyledMenuItem>
        <StyledMenuItem url="/about" onClick={handleClose}>About</StyledMenuItem>
        <StyledMenuItem url="/projects" onClick={handleClose}>Projects</StyledMenuItem>
        <StyledMenuItem url="/contact" onClick={handleClose}>Contact</StyledMenuItem>
      </StyledMenu>
    </div>
  );
}

export default DropDown;