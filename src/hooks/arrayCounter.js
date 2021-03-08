import React, { useState } from 'react';

//hook usestate - with array 
//here we are using an array of objects 
//setter function does not automatically update or set.
//with use state the state can be a string ,obj and an array 
//the useState hook lets u have 2 elements, first is the current value of the state , second is the state setter function 
function ArrayHooks(){
   const [items,setItems]=useState([])
   const addItems=()=>{
    setItems([...items, {
        id:items.length,
        value:Math.floor(Math.random()*10)+1
    }])
   }
    return(
<div>
<button onClick={addItems}>Add a item</button>
<ul>
{items.map((item)=>
    <li key={item.id}>{item.value}</li>
)}
</ul>
</div>
    )
}

export default ArrayHooks