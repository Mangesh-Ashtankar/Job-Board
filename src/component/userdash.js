import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import NavBar from './navBar';
import Footer from './footer';
import MidSection from './midSection';


class userHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
      }

    render(){
        return(
            <div>
                <NavBar/>
                <MidSection/>
                <Footer/>
            </div>
        );
    }
}
export default userHome;
