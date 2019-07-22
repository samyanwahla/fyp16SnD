import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';

import Select from '@material-ui/core/Select';

import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
	root: {
		padding: theme.spacing(7, 7),
		marginTop: -40,
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

export default function CreateUser(props) {
	const classes = useStyles();
	//const [item, selectItem] = useState('');
	return (
		<div>
			<Button
				variant="contained"
				color="primary"
				style={{ paddingTop: 20, paddingBottom: 20, marginLeft: 20, cursor: 'default' }}
			>
				User Form
			</Button>
			<Paper className={classes.root}>
				<Grid container spacing={3}>
					<Grid item md={6} sm={12} xs={12}>
						<TextField fullWidth label="FirstName (Required)" className={classes.textField} />
					</Grid>
					<Grid item md={6} sm={12} xs={12}>
						<TextField fullWidth label="LastName (Required)" className={classes.textField} />
					</Grid>

					<Grid item lg={4} md={4} sm={12} xs={12}>
						<TextField fullWidth label="Email (Required)" className={classes.textField} />{' '}
					</Grid>
					<Grid item lg={4} md={4} sm={12} xs={12}>
						<TextField fullWidth label="Contact (Required)" className={classes.textField} />
					</Grid>

					<Grid item lg={4} md={4} sm={12} xs={12}>
						<Select style={{ marginTop: 10, width: '100%' }} value="djwsbj">
							<MenuItem value="select package">
								<em>--Select--</em>
							</MenuItem>
							<MenuItem value="basic">basic</MenuItem>
							<MenuItem value="gold">gold</MenuItem>
							<MenuItem value="premium">premium</MenuItem>
						</Select>
					</Grid>

					<Grid item lg={12} xs={12}>
						<TextField fullWidth label="Address (Required)" className={classes.textField} />
					</Grid>
				</Grid>
				<br /> <br />
				<center>
					<Button alignItems="center" variant="contained" color="primary">
						{' '}
						Save{' '}
					</Button>
				</center>
			</Paper>
		</div>
	);
}
