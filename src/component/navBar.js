import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.JPG';

class NavBar extends Component {
    render(){
        const styleNav = {
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            background: '#746EA9',
            paddingTop: '0 !important',
            paddingBottom: '0 !important',
            marginBottom : '0px'
        }
        return(
            <nav style = {styleNav} class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                    <img src = {Logo}/>
                    </div>
                   
                    <ul class="nav navbar-nav navbar-right">
                    <li><Link to="/signup" ><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                    <li><a href="#" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-log-in" ></span> Login</a></li>
                    </ul>
                    <div class="modal fade" id="myModal" role="dialog">
                        <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Login</h4>
                            </div>
                            <br/>
                            <div class="form-group">
                                <label for="inputdefault">&nbsp;&nbsp;&nbsp;&nbsp;User Name</label>
                                <input class="form-control" id="inputdefault" type="text"/>
                            </div>
                            <br/>
                            <div class="form-group">
                                <label for="inputdefault">&nbsp;&nbsp;&nbsp;&nbsp;Password</label>
                                <input class="form-control" id="inputdefault" type="text"/>
                            </div>
                            <div class="modal-footer">
                            <Link to = "" onClick = {(e) => this.submitReview(e)}type="button" class="btn btn-default" data-dismiss="modal">Submit</Link>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
export default NavBar;
