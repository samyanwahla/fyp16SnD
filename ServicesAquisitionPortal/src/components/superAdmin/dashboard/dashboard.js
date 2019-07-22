// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@material-ui/core/AppBar';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Divider from '@material-ui/core/Divider';
// import Drawer from '@material-ui/core/Drawer';
// import Hidden from '@material-ui/core/Hidden';
// import IconButton from '@material-ui/core/IconButton';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import MailIcon from '@material-ui/icons/Mail';
// import MenuIcon from '@material-ui/icons/Menu';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles, useTheme } from '@material-ui/core/styles';

// import {withRouter} from 'react-router-dom'

// //////////////////




// //////////////////////////////
// const drawerWidth = 240;

// const useStyles = makeStyles(theme => ({
// 	root: {
// 		display: 'flex',
// 	},
// 	drawer: {
// 		[theme.breakpoints.up('sm')]: {
// 			width: drawerWidth,
// 			flexShrink: 0,
// 		},
// 	},
// 	appBar: {
// 		marginLeft: drawerWidth,
		
// 		[theme.breakpoints.up('sm')]: {
// 			width: `calc(100% - ${drawerWidth}px)`,
// 		},
// 	},
// 	menuButton: {
// 		marginRight: theme.spacing(2),
// 		[theme.breakpoints.up('sm')]: {
// 			display: 'none',
// 		},
// 	},
// 	toolbar: theme.mixins.toolbar,
// 	drawerPaper: {
// 		width: drawerWidth,
// 	},
// 	content: {
// 		flexGrow: 1,
// 		padding: theme.spacing(3),
// 	},
// }));

//  function Dashboard(props) {
// 	const { container, getScreen } = props;
	

// 	const classes = useStyles();
// 	const theme = useTheme();
// 	const [mobileOpen, setMobileOpen] = React.useState(false);
// 	const [child,setChild] = React.useState('');
// 	function handleDrawerToggle() {
// 		setMobileOpen(!mobileOpen);
// 	}

// 	const showMe = (selected) => {
		
// 	//	alert(props.isActive)
// 		switch(selected){
		
// 			case 'Dashboard':

// 			return(props.history.push('/admin/snd/dashboard')); 
			
// 			// case 'ViewPackages':
// 			// return(props.history.push('/admin/snd/packages'));
		
// 			case 'ManagePackages':
// 			if(props.isActive=='packages'){
// 			;break;}
// 			return(props.history.push('/admin/snd/packages'));
			
// 			case 'UserNotification':return(props.history.push('/admin/snd/Users'))
			
// 		}
// 	};
// 	const drawer = (
// 		<div>
// 			<div className={classes.toolbar} />
// 			<Divider />
// 			<List>
// 				{['Dashboard', 'ViewPackages', 'ManagePackages', 'UserNotification'].map((text, index) => (
// 					<ListItem
// 						onClick={() => {
// 							showMe(text);
// 					}}
// 						button
// 						key={text}
// 					>
// 						<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
// 						<ListItemText primary={text} />
// 					</ListItem>
// 				))}
// 			</List>
// 			<Divider />
// 			<List>
// 				{['Profile', 'ChangePassword','SignOut'].map((text, index) => (
// 					<ListItem button key={text}>
// 						<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
// 						<ListItemText primary={text} />
// 					</ListItem>
// 				))}
// 			</List>
// 		</div>
// 	);

// 	const header=(
		
//         <Toolbar variant="dense" style={{backgroundColor:'red',marginTop:40,marginLeft:300}}>
//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" color="inherit">
//             Photos
//           </Typography>
//         </Toolbar>
	
// 	)
// //alert({getScreen})
// 	return (
// 		<div className={classes.root}>
// 			<CssBaseline />
			
