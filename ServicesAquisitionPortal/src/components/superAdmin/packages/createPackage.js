import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PackagesForm from './packagesForm'
import Button from '@material-ui/core/Button';
import Dashboard from '../dashboard/dashboard'
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop:-40
  },
}));

export default function CreatePackage(props) {
  const classes = useStyles();

  return (
    <div>
      <Dashboard />
      <div style={{margin:10}}>
         <Button variant="contained" color="primary" style={{paddingTop:20,paddingBottom:20,marginLeft:20,cursor:'default'}}>Create Package</Button>
      <Paper className={classes.root}>

     
      {/* <Typography variant='title' style={{paddingTop:20,paddingBottom:20,marginLeft:20,backgroundColor:"#3f50b5",color:"white"}}>Create Package</Typography> */}
        {/* <Typography variant="h5" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography> */}
        <PackagesForm showPackage={props.showPackage} />
      </Paper>
      </div>
    </div>
  );
}