import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Redirect from 'react-router-dom/Redirect';
import NavBar from './navBar';
import MidSection from './midSection';
import back from './meeting.jpg';
import Footer from './footer';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
          fname       : '',
          lname       : '',
          email       : '',
          passwordOne : '',
          passwordTwo : '',
          userType : 'jobSeeker'
        }
    }

    setType(e,userType){
      this.setState({
        userType : userType
      })
    }
    render(){
      let styleDiv = {
          float: 'right',
          marginTop: '10px',
          marginLeft: '20px',
          padding: '10px',
      }
      let userType = null;
      if(this.state.userType == 'jobSeeker'){
        userType = (
          <section id="SECTION_1">
            <div id="DIV_2">
              <div id="DIV_3">
                <div id="DIV_4">
                  <div id="DIV_5">
                    <h2 id="H2_6">
                      <span id="SPAN_7">Job Seeker SignUp</span>
                    </h2>
                    <form id="FORM_9" method="get" action="#">
                      <div id="DIV_10">
                        <div id="DIV_11">
                          <div id="DIV_12">
                            <div id="DIV_13">
                              
                              <label for="profession" id="LABEL_14">
                                First Name
                              </label>
                              <input type="text" id="INPUT_15" name="profession" placeholder="First Name" />
                            </div>
                          </div>
                          <div id="DIV_12">
                            <div id="DIV_13">
                              
                              <label for="profession" id="LABEL_14">
                                Last Name
                              </label>
                              <input type="text" id="INPUT_15" name="profession" placeholder="Last Name" />
                            </div>
                          </div>
                          <div id="DIV_12">
                            <div id="DIV_13">
                              
                              <label for="profession" id="LABEL_14">
                                Email
                              </label>
                              <input type="text" id="INPUT_15" name="profession" placeholder="Email" />
                            </div>
                          </div>
                          <div id="DIV_12">
                            <div id="DIV_13">
                              
                              <label for="profession" id="LABEL_14">
                                Password
                              </label>
                              <input type="text" id="INPUT_15" name="profession" placeholder="Password" />
                            </div>
                          </div>
                          <br/>
                          <div style = {{marginTop : '33px'}} id="DIV_20">
                          <Link to = "" onClick = {(e) => this.submitReview(e)}type="button" class="btn btn-default" data-dismiss="modal">Submit</Link>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      }else{
        userType = (
          <section id="SECTION_1">
              <div id="DIV_2">
                <div id="DIV_3">
                  <div id="DIV_4">
                    <div id="DIV_5" style = {{height : '400px'}}>
                      <h2 id="H2_6">
                        <span id="SPAN_7">Recruiter SignUp</span>
                      </h2>
                      <form id="FORM_9" method="get" action="#">
                        <div id="DIV_10">
                          <div id="DIV_11">
                            <div id="DIV_12">
                              <div id="DIV_13">
                                
                                <label for="profession" id="LABEL_14">
                                  First Name
                                </label>
                                <input type="text" id="INPUT_15" name="profession" placeholder="First Name" />
                              </div>
                            </div>
                            <div id="DIV_12">
                              <div id="DIV_13">
                                
                                <label for="profession" id="LABEL_14">
                                  Last Name
                                </label>
                                <input type="text" id="INPUT_15" name="profession" placeholder="Last Name" />
                              </div>
                            </div>
                            <div id="DIV_12">
                              <div id="DIV_13">
                                
                                <label for="profession" id="LABEL_14">
                                  Email
                                </label>
                                <input type="text" id="INPUT_15" name="profession" placeholder="Email" />
                              </div>
                            </div>
                            <div id="DIV_12">
                              <div id="DIV_13">
                                
                                <label for="profession" id="LABEL_14">
                                  Password
                                </label>
                                <input type="text" id="INPUT_15" name="profession" placeholder="Password" />
                              </div>
                            </div>
                            <div id="DIV_12">
                              <div id="DIV_13">
                                
                                <label for="profession" id="LABEL_14">
                                  Company
                                </label>
                                <input type="text" id="INPUT_15" name="profession" placeholder="Company" />
                              </div>
                            </div>
                            <div id="DIV_12">
                              <div id="DIV_13">
                                
                                <label for="profession" id="LABEL_14">
                                  Job
                                </label>
                                <input type="text" id="INPUT_15" name="profession" placeholder="Job" />
                              </div>
                            </div>
                            <br/>
                            <div style = {{marginTop : '33px'}} id="DIV_20">
                            <Link to = "" onClick = {(e) => this.submitReview(e)}type="button" class="btn btn-default" data-dismiss="modal">Submit</Link>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        )
      }
      return(
        <div >
            <NavBar/>
            <div>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button onClick = {(e) => this.setType(e,'recruiter')} type="button" className="btn btn-secondary">Recruiter</button>
                    <button onClick = {(e) => this.setType(e,'jobSeeker')} type="button" className="btn btn-secondary">Job Seeker</button>
                </div>
            </div>
            {userType}
            <Footer/>
        </div>
      )
    }
}

export default (SignUp);