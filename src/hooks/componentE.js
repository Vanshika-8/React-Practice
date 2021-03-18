import React, { Component } from 'react';
import ComponentF from './componentF';
import UserContext from './userContext';

//creating a contect value
//giving contextType as usercontext
class ComponentE extends Component{
    static contextType=UserContext
    render(){
        return (
            <div>
            componentE context {this.context}
            <ComponentF/>
            </div>
        )
    }
    
}

export default ComponentE;