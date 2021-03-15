import React, { Component } from 'react';
import {ButtonContainer} from './Button';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import styled from 'styled-components';
// import { userSignupRequest } from '../actions/signupAction';

/**
 *
 *
 * @class SignUp
 * @extends {React.Component}
 */

export default class SignUp extends Component {
    /**
   * Creates an instance of SignUp.
   * @constructor
   * @param {any} props
   * @memberof SignUp
   */
    constructor(props) {
      super(props);
    
      this.state = {
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          errors: false,
          success: false
      };
      this.changeHandler = this.changeHandler.bind(this);
      this.submitHandler = this.submitHandler.bind(this);
    }

      /**
 * @param {any} event
 *
 * @returns {object} response object
 *
 * @memberof SignUp
 */
    changeHandler  = (e) => {
      this.setState({[e.target.name]: e.target.value});
    }

     /**
   * Handles sign up action
   * @param {object} event
   *
   * @returns {object} response object
   *
   * @memberof SignUp
   */
    submitHandler = async (e) => {
      e.preventDefault();
      this.props.userSignupRequest(this.state)
      .then(() => {
        setTimeout(() => {
          if(this.props.userId.isAuthenticated === true) {
            this.props.history.push('/menu');
          } else if(this.props.signUpResponse.isSignedUp === false) {
            // eslint-disable-next-line no-undef
            Materialize.toast(this.props.signUpResponse.error.response.data, 2000, 'red rounded');
          }
        }, 1000);
      });
    }
    
    render() {
      const { firstname, lastname, email, password } = this.state
        return (
        <SignUpWrapper>
        <div className="sign-up-box">
        <form onSubmit={this.submitHandler}>
            <div className="text-box">
                <label for="firstName">FIRST NAME</label><br />
                <input type="text" id="firstname" name="firstname" value={firstname} onChange={this.changeHandler} required />
            </div><br/>
            <div className="text-box">
                <label for="lastName">LAST NAME</label><br />
                <input type="text" id="Lastname" name="lastname" value={lastname} onChange={this.changeHandler} required />
            </div><br/>
            <div className="text-box">
                <label for="e-mail">E-MAIL</label><br />
                <input type="text" id="email" name="email" value={email} onChange={this.changeHandler} required />
            </div><br/>
            <div className="text-box">
                <label for="password">PASSWORD</label><br />
                <input type="password" id="password" name="password" value={password} onChange={this.changeHandler} required />
            </div><br/>
            <ButtonContainer type="submit" className="sign-up-btn">sign up</ButtonContainer>
        </form>
    </div>
    </SignUpWrapper>
        )   
    }
}

// SignUp.propTypes = {
//   userSignupRequest: PropTypes.func.isRequired
// };

// export const mapStateToProps = state => (
//   {
//     usersId: state.auth,
//     signUpResponse: state.signUp[0],
//   }
// );

// export default connect(mapStateToProps, { userSignupRequest })(SignUp);

const SignUpWrapper = styled.div`
  
  .sign-up-box {
    width: 50%;
    position: absolute;
    height: 52%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #000;
  }
  
  .sign-up-box label {
    font-size: 1rem;

    margin: 0;
  }
  
  .text-box {
    width: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid var(--mainBlue);
  }
  
  input {
    width: 100%;
    border: none;
    outline: none;
    background: #fff;
    color: #000;
    font-size: 1rem;
  }
  
  .sign-up-btn {
    position: absolute;
    top: 85%;
  }
  
  .forget-passsword a {
    font-family: sans-serif;
    text-decoration: none;
    color: white;
    position: absolute;
    font-weight: bolder;
    font-size: 16px;
    top: 64%;
    left: 55%;
  }
  
  .forget-passsword a:hover {
    color: #3b3a08;
    transition-delay: -5s;
  }
`