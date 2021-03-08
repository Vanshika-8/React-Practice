import React, { useState } from 'react';



function Hooks(){
    //here we are using destructuring , count is a state variable and setCount is a method which is defined for changes in the count , useState is a hook or a function which has a initial value of the count
 //here the state variable is setCount to zero, and the method setCount is capable of chnaging the count variable
 //then on the buttton click the function call is made, setCount sets the count value to plus one
 //count is getting rendered
//  const [count,setCount]=useState(0)

//     return (
//         <div>
//         <button onClick={()=>setCount(count+1)}>Click{count}</button>
//         </div>
//     )




//use state with previous state
const initial=0
const[count,setCount]=useState(initial)

//previous state value , here it passs the new value in the function it is setting the value, previous state is used to calculate the new state
const increment5=()=>{
for(let i=0;i<5;i++){
    setCount(prevCount=>prevCount+1)
}
}

return(
    <div>
    Count:{count}
    <button onClick={()=>setCount(initial)}>Reset</button>
    <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
    <button onClick={()=>setCount(prevCount=>prevCount-1)}>decrement</button>
    <button onClick={increment5}>Increment 5</button>
    </div>
)

}

export default Hooks;