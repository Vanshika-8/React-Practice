import React, { Component } from 'react';
import './App.css';
import { person as Person} from './Person/Person'; //named import
//import Person from './Person/Person'; //default import
import Forms from './forms/Forms';


class App extends Component {
   constructor(props){
   super()
    this.state={
      persons:[
        {name:'vans' , age:22},
        {name:'Vaibhav' , age:21},
        {name:'Vansh' , age:19}
      ],
      otherState:'some other state'
    }
    //telling the function handlevideos that the this keyword if used within the function will now point to the class object. 
    this.handleVideos=this.handleVideos.bind(this)
 }
 //these are class properties version to use state
  // state={
  //   persons:[
  //     {name:'Vanshika' , age:22},
  //     {name:'Vaibhav' , age:21},
  //     {name:'Vansh' , age:19}
  //   ],
  //   otherState:'some other state'
  // }
  switchNameHandler=()=>{
    this.setState({
      persons:[
        {name:'Vanshi' , age:22},
        {name:'Vaibhav' , age:21},
        {name:'Vansh' , age:15}
      ]
    })
  }
   
renderTrialHandler=()=>{
  this.setState({
 otherState:'New values'
  })
}


handleVideos(){
  console.log(this)
}

handleNewVideos(){
  //on the onclick event the function is pointing to the objetcs in the class by using the arrow function.
  console.log(this)
}

  render() 
  {
    
    return (
      <div className="App">
     
      <Forms/>
      {/* This is an inline css block */}
      {/*  <h1 style={{fontWeight:'bold'}}>Hi I am React</h1> 
      <div onClick={this.handleVideos}>Handle Videos</div>
      <div onClick={()=>this.handleNewVideos()}>Handle</div>
      <h1 className="title">{this.state.otherState}</h1>
      <div onClick={this.renderTrialHandler}>Update Other State</div>
      <button onClick={this.switchNameHandler}>Switch Names</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies:Dancing </Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>*/}
     
      </div>
    );
  }
}

export default App;
