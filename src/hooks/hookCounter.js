import React, { useState } from 'react';

//usestate with objects
//the spread operator is used to keep the firstname and last name , making the replica of the name property 
//usestate wont update it automatically , we need to update it , so we are using spread operator for that

function HookCounter(){
    const[name,setName]=useState({firstName:'' , lastName:''})
    return(
<div>
<React.Fragment>

<input type="text" value={name.firstName}  onChange={e=>setName({...name,firstName:e.target.value})}/>
<input type="text" value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}/>
<h2>First Name:{name.firstName}</h2>
<h2>Last Name:{name.lastName}</h2>
<h2>{JSON.stringify(name)}</h2>
</React.Fragment>
</div>
    )
}

export default HookCounter