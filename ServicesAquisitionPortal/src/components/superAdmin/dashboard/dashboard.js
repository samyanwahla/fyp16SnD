import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Collapse from '@material-ui/core/Collapse';
import DrawerAppbar from './drawerNav'
import {Packages_Action,Packages_Status} from '../../../constants/packagesActions'
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import {withRouter} from 'react-router-dom'
import withWidth from '@material-ui/core/withWidth';
import {connect} from 'react-redux'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import ChartsContainer from '../../dashboard-charts/chartsContainer'
import CustomizedMenus from './Menus'
import ChartsGrid from '../../dashboard-charts/chartsGrid'
//////////////////


const mapStateToProps=state=>({
	packages_Status:state.packages_Reducer.packages_status
	})
const mapDispatchToProps=dispatch=>({
	LoadNewPackage:()=>{dispatch({type:Packages_Action.LOADNEW})},
	LoadShowPackage:()=>{dispatch({type:Packages_Action.LOADSHOW})},
	// LoadNewRole:()=>{dispatch({type:Users_Action.LOADNEWRole})},
	// LoadShowRole:()=>{dispatch({type:Users_Action.LOADSHOWROLE})}
})

//////////////////////////////
const drawerWidth = 260;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	drawer: {
		[theme.breakpoints.up('sm')]: {
			width: drawerWidth,
			flexShrink: 0,
		},
  },
  drawerRoot: {
		paddingTop:60,
		width: '100%',
		overflowY:'hidden',
		paddingBottom:'180%',

		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	  },
	  nested: {
		paddingLeft: theme.spacing(4),
	  },
	appBar: {
		marginLeft: drawerWidth,
		
		[theme.breakpoints.up('sm')]: {
			width: `calc(100% - ${drawerWidth}px)`,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
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
		padding: theme.spacing(0,3,3,3),
	},
	clickText:{
		 color:'white',
		 '&:active': {
			color:'green'
	 	},
		 '&:focus': {
			color:'green'
		 },
		 
	 }
}));

 function Dashboard(props) {
	const { container, getScreen } = props;
	const [open, setOpen] = React.useState(false);
	const [headerMargin,setMargin]=useState(80)
	const [txtColor,setColor]=useState({active:'green',Dective:'white'})
	function handleClick() {
	  setOpen(!open);
	}

	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(false);
	const [child,setChild] = React.useState('');
	function handleDrawerToggle() {
		setMobileOpen(!mobileOpen);
	}

	const showMe = (selected) => {
		
	//	alert(props.isActive)
		switch(selected){
		
			case 'Dashboard':

			return(props.history.push('/admin/snd/dashboard')); 
			
			// case 'ViewPackages':
			// return(props.history.push('/admin/snd/packages'));
		
			case 'ManagePackages':
			if(props.isActive=='packages'){
			;break;}
			return(props.history.push('/admin/snd/packages'));
			
			case 'UserNotification':return(props.history.push('/admin/snd/Users'))
			
		}
	};
	const drawer = (
		// <div>
		// 	<div className={classes.toolbar} />
		// 	<Divider />
		// 	<List>
		// 		{['Dashboard', 'ViewPackages', 'ManagePackages', 'UserNotification'].map((text, index) => (
		// 			<ListItem
		// 				onClick={() => {
		// 					showMe(text);
		// 			}}
		// 				button
		// 				key={text}
		// 			>
		// 				<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
		// 				<ListItemText primary={text} />
		// 			</ListItem>
		// 		))}
		// 	</List>
		// 	<Divider />
		// 	<List>
		// 		{['Profile', 'ChangePassword','SignOut'].map((text, index) => (
		// 			<ListItem button key={text}>
		// 				<ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
		// 				<ListItemText primary={text} />
		// 			</ListItem>
		// 		))}
		// 	</List>
    // </div>
    <List
		component="nav" 	style={{backgroundColor:'#212121',color:'white'}}
		aria-labelledby="nested-list-subheader"
		// subheader={
		//   <ListSubheader component="div" id="nested-list-subheader">
		// 	Nested List Items
		//   </ListSubheader>
		// }
		className={classes.drawerRoot}
	  >
		<ListItem button onClick={()=>props.history.push('/admin/snd/dashboard')}
		//className={classes.clickText} 
		 >
		  <ListItemIcon>
			<SendIcon style={{color:'white'}}/>
		  </ListItemIcon>
		  <ListItemText primary="Dashboard" />
		</ListItem>
	  
		<ListItem button onClick={handleClick} 
	>
		  <ListItemIcon>
			<InboxIcon style={{color:'white'}}/>
		  </ListItemIcon>
		  <ListItemText primary="Manage Packages" />
		  {open ? <ExpandMore /> : <ExpandLess />}
		</ListItem>
		<Collapse in={open} timeout="auto" unmountOnExit>
		  <List component="div" disablePadding>
			<ListItem button className={classes.nested}
	onClick={()=>{props.LoadNewPackage();props.history.push('/admin/snd/packages')}}>
			  <ListItemIcon>
				<StarBorder style={{color:'white'}}/>
			  </ListItemIcon>
			  <ListItemText primary="Create Package" />
			</ListItem>
			<ListItem button className={classes.nested}
			onClick={()=>
	{props.LoadShowPackage();props.history.push('/admin/snd/packages')}}>
			  <ListItemIcon>
				<StarBorder style={{color:'white'}}/>
			  </ListItemIcon>
			  <ListItemText primary="Show Package" />
			</ListItem>
		  </List>
		</Collapse>

	
		<ListItem button>
		  <ListItemIcon>
			<DraftsIcon style={{color:'white'}}/>
		  </ListItemIcon>
		  <ListItemText primary="Agent Management" />
		</ListItem>
	  
	  </List>
	);

	const header=(
		
        <Toolbar variant="dense" style={{backgroundColor:'red',marginTop:40,marginLeft:300}}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
            Photos
          </Typography>
        </Toolbar>
	
	)
//alert({getScreen})
	return (
		<div className={classes.root}>
			<CssBaseline />
			{window.location.pathname!=='/'?
			
				<AppBar position="fixed"  
			className={classes.appBar} style={{backgroundColor:'white',color:'grey'}}>
				<Toolbar >
					<IconButton
						color="inherit"
						aria-label="Open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap style={{flexGrow:1}}>
						Sales  & Distribution
					</Typography>
					{/* <IconButton
						color="inherit"
						aria-label="Open drawer"
						edge="end"
						onClick={handleDrawerToggle}
					
					>
					
					</IconButton> */}
						<CustomizedMenus />
				</Toolbar>
			</AppBar>
			:null}
				{window.location.pathname!=='/'?	<AppBar  style={{marginTop:props.width==='xs'?headerMargin-10:headerMargin,paddingTop:3,paddingBottom:3
				,backgroundColor:'#f5f5f5',color:'#2e7d32'}} className={classes.appBar}
			color="default" elevation={1}>
				<Toolbar variant="dense">
			<div>
				
      {(() => {
					if(window.location.pathname==='/admin/snd/dashboard'){
						return <Typography  variant="h6">Dashboard</Typography>
					}
				else	if(props.packages_Status===Packages_Status.NEW){
						return <Typography  variant="h6">Create Package</Typography>
					}
					else if(props.packages_Status===Packages_Status.SHOW){
						
						return <Grid  container direction="row" spacing={2} justify='flex-start'
						alignItems="center">
						<Grid item><Typography  variant="h6"  >Show Package</Typography> </Grid>
						<Grid item> <Fab style={{backgroundColor:'#2e7d32',color:'white'}}  size="small" className={classes.fab}
						onClick={()=>
						{props.LoadNewPackage();props.history.push('/admin/snd/packages')
						}
						}>
						<AddIcon />
					</Fab></Grid></Grid>
					}
				})()}
			

    </div>
					
					
				</Toolbar>
			</AppBar>
			:null}
			
		
		
			{/* <br />
			{header} */}
			{window.location.pathname!=='/'?	<nav className={classes.drawer} aria-label="Mailbox folders">
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Hidden smUp implementation="css">
					<Drawer
						container={container}
						variant="temporary"
						anchor={theme.direction === 'rtl' ? 'right' : 'left'}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant="permanent"
						open
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>:null}
		
			<main className={classes.content}>
				<div className={classes.toolbar} />
	{window.location.pathname==='/admin/snd/dashboard'?<ChartsContainer />:	getScreen}
			
				{/* {showMe()} */}
			</main>
		</div>
	);
}

Dashboard.propTypes = {
	// Injected by the documentation to work in an iframe.
	// You won't need it on your project.
	container: PropTypes.object,
};

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(withWidth()(Dashboard)))


