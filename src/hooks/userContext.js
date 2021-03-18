import React from 'react';
//creating a userContext , it is a context object, when react renders the component that subscribes to this context obj , it will read to the current value from the closest matching provider in the tree.
const UserContext=React.createContext()
//PROVIDER AND CONSUMER

const UserProvider=UserContext.Provider
const UserConsumer=UserContext.Consumer

export {UserProvider,UserConsumer}
export default UserContext