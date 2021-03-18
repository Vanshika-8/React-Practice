import React, { Component } from 'react';
import UpdatedComponent from './withCouter';
//hoc-is a pattern where a function takes a component as an argument and returns a new component
//cont NewComponent=higherOrderComponent(originalComponent)
class clickCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
         
        }
    }
    
   
    render() {
        const {count,incrementCount}=this.props
        return (
            <div>
                <h2 onMouseOver={incrementCount}>Clicked {count} times</h2>
            </div>
        )
    }
}

export default UpdatedComponent(clickCounter)  
