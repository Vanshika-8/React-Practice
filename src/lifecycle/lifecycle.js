import React, { Component } from 'react';
/* LifeCycle methods
1.Mounting- first in the lifecycle method the render and constructor are mounted.
          --counstructor is only used for initializing local state and bind event handler methods.
           -when the component is mounted the constructor runs first and then the render and the componentDidMount()
        -First the render will proceed and show the rendered part 
        -the in the constructor the initial state is mounted, which will be furthur used.
        -ComponentDidMount()- When the render and component are mounted , then we put all the neccessary logic which we want to execute on the initial load. THE ComponentDidMOunt() is a lifecycle method.
2.Updating- When updating , we can update only in two ways , first is the setState and othere is a forceUpdate()
        --this updation occurs for the inital rendered part.
          -Note- we cannot use setState in the constructor as the constructor is not mounted until it is re-rendered. 
          -componentDidUpdate()is used for updating.
3.Unmounting-in this phase the the old component will be removed from the dom and the new componet will be inserted in the dom. ComponentWillUnMount-we can use it for cleaning up the old components   
*/
class LifecyclePractice extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count:0
         }
         //we cannot use setstate in a constructor because the constructor is not mounted until it is rendered.
        //  this.setState({
        //      count:1
        //  })
       
    }
    practice=()=>{
        this.setState({count:1})
        
    }
   componentDidMount(){
       this.setState({
           count:2
       })
       console.log('component mounted')
   }
    componentWillUnmount(){
        console.log('Unmounting component')
    }
    render() { 

        return ( 
            <div>
            {console.log('compoent render')}
            <h1>Practice LifeCycle</h1>
            <h3 >{this.state.count}</h3>
          <button onClick={this.practice}>buttton</button>  
          
            </div>
         );
    }
}
 
export default LifecyclePractice;