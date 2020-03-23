import React, {Component} from "react";
import './education.css';

export default class Education extends Component {
    render() {
        return(
            <div id="education" className="section">
                <div className="section-title"> Education </div>
                <div>
                    <div className="section-body">
                        <div className="each-section">
                            <img className="logo" src={ require('../NU.png') } />
                            <ul className="text">
                                <li className="intro"> I am currently pursuing a Master degree of Computer Science. </li>
                                <li className="intro"> I've chosen the system track. Some relevant courses are: Scalable Software, Operating Systems,
                                    Computer Networking, Distributed System, Kernel Development.
                                </li>
                            </ul>
                        </div>
                        <h4 className="timestamp"> Sep 2019-Now </h4>

                        <div className="each-section">
                            <img className="logo" src={ require('../umich.png') } />
                            <ul className="text">
                                <li className="intro"> I have received my Bachelor of Computer Science degree at University of Michigan, Ann Arbor. </li>
                                <li className="intro"> I did a summer CS research project with Professor Chowdhury, where I built a dashboard for a distributed system.</li>
                            </ul>
                        </div>
                        <h4 className="timestamp"> &nbsp; &nbsp;2017-2019 </h4>

                        <div className="each-section">
                            <img className="logo" src={ require('../sjtu.png') } />
                            <ul className="text">
                                <li className="intro"> I have received my Bachelor of ECE degree at Shanghai Jiao Tong University. </li>
                                <li className="intro"> I participated the Dual Degree program with University of Michigan, Ann Arbor (2+2). </li>
                            </ul>
                        </div>
                        <h4 className="timestamp">&nbsp; &nbsp; 2015-2017 </h4>

                    </div>
                </div>
            </div>
        );
    }
}