// 			<AppBar position="fixed" className={classes.appBar}>
// 				<Toolbar>
// 					<IconButton
// 						color="inherit"
// 						aria-label="Open drawer"
// 						edge="start"
// 						onClick={handleDrawerToggle}
// 						className={classes.menuButton}
// 					>
// 						<MenuIcon />
// 					</IconButton>
// 					<Typography variant="h6" noWrap>
// 						S&D
// 					</Typography>
// 				</Toolbar>
// 			</AppBar>
// 			{/* <br />
// 			{header} */}
// 			<nav className={classes.drawer} aria-label="Mailbox folders">
// 				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
// 				<Hidden smUp implementation="css">
// 					<Drawer
// 						container={container}
// 						variant="temporary"
// 						anchor={theme.direction === 'rtl' ? 'right' : 'left'}
// 						open={mobileOpen}
// 						onClose={handleDrawerToggle}
// 						classes={{
// 							paper: classes.drawerPaper,
// 						}}
// 						ModalProps={{
// 							keepMounted: true, // Better open performance on mobile.
// 						}}
// 					>
// 						{drawer}
// 					</Drawer>
// 				</Hidden>
// 				<Hidden xsDown implementation="css">
// 					<Drawer
// 						classes={{
// 							paper: classes.drawerPaper,
// 						}}
// 						variant="permanent"
// 						open
// 					>
// 						{drawer}
// 					</Drawer>
// 				</Hidden>
// 			</nav>
// 			<main className={classes.content}>
// 				<div className={classes.toolbar} />
// 				{/* <Typography paragraph>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
//           ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
//           facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
//           gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
//           donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
//           adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
//           Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
//           imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
//           arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
//           donec massa sapien faucibus et molestie ac.
//         </Typography>
//         <Typography paragraph>
//           Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
//           facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
//           tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
//           consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
//           vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
//           hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
//           tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
//           nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
//           accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
//         </Typography>  */}
// 				{getScreen}
// 				{/* {showMe()} */}
// 			</main>
// 		</div>
// 	);
// }

// Dashboard.propTypes = {
// 	// Injected by the documentation to work in an iframe.
// 	// You won't need it on your project.
// 	container: PropTypes.object,
// };

// export default withRouter(Dashboard)
import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline';
import CustomizedMenus from './Menus'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { withStyles } from '@material-ui/core/styles';
import DrawerAppbar from './drawerNav'
const drawerWidth = 240;
// const useStyles = makeStyles(theme => ({
//   grow: {
//     flexGrow: 1,
//   },
//   menuButton: {
// 	marginRight: theme.spacing(2),
// 	display: 'block',
//     [theme.breakpoints.up('sm')]: {
//       display: 'none',
//     },
//   },
//   title: {
//     display: 'none',
//     [theme.breakpoints.up('sm')]: {
//       display: 'block',
//     },
//   },
//   inputRoot: {
//     color: 'inherit',
//   },

//   sectionDesktop: {
//     display: 'none',
//     [theme.breakpoints.up('sm')]: {
//       display: 'flex',
//     },
//   },

// }));

//  function DrawerAppbar(props) {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   function handleProfileMenuOpen(event) {
//     setAnchorEl(event.currentTarget);
//   }

//   function handleMobileMenuClose() {
//     setMobileMoreAnchorEl(null);
//   }

//   function handleMenuClose() {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   }

//   const menuId = 'primary-search-account-menu';
  
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{ vertical: 'top', horizontal: 'center' }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     >
//       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
//       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
//     </Menu>
//   );


//   return (
//     <div className={classes.grow}>
	
//       <AppBar position="fixed">
//         <Toolbar>
//           <IconButton
//             edge="start"
//             className={classes.menuButton}
//             color="inherit"
// 			aria-label="Open drawer"
// 			onClick={props.handleDrawerToggle}
//           >
//             <MenuIcon />
//           </IconButton>
// 		  <Typography //className={classes.title} 
// 		  variant="h6" noWrap>
//             Sales&Distribution
//           </Typography>
// 		<Button variant="primary" className={classes.title}  
//     style={{color:'white',textTransform:'capitalize',fontSize:18}}>Dashboard</Button>
	
