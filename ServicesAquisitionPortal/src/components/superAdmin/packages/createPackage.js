// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import PackagesForm from './packagesForm'
// import Button from '@material-ui/core/Button';
// import Dashboard from '../dashboard/dashboard'
// const useStyles = makeStyles(theme => ({
//   root: {
//     padding: theme.spacing(3, 2),
//     marginTop:-40
//   },
// }));

// export default function CreatePackage(props) {
//   const classes = useStyles();

//   return (
//     <div>
//       <Dashboard />
//       <div style={{margin:10}}>
//          <Button variant="contained" color="primary" style={{paddingTop:20,paddingBottom:20,marginLeft:20,cursor:'default'}}>Create Package</Button>
//       <Paper className={classes.root}>

     
//         <PackagesForm showPackage={props.showPackage} />
//       </Paper>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';

import Select from '@material-ui/core/Select';

import TextField from '@material-ui/core/TextField';
import { Link,withRouter } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(7, 7,4,7),
		marginTop: 85,
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing(7, 4,4,4),
		},
	},
	textField: {
		marginLeft: theme.spacing(1),
	marginRight: theme.spacing(1),
	},
	grid: {
		[theme.breakpoints.down('sm')]: {
			backgroundColor: theme.palette.secondary.main,
		},
	},
}));

 function CreatePackage(props) {
	const classes = useStyles();
	//const [item, selectItem] = useState('');
	return (
		<div style={{textAlign:'center'}}>
			
			<Paper className={classes.root} >
      
				<Grid container spacing={3} justify="center"
				alignItems="center" >
					<Grid item lg={6} md={6} xs={12}>
						<TextField  fullWidth label="Package Name" className={classes.textField} />
					</Grid>
					<Grid item lg={6} md={6}  xs={12}>
						<TextField  fullWidth label="Price" className={classes.textField} />
					</Grid>

					<Grid item lg={4} md={4} xs={12}>
						<TextField  fullWidth label="Duration in month" className={classes.textField} />{' '}
					</Grid>
					<Grid item lg={4} md={4}  xs={12}>
						<TextField  fullWidth label="No. of users" className={classes.textField} />
					</Grid>
          <Grid item lg={4} md={4} xs={12}>
						<TextField  fullWidth label="storage in gb" className={classes.textField} />
					</Grid>

					{/* <Grid item lg={4} md={4} sm={12} xs={12}>
						<Select style={{ marginTop: 10, width: '100%' }} value="djwsbj">
							<MenuItem value="select package">
								<em>--Select--</em>
							</MenuItem>
							<MenuItem value="SalesAgent">SalesAgent</MenuItem>
							<MenuItem value="Customer">Customer</MenuItem>
					
						</Select>
					</Grid> */}

				
				</Grid>
				<br /> 	<br /> 
					<Grid container spacing={2} justify="center">
					{/* <Grid item>
				<Button alignItems="center" variant="contained" color="default">
					<Link to="">
					Cancel
					</Link>
				</Button></Grid> */}
				<Grid item>
				<Button alignItems="center" variant="contained" color="secondary">
					
						Save as New
					</Button>
					</Grid>
					<Grid item>
						<Button alignItems="center" variant="contained" color="primary">
					
						Save
					</Button>
					</Grid>
					</Grid>
				
			</Paper>
		</div>
	);
}

export default withRouter(CreatePackage)