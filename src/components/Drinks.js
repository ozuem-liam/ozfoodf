import React, { Component } from 'react'
import Menu from './Menu';
import {ProductConsumer} from '../context';
import Title from './Title';

export default class Drinks extends Component {
 
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="OzFood" title="Drinks" />
                        <div className="row">
                            <ProductConsumer>
                                {value=>{
                                    return value.products.map(product =>{
                                        return <Menu key={product.id} product={product} />
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
