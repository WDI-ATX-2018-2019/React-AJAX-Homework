import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'

export default class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
			formErrors: {username: '', password: ''},
			emailError: false,
			passwordError: false,
		}	
	}


	handleChange = (event) => {
		this.setState({
			[event.currentTarget.name]: event.currentTarget.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		let error = 0;
		let emailValid = 0;
		let passwordValid = 0;

		console.log("sdfdsfdsf")
	    
	    if (! this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
	        error = 1;
	        console.log("email error")
	    }
	        //fieldValidationErrors.email = emailValid ? '' : ' is invalid';
	      

	    if (this.state.password < 6) {
	        error = 1;
	        console.log("password error")
	    }
	        //fieldValidationErrors.password = passwordValid ? '': ' is too short';
	       
		if (error) {
			this.setState({
				emailError: true,
				passwordError: true
			})
		} else {	
			this.props.login(this.state.username)
		}
	}

	render() {
		const { email, password } = this.state
		
		return (
				<Form onSubmit={this.handleSubmit}>
					<Form.Group>
						<Form.Input 
							fluid width={6} 
							error={this.state.emailError} 
							label="Email" type="text" 
							placeholder='Email' name="email" 
							value={email} 
							onChange={this.handleChange} />
						<Form.Input 
							fluid width={6} 
							error={this.state.passwordError} 
							label="Password" 
							type="text" 
							placeholder='Password' 
							name="password" 
							value={password} 
							onChange={this.handleChange} />
					</Form.Group>
						<Form.Button type='submit' value='Submit'>Submit</Form.Button>
				</Form>

			)
		}
}

/*
<form onSubmit={this.handleSubmit}>
				<input type="text" name="username" placeholder="username"
				value={this.state.username} onChange={this.handleChange} />
				<input type="text" name="password" placeholder="password"
				value={this.state.password} onChange={this.handleChange} />
				<input type='submit' value='Submit' />
			</form>
			*/


/*
			<form class="ui form">
  <div class="field">
    <label>Empty</label>
    <input name="empty" type="text">
  </div>
  <div class="field">
    <label>Dropdown</label>
    <select class="ui dropdown" name="dropdown">
      <option value="">Select</option>
      <option value="male">Choice 1</option>
      <option value="female">Choice 2</option>
    </select>
  </div>
  <div class="inline field">
    <div class="ui checkbox">
      <input type="checkbox" name="checkbox">
      <label>Checkbox</label>
    </div>
  </div>
  <div class="ui submit button">Submit</div>
  <div class="ui error message"></div>
</form>

*/