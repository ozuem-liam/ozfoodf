/* eslint-disable react/style-prop-object */
import React, { Component } from 'react';
import styled from 'styled-components';

export default class Profile extends Component {
    render() {
        return (
            <ProfileWrapper>
                <div className="profile-info">
                    <div className="profile-dash">
                        <div className="profileimage">
                            <div className="imaging"><img src="#" alt="profile" style={{width: '150px', height: '150px'}} /></div>
                            <div className="name"><h3>Ken Freddo</h3></div>
                        </div>
                        <div className="profile-card">
                            <div><h6>Phone: <span>+234 810 595 1215</span></h6></div><br/>
                            <div><h6>Email: <span>ozuemdw@gmail.com</span></h6></div><br/>
                            <div><h6>Address: <span>12a baddo lagos</span></h6></div><br/>
                            <div><h6>Birthday: <span>June 28, 1996</span></h6></div><br/>
                        </div>
                </div>

                    <div className="points-dash">
                        <div><h1>Total Points</h1></div>
                        <div className="card">
                        <div className="counter">
                            <svg>
                                <circle cx="70" cy="70" r="70"></circle>
                                <circle cx="70" cy="70" r="70"></circle>
                            </svg>
                            <div className="point-counter"><p>2000 <span>points</span></p></div>
                        </div>
                        </div>
                    </div>
                </div>
            </ProfileWrapper>
        )
    }
}

const ProfileWrapper = styled.div`
.profile-info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 2rem;
    margin: 1rem;
    height: 40%;
    transition: all 0.5s;
  }
  
  .points-dash {
    display: flex;
    position: relative;
    background: var(--mainBlue);
    width: 80%;
    justify-content: space-around;
    border-radius: 1rem;
    justify-items: center;
    height: 50%;
    align-items: center;
    text-align: center;
    overflow: hidden;
    transition: 0.5s;
    left: 10%;
    border: 1px solid #00ff43;
  }
  
  .points-dash .card:hover {
    transform: translateY(-10px);
  }
  
  .counter {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    box-shadow: inset 0 0 50px #000;
    background: #222;
    z-index: 1000;
  }
  
  .counter .point-counter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
  
  .counter .point-counter p {
    color: #777;
    font-weight: 700;
    font-size: 30px;
    transition: 0.5s;
  }
  
  .card:hover .counter .point-counter p {
    color: #fff;
    font-size: 40px;
  }
  
  .counter .point-counter p span {
    font-size: 34px;
    color: #777;
  }
  
  svg {
    position: relative;
    width: 150px;
    height: 150px;
    z-index: 1000;
  }
  
  svg circle {
    width: 100%;
    height: 100%;
    fill: none;
    stroke: #00ff43;
    stroke-width: 10;
    stroke-linecap: round;
    position: relative;
    transform: translate(5px, 5px);
  }
  .points-dash h1 {
    position: relative;
    font-family: sans-serif;
    color: #00ff43;
    top: 35%;
  }
  
  /* profile-dash */
  
  .profile-dash {
    display: grid;
    position: relative;
    background: var(--mainBlue);
    width: 80%;
    grid-template-columns: 1fr 1fr;
    border-radius: 1em;
    height: 300px;
    overflow: hidden;
    transition: 0.5s;
    left: 10%;
    border: 1px solid #00ff43;
  }
  .profileimage {
    height: 80%;
    top: 10%;
    margin: 0;
    padding: 0;
  }
  .profileimage .imaging {
    margin: 20px;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    box-shadow: inset 0 0 50px #000;
    background: #222;
    z-index: 1000;
  }
  
  .profileimage img {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }
  
  .name {
    width: 100%;
    position: relative;
    margin: 1rem;
    padding:0;
    color: #00ff43;
  }
  
  .profile-card {
    display: flex;
    position: relative;
    top: 3rem;
    height: 40%;
    flex-direction: column;
    padding-bottom: 1rem;
    padding-right: 1rem;
  }
  
  .profile-card div {
    height: 40%;
    position: relative;
    color: var(--mainWhite);
    font-family: sans-serif;
    border-bottom: 2px solid #fff700;
  }
  
  .profile-card a {
    text-decoration: none;
  }
  
  .profileimage {
    display: flex;
    position: relative;
    justify-self: center;
    flex-direction: column;
    justify-content: space-around;
  }  
`