import React, { Component } from 'react';

// a default class 
export default class Forms extends Component {
    constructor(props) {
        super(props)
        //Created a constructor with props parameter , after that gave a super class to use those props in the class forms
        this.state = {
            // form:{
            //     title:'',
            //     body:''
            // }
            title: '',
            body: '',
            errorMessage: false,
            successMessage: true
        }
    }
    //    handleChange=(e)=>{
    //         e.preventDefault()
    //         const name=e.target.name
    //         const value=e.target.value
    //         this.setState({form:{
    //             ...this.state.from,
    //             [name]:value
    //           }  })
    //     }

    //     onClickHandler=(e)=>{
    //         e.preventDefault()
    //         console.log(this.state.form)

    //     }
    //Your state is an object value thats why we are able to access it with the bracket notation.
    /* 
    let num{
        num1:1,
        num2:2
    }
    num.num2=5 //dot notation for assigning values.
    num['num2']=10 //bracket notation for assigning values
    
    */
    //we are getting an input event on the onchange event 
    handleChange = (e) => {
        console.log(e, 'Input Change for title')
        //Assigning a name variable for the target input attribute name
        const name = e.target.name
        //Assigning the value for every input attribute
        const value = e.target.value
        this.setState({
            //we are using destructuring and assigning values 
            [name]: value
        },

            //   ()=>{console.log('print state' ,this.state.title,this.state.body)}
        )
        console.log('print values', this.state.title, this.state.body)
    }

    // validateFrom = () => {
    //     let errorMessage = ""
    // }

    printMessages=()=>{
        if(this.state.successMessage){
            return <h2>Add post</h2>
        }else{
            return <h2>Error</h2>
        }
    }

    render() {


        return (
            <div>
                <h2>Form</h2>
                <form >
                    <label>
                        Title:
            { /*<input type="text" value={this.state.form.title} onChange={this.handleChange} />*/}
                        <input type="text" name='title' value={this.state.title} onChange={this.handleChange} />
                        { /*{this.state.successMessage && this.state.title} ? (<div>{this.state.successMessage}</div>) : null*/}


                    </label>

                    <label>
                        Body:
           { /* <input type="text" value={this.state.form.body} onChange={this.handleChange} /> />*/}
                        <input type="text" name='body' value={this.state.body} onChange={this.handleChange} />
                    </label>
                    <button onClick={this.onClickHandler}>Submit</button>

                </form>

                <div>
        {/*  Here the boolean value is true and the expresssion is printing
              When the boolean value is false react is ignoring the condtion */}
                    <span >Success Message</span>
                    {this.state.successMessage && <span>Add post </span>}</div>
                <div>

                    <span>Error Message</span>
                    {this.state.errorMessage && <span>U have an error</span>}
                </div>
                 <div>{this.printMessages()}</div>
                </div>
        )
    }
}
