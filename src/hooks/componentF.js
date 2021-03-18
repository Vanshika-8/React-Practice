import React from 'react';
import { UserConsumer } from './userContext';
//consuming the value
function ComponentF(){
    return (
       <UserConsumer>
       {
(username)=>
{
    return <div>Hello {username}</div>
}
       }
       </UserConsumer>
    )
}

export default ComponentF;