import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


export default class Categories extends Component {
    render() {
        return (
            <CatWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/menu" className="nav-link">
                            Food
                        </Link>
                    </li>              
                    <li className="nav-item ml-5">
                        <Link to="/drinks" className="nav-link">
                            Drinks
                        </Link>
                    </li>              
                    <li className="nav-item ml-5">
                        <Link to="/sauce" className="nav-link">
                            Sauce
                        </Link>
                    </li>              
                </ul>
            </CatWrapper>
        )
    }
}

const CatWrapper = styled.div`
.nav-link{
    color:var(--mainBlue)!important;
    font-size:1.3rem;
    text-transform:capitalize;
}
`