import React, { useEffect, useState } from 'react';

//the effect hook lets us perform side effects in functional components
function UseEffect(){
    const [count,setCount]=useState(0)
    const [name,setName]=useState('')
    //useEffect => its a function , we are calling it , we are passing a parameter, it will update the document
    //Similar to componentDidMount and componentDidUpdate
    //we are requesting react , that re-render the component every time after it is executed.
    useEffect(()=>{
        console.log('Updating the count')
        //updating the document.title using the browser api
        //for conditionally executing an effect we are passing a second paramter , we are passing an array/props/state
        //if and onlt if they are changing this useeffect will be executed . 
        document.title=`You clicked ${count} times`
    },[count])
    return (
        <div>
        <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
        <button onClick={()=>setCount(count+1)}>Click{count} times</button>
        </div>
    )
}

export default UseEffect;