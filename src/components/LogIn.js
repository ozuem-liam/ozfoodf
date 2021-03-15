import React, { Component } from 'react'
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import axios from 'axios';

export default class LogIn extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      email: '',
      password: ''
    }
  }
  
  loginChangeHandler  = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  loginSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(this.state)
    axios.post("http://localhost:8000/api/v1/login", this.state)
      .then(response => {
        window.location = "/menu";
        console.log(response)
      })
      .catch(error => {
        console.error(error)
      })
  }
    render() {
      const { email, password } = this.sate
        return (
            <LogInWrapper>
                <div className="log-in-box">
                    <form onSubmit={this.loginSubmitHandler}>
                        <div className="text-box">
                            <input type="text" id="email" name="email" placeholder="E-mail" value={email} onChange={this.loginChangeHandler} required />
                        </div><br/>
                        <div className="text-box">
                            <input type="password" id="password" name="password" placeholder="PASSWORD" value={password} onChange={this.loginChangeHandler} required />
                        </div><br/>

                        <ButtonContainer type="submit" className="log-in-btn">log in</ButtonContainer>
                    </form>
                </div>
               
                <div className="forget-passsword">
                    <a href="#3">Forgot password</a>
                </div>
            </LogInWrapper>
        )
    }
}

const LogInWrapper = styled.div`
  
  .log-in-box {
    width: 50%;
    position: absolute;
    height: 20%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--mainBlue);
  }
  
  .text-box {
    width: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid var(--mainBlue);
  }
  
  .text-box input {
    border: none;
    outline: none;
    background: none;
    color: white;
    font-size: 1rem;
  }
  
  .log-in-btn {
    position: absolute;
    top: 52%;
    left: 25%;
  }
  
  .forget-passsword a {
    font-family: sans-serif;
    text-decoration: none;
    color: var(--mainBlue);
    position: absolute;
    font-weight: bolder;
    font-size: 16px;
    top: 52%;
    left: 57%;
  }
  
  .forget-passsword a:hover {
    color: #3b3a08;
    transition-delay: -5s;
  }
`