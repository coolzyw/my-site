import React, {Component} from "react";
import './header.css';

export default class Header extends Component {
    render() {
        return(
            <div className="header-bar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#internships">Internships</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#CV">CV</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

        );
    }
}