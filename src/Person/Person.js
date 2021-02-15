import React from 'react';


export const person=(props)=>{
    console.log(this)
    return(
    <div>
    <p>I am {props.name} , whose age is {props.age}</p>
    <p>{props.children}</p>
    </div>
 )
}