// 		<CustomizedMenus classTitle={classes.title}/>
// 		<Button variant="primary" className={classes.title}  style={{color:'white',textTransform:'capitalize',fontSize:18}}
//     onClick={()=>props.history.push('/admin/snd/Users')}>Users</Button>
// 		<div className={classes.grow} />
//           <div className={classes.sectionDesktop}>
          
//             <IconButton aria-label="Show 17 new notifications" color="inherit">
//               <Badge badgeContent={17} color="secondary">
//                 <NotificationsIcon />
//               </Badge>
//             </IconButton>
//             <IconButton
//               edge="end"
//               aria-label="Account of current user"
//               aria-controls={menuId}
//               aria-haspopup="true"
//               onClick={handleProfileMenuOpen}
//               color="inherit"
//             >
//               <AccountCircle />
//             </IconButton>
//           </div>
     
//         </Toolbar>
//       </AppBar>
     
//       {renderMenu}
//     </div>
//   );
// }



const styles = theme => ({
  root: {
    display: 'flex',
    
  },
  appBar: {
    width:'100%'
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class Dashboard extends React.Component {
  constructor(props){
   super(props);
   this.state = {
    mobileOpen: false,
  };
  }
  

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        {/* <List> */}
          {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider /> */}
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}  */}
          <List>
          <ListItem button key='Dashboard' onClick={()=>this.props.history.push('/admin/snd/dashboard')}> 
            <ListItemIcon> 
              <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='Dashboard'/></ListItem>

          <ListItem button key='Show Packages' onClick={()=>this.props.history.push('/admin/snd/packages/showPackage')}> 
          <ListItemIcon> 
            <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='Show Packages' /></ListItem>
          <ListItem button key='Create Packages' onClick={()=>this.props.history.push('/admin/snd/packages/createPackage')}>
          <ListItemIcon> 
            <InboxIcon />
            </ListItemIcon>
             <ListItemText primary='Create Packages'  /></ListItem>
         
		  <ListItem button key='Show Users'> 
      <ListItemIcon> 
        <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Show Users' onClick={()=>this.props.history.push('/admin/snd/Users')} />

        </ListItem>
		    <ListItem button key='New Users'> 
        <ListItemIcon> 
          <NotificationsIcon />
          </ListItemIcon>
          <ListItemText primary='New Users'  onClick={()=>this.props.history.push('/admin/snd/Users')}  /></ListItem>
             <Divider /> 
			 <ListItem button key='Profile'>
       <ListItemIcon> 
        <AccountCircle />
        </ListItemIcon> 
         <ListItemText primary='Profile' /></ListItem>

			 <ListItem button key='My Account'>
       <ListItemIcon> 
          <AccountCircle />
          </ListItemIcon> 
          <ListItemText primary='My Account'/></ListItem>
        </List>
      </div>
    );

    return (
      <div className={classes.root} style={{overflowY:'hidden'}}>
        <CssBaseline />
        
        {/* <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
         
            <Hidden xsDown>
              <Button color="inherit" onClick={this.props.handleHomeClick} >Home</Button>
          <Button color="inherit" onClick={()=>this.props.history.push()}>Packages</Button>
          <Button color="inherit" onClick={()=>this.props.history.push()}//{this.props.handleShowMeetingClick} 
          >
          Users</Button>
   
          <Button color="inherit" onClick={()=>this.props.history.push('/Login')}>Login</Button>
          </Hidden>
          </Toolbar>
		</AppBar> */}
    {window.location.pathname!=='/'?<DrawerAppbar handleDrawerToggle={this.handleDrawerToggle}/>:null}
		
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp 
          implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          {/* <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden> */}
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} 
          />
          {window.location.pathname=='/admin/snd/dashboard' ? 
      ( <div>   <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
            elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
            hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
            velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
            Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
            viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
            Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus
            at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
            ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
            facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
            tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
            consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus
            sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.
            In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
            et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique
            sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo
            viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
            ultrices sagittis orci a.
          </Typography></div>):null}
        </main>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles, { withTheme: true })(Dashboard));

