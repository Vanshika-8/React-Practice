import React, { Component } from 'react';
/* 
Here there are 2 classes the child and the parent class,
we have used the child component in the parent component for toggling the view , 
by using a condtional statement we are rendering the view, but the lifecycle methods like 
componentWillMount() is excuted when the button is clciked and the child component is displayed, 
componentWillNotmount() is excuted when the button is clicked again and the child component is vanished.
*/
class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            show:false
         }
        
    }

    buttonHandler=()=>this.setState({show:!this.state.show})

    render() { 
        return ( 
            <div>
            <h1>Parent class</h1>
        {/* and conditional format */}
            {/*this.state.show && <Child/>*/} 
            {/* ternary conditional  format */}
            {this.state.show ? <Child/> : null}
            <button onClick={this.buttonHandler}>Click Here</button>
            </div>
         );
    }
}

class Child extends Component{
    constructor(props){
        super(props)
    }

    componentWillUnmount(){
        console.warn('Child Component Unmounted.')
    }
 
    componentDidMount(){
        console.warn('Child component mounted')
    }

    render(){
        return (
            <div>
            <h1>Child class</h1>
             
            </div>
        )
    }
}
 
export default Parent;