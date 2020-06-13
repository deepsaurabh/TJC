import React from 'react';
import clsx from "clsx";
import {
  NavLink
} from "react-router-dom";
import {
  AppBar, Toolbar, List, Divider,
  ListItem, ListItemIcon, ListItemText, Drawer,
  InputBase,
  Button
} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles, fade } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from "@material-ui/icons/Mail";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import InfoIcon from '@material-ui/icons/Info';
import PhoneIcon from '@material-ui/icons/Phone';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: '#2ACE5E',
  },
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    minHeight: 110,
    alignItems: 'center',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  bg: {
    backgroundImage: `url("https://images.pexels.com/photos/2569471/pexels-photo-2569471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")`,
    height: 150,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    fontWeight: 'bold',
    fontSize: 37,
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  list: {
    width: 250,
    color: '#2ACE5E'
  },
  fullList: {
    width: "auto"
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.success.light, 0.35),
    '&:hover': {
      backgroundColor: fade(theme.palette.success.light, 0.25),
    },
    marginLeft: 0,
    color: 'grey',
    alignSelf: 'flex-end',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  const [drawerVisible, setdrawerVisible] = React.useState(false);

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setdrawerVisible(open);
  };

  const list = anchor => (
    <div
      className={clsx(classes.list, {
      })}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <ChevronLeftIcon />
          </ListItemIcon>
          <ListItemText primary="back" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <NavLink to="/" style={{ textDecorationLine: 'none', color: 'inherit' }}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </NavLink>
        <NavLink to="/jobs" style={{ textDecorationLine: 'none', color: 'inherit' }}>
          <ListItem button>
            <ListItemIcon>
              <WorkIcon />
            </ListItemIcon>
            <ListItemText primary="Jobs" />
          </ListItem>
        </NavLink>
        <NavLink to="blog" style={{ textDecorationLine: 'none', color: 'inherit' }}>
          <ListItem button>
            <ListItemIcon>
              <LocalLibraryIcon />
            </ListItemIcon>
            <ListItemText primary="Blog" />
          </ListItem>
        </NavLink>
        <NavLink to="about" style={{ textDecorationLine: 'none', color: 'inherit' }}>
          <ListItem button>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItem>
        </NavLink>
        <NavLink to="contact" style={{ textDecorationLine: 'none', color: 'inherit' }}>
          <ListItem button>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </NavLink>
      </List>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color='transparent'
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={drawerVisible} onClose={toggleDrawer(false)}>
            {list("left")}
          </Drawer>
          <Typography className={classes.title} align='left' variant="h3" noWrap>
            thejobscentral
          </Typography>
          <div style={{ alignSelf: 'flex-start', height: 110, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <IconButton color="default" >
                <LinkedInIcon fontSize='inherit' />
              </IconButton>
              <IconButton color="default">
                <FacebookIcon fontSize='inherit' />
              </IconButton>
              <IconButton color="default">
                <TwitterIcon fontSize='inherit' />
              </IconButton>
              <IconButton color="default">
                <YouTubeIcon fontSize='inherit' />
              </IconButton>
              <IconButton color="default">
                <MailIcon fontSize='inherit' />
              </IconButton>
            </div>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search Jobs…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            <div style={{ marginTop: 5, display: 'flex', justifyContent: 'space-between' }}>
              <NavLink to="login" style={{ textDecorationLine: 'none', color: 'inherit' }}>
                <Button variant="text" size="small" style={{ backgroundColor: '#197b38', color: 'white' }}>Employer Sign IN</Button>
              </NavLink>
              <NavLink to="uploadcv" style={{ textDecorationLine: 'none', color: 'inherit' }}>
                <Button variant="text" size="small" style={{ backgroundColor: '#197b38', color: 'white' }}>Upload CV</Button>
              </NavLink>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}