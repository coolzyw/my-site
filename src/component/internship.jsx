import React, {Component} from "react";
import './internship.css';

export default class Internship extends Component {
    render() {
        return(
            <div id="internships" className="section">
                <div className="section-title"> Internships </div>
                <div className="section-body">
                    <div className="each-section">
                        <img className="logo" src={ require('../fb.png') } />
                        <ul className="text">
                            <li className="intro"> In progress ... </li>
                        </ul>
                    </div>
                    <h4 className="timestamp"> Summer 2020 </h4>

                    <div className="each-section">
                        <img className="logo" src={ require('../cisco.jpeg') } />
                        <ul className="text">
                            <li className="intro"> I worked on the developer team to build a search engine based on natural language processing. </li>
                            <li className="intro"> Standardized 100,000 training data and constructed a keyword dictionary for router products. </li>
                            <li className="intro"> Provided useful pretrained knowledge using PyTorch, which improved the classification accuracy of 500 classes to 90%. </li>
                        </ul>
                    </div>
                    <h4 className="timestamp"> Summer 2019 </h4>

                    <div className="each-section">
                        <img className="logo" src={ require('../umich.png') } />
                        <ul className="text">
                            <li className="intro"> Designed a dashboard displaying metrics of the distributed system, which was a simulation of infinite memory, supervised by Professor Mosharaf Chowdhury.  </li>
                            <li className="intro"> Collected data about machines’ latency, throughput, memory usage and connections using C++ socket. </li>
                            <li className="intro"> Made the product more user-friendly by writing shell scripts to start the GUI automatically. </li>
                        </ul>
                    </div>
                    <h4 className="timestamp"> Summer 2018 </h4>
                </div>
            </div>
        );
    }
}