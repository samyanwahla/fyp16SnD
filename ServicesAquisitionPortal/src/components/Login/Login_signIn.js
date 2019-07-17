import React from 'react';

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: '', password: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.id]: event.target.value });
	}
	handleSubmit(event) {
		event.preventDefault();
		this.props.handleSignIn(this.state.username, this.state.password);
	}

	render() {
		var errorMessage =
			this.props.status != undefined && this.props.status == 'LOGIN_ACCOUNT_NOT_AUTHORIZED'
				? 'Username or password is incorrect'
				: '';

		return (
			<form>
				<div style={{ padding: '6%', width: '40%' }}>
					<h1>Login Here</h1>
					<p style={{ color: 'red' }}>{errorMessage}</p>
					<input
						id="username"
						label="Username"
						type="text"
						onChange={this.handleChange}
						value={this.state.username}
					/>
					<br />
					<br />
					<input
						id="password"
						label="Password"
						type="password"
						onChange={this.handleChange}
						value={this.state.password}
					/>
					<br />
					<br />
					<button onClick={this.handleSubmit} type="submit">
						Login
					</button>
				</div>
			</form>
		);
	}
}

export default LoginForm;
