import React, { Component } from 'react';

class ContactName extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this.props)
        return ( 
            <div>
            <h1>Contact Name</h1>
            </div>
         );
    }
}
 
export default ContactName;