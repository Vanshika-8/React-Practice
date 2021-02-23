import React, { Component } from 'react';
import { render } from 'react-dom';

class FragmentImplementation extends Component {
    render() { 
        return (
          <React.Fragment>
          <td>Hello</td>
          <td>World</td>
          </React.Fragment>
          );
    }
}
 
export default FragmentImplementation;

