import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email     : '',
      password  : '',
      count: 0,
      elapsed: 0,
      start:new Date(),
    }
   
  }
  render(){
    return(
      <div>
        Hello
      </div>
    )
  }
}

export default SignIn;