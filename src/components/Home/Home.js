import React, {Component} from "react";
import Image from "../../Images/White Background.jpg";
import "./home.css";
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <img className="background" src={Image} alt="background"/>

                    <div className="titleParent">
                        <div className="title">PAGE CONSULTING</div>

                        <div className="subtitle">Organized Solutions for the Home and Office</div>

                        <div className="introParagraph">We are experts in organization. Our technical and 
                             turnkey solutions combined with our extensive knowledge of spacial awareness make our company
                            the best partner to support all of your organizational needs.</div>

                        <div className="button1">LEARN MORE</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;