import React, {Component} from "react";
import './contact.css';

export default class Contact extends Component {
    render() {
        return(
            <div id="contact" className="contact">
                <h3 className="contact-title"> Feel free to drop me a message if you would like to stay connected! &#128522;</h3>
                <nav>
                    <ul className="link-contact">
                        <li className="item"><a href="https://github.com/coolzyw" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github" style={{color:"white"}}></i>
                        </a></li>
                        <li className="item"><a href="https://www.linkedin.com/in/dhruv-b-545b52a9/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-linkedin" style={{color:"white"}}></i>
                        </a></li>
                        <li className="item"><a href="https://www.instagram.com/yiweiiiiiiiii/" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-instagram" style={{color:"white"}}></i>
                        </a></li>
                    </ul>
                </nav>
                <nav>
                    <ul className="contact-info-end">
                        <li className="contact-info-item">
                            Tel: 734-882-7059
                        </li>
                        <li className="contact-info-item">
                            Email: yiweizhang2020@u.northwestern.edu
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}