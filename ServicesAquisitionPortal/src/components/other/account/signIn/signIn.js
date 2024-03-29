import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
	root: {
		height: '100vh',
	},
	image: {
		backgroundImage:'url(https://source.unsplash.com/random)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

function SignIn(props) {
	const classes = useStyles();
     const [user,setUser]=useState({username:'',password:''});
	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />
			<Grid item xs={false} sm={4} md={7} className={classes.image} />
			<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						{/* <LockOutlinedIcon /> */}
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in  {user.username}
						{user.password}
					</Typography>
					<form className={classes.form}>
						<TextField
							variant="outlined"
							margin="normal"
					//		required
							fullWidth 
							id="email"
							label="Email Address"
							name="email"
						//	autoComplete="email"
					//		autoFocus
							onChange={(event)=>setUser({...user,username:event.target.value})}
						/>
						<TextField
							variant="outlined"
							margin="normal"
						//	required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password" onChange={(event)=>setUser({...user,password:event.target.value})}
						//	autoComplete="current-password"
						/>
						{/* <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" /> */}

						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
							onClick={() => props.history.push('/admin/snd/dashboard')}
					//	onClick={() => props.handleLogin(user.username,user.password)}
						>
							Sign In
						</Button>
{/* <form>
	<input type="text" onChange={(event)=>setUser({...user,username:event.target.value})}/>
	<input type="password" onChange={(event)=>setUser({...user,password:event.target.value})}/>
<button type="submit" onClick={() => props.handleLogin(user.username,user.password)}  >
lwkh</button>
</form> */}
						<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Forgot password?
								</Link>
							</Grid>
							<Grid item>
								<button onClick={() => props.handleShowSignup()}>
									{"Don't have an account? Sign Up"}
								</button>
							</Grid>
						</Grid>
					</form>
				</div>
			</Grid>
		</Grid>
	);
}
export default withRouter(SignIn);
