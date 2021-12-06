import './sign-up.styles.scss';
import React from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('Password and Confirm Password isn\'t match');
      return;
    }

    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    
    try {
      await createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    }
    catch (err) {
      console.log(`There is an error during create user`, err);
    }
  }

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {

    const { displayName, email, password, confirmPassword} = this.state;

    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span >Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name="displayName"
            value={displayName}
            onChange={this.handleOnChange}
            label='name'
            required
          />
          <FormInput
            type='email'
            name="email"
            value={email}
            onChange={this.handleOnChange}
            label='email'
            required
          />
          <FormInput
            type='password'
            name="password"
            value={password}
            onChange={this.handleOnChange}
            label='password'
            required
          />
          <FormInput
            type='password'
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleOnChange}
            label='confirm password'
            required
          />
          <CustomButton
            type='submit'
          >
            Sign Up
          </CustomButton>
        </form>        
      </div>
    )
  }
}

export default SignUp;