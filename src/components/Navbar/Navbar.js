import React, {Component} from "react";
import '../Navbar/navbar.css';
import Image from "../../Images/imageedit_18_2815412808.png";
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                
                <div className="NavParent">

                    <Link className="Link" to='/'><img className="logo" src={Image} alt="logo"/></Link>
                    <div className="logo2"> &nbsp;&#9884;&nbsp;</div>
                    
                    <div className="Nav"><Link className="Link" to='/about'>ABOUT</Link></div>
                    <div className="Nav"><Link className="Link" to='/blog'>BLOG</Link></div>   
                    <div className="Nav"><Link className="Link" to='/faq'>FAQ</Link></div> 
                    <div className="Nav"><Link className="Link" to='/contact'>CONTACT</Link></div>
                       
                    <div className="SocialMedia1"> &nbsp;&#9884;&nbsp;</div>
                    <div className="SocialMedia2">Follow Us</div>
                    
                    <div className="SocialMediaParent">
                        <ul className="SocialMediaParent">
                            <div><li><a href="https://www.facebook.com" className="Icons"><i className="fa fa-facebook"></i></a></li></div>
                            <div><li><a href="https://www.instagram.com" className="Icons"><i className="fa fa-instagram"></i></a></li></div>
                            <div><li><a href="https://www.pinterest.com" className="Icons"><i className="fa fa-pinterest"></i></a></li></div>
                            <div><li><a href="https://www.yelp.com" className="Icons"><i className="fa fa-yelp"></i></a></li></div>
                        </ul>
                    </div>

                    <div className="RightsParent">
                        <div className="Rights">&#169;&nbsp;2017&nbsp;&nbsp;Page Consulting&nbsp;&nbsp;</div>
                        <div className="Rights2">All Rights Reserved</div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Navbar;