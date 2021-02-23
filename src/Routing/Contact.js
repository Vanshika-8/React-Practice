import React, { Component, useState } from 'react';
import { Redirect } from 'react-router-dom';

export const Contact = (props) => {
    console.log(props, 'contact')
    const redirectHandler = () => {
        props.history.push('/ContactName')
    }
    //in the functional component we use useState hook for changing states we set the show false and then on the button click it is true and it redirects to the contactname page as we create a function and used the history property . We are redirecting using the push function which we get as props from react-router-dom.
    //second way-we used the condtional rendering adn used the redirect component for redirecting it to the about page.
     const [show,setShow]=useState(false)
    return (
        <div>
            <h1>Contact Page</h1>
            <button onClick={redirectHandler}>Go TO Contact Name Page</button>
            <button onClick={()=>setShow(true)}>Handle state</button>
            {show ? <Redirect to="/About"/> : null}
        </div>
    )
}

