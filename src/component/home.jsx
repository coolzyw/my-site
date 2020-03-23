import React, {Component} from "react";
import './home.css';

export default class Home extends Component {
    render() {
        return(
            <div className="home">
                <div className="left-column">
                    <img className="image" src={ require('../profile.JPG') } />
                </div>


                <div className="words">
                    Hello, My Name is Yiwei Zhang! &#128521; I am pursuing a Master of Computer Science
                    degree at Northwestern University. <p>&nbsp;</p>

                    This personal site is created by myself using React.  It's pretty fun to do
                    self-learning of some popular tech stack! <p>&nbsp;</p>

                    &#x1F60D; Happening next: I will be interning at Facebook as a software engineer
                    for the 2020 summer!
                </div>

                <nav>
                    <ul className="link">
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
                    <ul className="contact-info">
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