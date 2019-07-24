import React from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';

import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Dashboard from '../dashboard/dashboard'
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles(theme => ({
	'@global': {
		body: {
			backgroundColor: theme.palette.common.white,
		},
		ul: {
			margin: 0,
			padding: 0,
		},
		li: {
			listStyle: 'none',
		},
	},
	appBar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	toolbar: {
		flexWrap: 'wrap',
	},
	reglink: {
		'text-decoration': 'none',
	},
	toolbarTitle: {
		flexGrow: 1,
	},
	link: {
		margin: theme.spacing(1, 1.5),
	},
	heroContent: {
		padding: theme.spacing(8, 0, 6),
	},
	cardHeader: {
		backgroundColor: theme.palette.grey[200],
	},
	
	cardPricing: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'baseline',
		marginBottom: theme.spacing(3),
	},
}));

const tiers = [
	{
		title: 'Basic',
		price: '500',
		description: ['10 users included', '2 GB of storage', 'Help center access', 'Email support'],
		buttonText: 'Register',
		buttonVariant: 'outlined',
		backgroundcolor: '#38BC8B',
		colorr:'#38BC8B'
	},
	{
		title: 'Premium',
		subheader: 'Most popular',
		price: '900',
		description: ['20 users included', '10 GB of storage', 'Help center access', 'Priority email support'],
		buttonText: 'Register',
		buttonVariant: 'contained',
		backgroundcolor: '#DB3048',
		colorr:'#DB3048'
	},
	{
		title: 'Standard',
		price: '700',
		description: ['50 users included', '30 GB of storage', 'Help center access', 'Phone & email support'],
		buttonText: 'Register',
		buttonVariant: 'outlined',
		backgroundcolor: '#3CA1D7',
		colorr:'#3CA1D7'
	},
];

class ShowPackages extends React.Component {
	constructor(props) {
		super(props);
		this.handleRouting = this.handleRouting.bind(this);
	}

	handleRouting = () => {
		this.props.history.push('/payment');
	};

	render() {
		const classes = { useStyles };
		return (
			<React.Fragment>
				<CssBaseline />
				{window.location.pathname==='/pricing'?null:<Dashboard />}
				
					{/* <Button onClick={()=>this.props.createPackage()}>create package</Button> */}
				<Container maxWidth="sm" component="main" className={classes.heroContent}>
					<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom
					id="packages">
						Pricing
					</Typography>
					<Typography variant="h5" align="center" color="textSecondary" component="p">
						Quickly build an effective pricing table for your potential customers with this layout.
						It&apos;s built with default Material-UI components with little customization.
					</Typography>
				</Container>
				<br /><br />
				{/* End hero unit */}
				<Container maxWidth="md" component="main">
					<Grid container spacing={5} alignItems="flex-end">
						{tiers.map(tier => (
							// Enterprise card is full width at sm breakpoint
							<Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
								<Card style={{borderRadius:'7px'}}>
									<CardHeader style={{backgroundColor:tier.backgroundcolor, color:'white'}}
										title={tier.title}
										subheader={tier.subheader}
										titleTypographyProps={{ align: 'center', }}
										subheaderTypographyProps={{ align: 'center' }}
										action={tier.title === 'Premium' ? <StarIcon /> : null}
										className={classes.cardHeader}
										
									/>
									<CardContent>
										<div className={classes.cardPricing}>
											<Typography align="center" component="h2" variant="h3" color="textPrimary">
												${tier.price}
											</Typography>
											<Typography variant="h6" color="textSecondary">
												{/* /mo */}
											</Typography>
										</div>
										<ul>
											{tier.description.map(line => (
												<Typography
													component="li"
													variant="subtitle1"
													align="center"
													key={line}
												>
													{line}
												</Typography>
											))}
										</ul>
									</CardContent>
									{/* <Grid align='center' style={{paddingTop:15}}> */}
									<CardActions >
										
										<Button style={{borderRadius:'9px',color:"white",backgroundColor:tier.colorr,padding:10,margin:10}}
											fullWidth 
											
											/* variant={tier.buttonVariant} */
											/* backgroundColor={tier.colorr} */
											onClick={() => this.props.history.push('/signupandpayment')}
										>
											{tier.buttonText}
										</Button>
										
									</CardActions>
									{/* </Grid> */}
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</React.Fragment>
		);
	}
}
ShowPackages.propTypes = {
	classes: PropTypes.object.isRequired,
};
export default withRouter(withStyles(useStyles)(ShowPackages));