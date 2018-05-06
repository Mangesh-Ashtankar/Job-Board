import React, {Component} from 'react';
import { Link } from 'react-router-dom';



class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
      }

    render(){
        return(
            <div>
               
<footer class="page-footer font-small unique-color-dark pt-0">

<div style={{backgroundColor:"#746EA9"}}>
    <div class="container">

        <div class="row py-4 d-flex align-items-center">


            <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                <h6 class="mb-0 white-text">Get connected with us on social networks!</h6>
            </div>

            <div class="col-md-6 col-lg-7 text-center text-md-right">

                <a class="fb-ic ml-0">
                    <i class="fa fa-facebook white-text mr-lg-4"> </i>
                </a>
     
                <a class="tw-ic">
                    <i class="fa fa-twitter white-text mr-lg-4"> </i>
                </a>
          
                <a class="gplus-ic">
                    <i class="fa fa-google-plus white-text mr-lg-4"> </i>
                </a>
  
                <a class="li-ic">
                    <i class="fa fa-linkedin white-text mr-lg-4"> </i>
                </a>

                <a class="ins-ic">
                    <i class="fa fa-instagram white-text mr-lg-4"> </i>
                </a>
            </div>


        </div>

    </div>
</div>

<div class="container mt-5 mb-4 text-center text-md-left">
    <div class="row mt-3">

        <div class="col-md-3 col-lg-4 col-xl-3 mb-4">
            <h6 class="text-uppercase font-weight-bold">
                <strong>Company name</strong>
            </h6>
            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width : '60px'}}/>
            <p>Job Board is a website that deals specifically with employment or careers.Our sites offer employer reviews, career and job-search advice, and describe different job descriptions or employers</p>
        </div>

        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold">
                <strong>About US</strong>
            </h6>
            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width : '60px'}}/>
            <p>
                <a href="https://www.linkedin.com/in/raghavanandan/">Raghav Anandan</a>
            </p>
            <p>
                <a href="https://www.linkedin.com/in/ajay-chauhan/">Ajay Chauhan</a>
            </p>
            <p>
                <a href="https://www.linkedin.com/in/mangesh-ashtankar/">Mangesh Astankar</a>
            </p>
        </div>

        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 class="text-uppercase font-weight-bold">
                <strong>Useful links</strong>
            </h6>
            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"style={{width : '60px'}}/>
            <p>
                <a href="#!">Your Account</a>
            </p>
            <p>
                <a href="#!">Become an Affiliate</a>
            </p>
            <p>
                <a href="#!">Shipping Rates</a>
            </p>
            <p>
                <a href="#!">Help</a>
            </p>
        </div>

        <div class="col-md-4 col-lg-3 col-xl-3">
            <h6 class="text-uppercase font-weight-bold">
                <strong>Contact</strong>
            </h6>
            <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width : '60px'}}/>
            <p>
                <i class="fa fa-home mr-3"></i> San Jose State University</p>
            <p>
                <i class="fa fa-envelope mr-3"></i>xyz@sjsu.edu</p>
            <p>
                <i class="fa fa-phone mr-3"></i> + 01 234 567 88</p>
            <p>
                <i class="fa fa-print mr-3"></i> + 01 234 567 89</p>
        </div>


    </div>
</div>
<br/>
<div class="footer-copyright py-3 text-center">
    © 2018 Copyright:
    <a href="https://mdbootstrap.com/material-design-for-bootstrap/">
        <strong> Job Board.com</strong>
    </a>
</div>


</footer>

                  
            </div>
        );
    }
}
export default Footer;
