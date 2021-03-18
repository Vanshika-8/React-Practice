import React, { Component } from 'react';
import FRInput from './refs';

class ParentRef extends Component {
    constructor(props) {
        super(props);
        this.inputRef=React.createRef()
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }
    render() { 
        return (  
            <div>
            <FRInput ref={this.inputRef}/>
            
            </div>
        );
    }
}
 
export default ParentRef;