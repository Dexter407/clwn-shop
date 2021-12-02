import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({email: '', password: ''});
  }

  handleOnChange = (event) => {    
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }



  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit} >
          <FormInput
            type="email"
            name="email"
            label="email"
            value={this.state.email}
            handleOnChange={this.handleOnChange}
            required />
          <FormInput
            type="password"
            name="password"
            label="password"
            value={this.state.password}
            handleOnChange={this.handleOnChange}
            required />
          <CustomButton type="submit" >
            Sign In
          </CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn;