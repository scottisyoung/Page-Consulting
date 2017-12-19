import React, {Component} from "react";
import Image from "../../Images/White Background.jpg";
import "./about.css";

class About extends Component {
    render() {
        return (

            <div>
                <div>
                    <img className="background" src={Image} alt="background"/>
                </div>
            </div>

        )
    }
}

export default About;