import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';
import styled from 'styled-components';


export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/menu'>
                  <i class="fas fa-store navbar-brand"></i>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/menu" className="nav-link">
                            Menu
                        </Link>
                    </li>              
                    <li className="nav-item ml-5">
                        <Link to="/profile" className="nav-link">
                            My Profile
                        </Link>
                    </li>              
                </ul>

                <Link to="/cart" className="ml-auto">
                        <ButtonContainer>
                            <span className="mr-2">
                                <i className="fas fa-cart-plus" />
                            </span>
                            my cart 
                        </ButtonContainer>
                    </Link>  
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform:capitalize;
}
`

