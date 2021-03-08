import React,{useState} from 'react';
import HookMouse from './hookMouse';

function Mouse(){
    const [display,setDisplay]=useState(true)
    return (
<div>
<button onClick={()=>setDisplay(!display)}>Toggle</button>
{display && <HookMouse/>}
</div>
    )
}


export default Mouse;