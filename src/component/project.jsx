import React, {Component} from "react";
import './project.css';
import video from '../GPU_driver.mov'
import graphics1 from '../graphics1.mov'
import graphics2 from '../graphics2.mov'

export default class Project extends Component {
    render() {
        return(
            <div id="projects" className="section-project">
                <div className="section-title"> &#128071; Here are some fun projects I did! </div>

                <button className="section-subtitle" > System & Infrastructure </button>
                <div className="each-section-project">
                    <h4 className="project-name"> A simple web client and web server on top of TCP </h4>
                    <ul className="text">
                        <li className="intro"> Build up a client by parsing HTTP request format, supporting redirection, and large web pages. </li>
                        <li className="intro"> Build up a server by constructing HTTP response continuously. </li>
                        <li className="intro"> Supported multi-connection server by using Unix select sys call. </li>
                    </ul>
                </div>

                <div className="each-section-project">
                    <h4 className="project-name"> A reliable streaming transport protocol on top of UDP </h4>
                    <ul className="text">
                        <li className="intro"> Supported large file transmission by breaking data into chunks. </li>
                        <li className="intro"> Implemented packet reordering and corruption mechanism by using sequence number and checksum. </li>
                        <li className="intro"> Handled packet loss by using acknowledge and retransmission technique. </li>
                    </ul>
                </div>

                <div className="each-section-project">
                    <h4 className="project-name"> Network Routing </h4>
                    <ul className="text">
                        <li className="intro"> Implemented two mechanism (distance-vector and link-state) of routing algorithm in network. </li>
                        <li className="intro"> Handled the "count-to-infinity" problem by including a path of each node in memory. </li>
                        <li className="intro"> Removed outdated message in network transmission by using sequence number. </li>
                        <li className="intro"> Identified a bug in the public test cases. </li>
                    </ul>
                    <div className="demo-pic">
                        <img className="each-demo-pic" src={ require('../Figure_1.png') } />
                        <img className="each-demo-pic" src={ require('../Figure_2.png') } />
                        <img className="each-demo-pic" src={ require('../Figure_3.png') } />
                    </div>
                </div>

                <br/>
                <br/>
                <div className="each-section-project">
                    <h4 className="project-name"> Device driver initialization and test </h4>
                    <ul className="text">
                        <li className="intro"> Initialized a GPU device in kernel booting process. </li>
                        <li className="intro"> Configured the GPU to switch between text mode and 2D graphics mode, and designed a booting animated logo. </li>
                    </ul>
                </div>
                <video className="video" controls >
                    <source src={video} type="video/mp4"/>
                </video>

                <div className="each-section-project">
                    <h4 className="project-name"> Scheduling and discrete event simulation </h4>
                    <ul className="text">
                        <li className="intro"> Implemented 5 types of scheduling mechanism: non-preemptive random, non-preemptive shortest job first,
                            preemptive shortest remaining time first, preemptve round robin, preemptive lottery scheduling.
                        </li>
                        <li className="intro"> Evaluated the performance of each scheduler on different workloads. </li>
                    </ul>
                </div>

                <br/>
                <br/>


                <button className="section-subtitle"> UI & Graphics </button>
                <div className="each-section-project">
                    <h4 className="project-name"> 3D world camera exploration
                        <a className="code" target="_blank" href="https://github.com/coolzyw/3D-world-camera-exploration">  &#128073; code </a>
                    </h4>
                    <ul className="text">
                        <li className="intro"> Create a large, animated 3D world that user can explore and view with a movable 3D camera. </li>
                        <li className="intro"> Implemented user-controlled spinning speed, object moving and mouse dragging features. </li>
                    </ul>
                </div>
                <video className="video" controls >
                    <source src={graphics1} type="video/mp4"/>
                </video>

                <br/>
                <br/>
                <div className="each-section-project">
                    <h4 className="project-name"> A Realistic Shading World
                        <a className="code" target="_blank" href="https://github.com/coolzyw/Realistic-Shading-3D-World">  &#128073; code </a>
                    </h4>
                    <ul className="text">
                        <li className="intro"> Created realistic interactive lighting, shading and materials in WebGL in a "virtual world".  </li>
                        <li className="intro"> Implemented two independent user-adjustable light sources, each with different position. </li>
                        <li className="intro"> Added user-control animation and camera navigation. </li>
                    </ul>
                </div>
                <video className="video" controls >
                    <source src={graphics2} type="video/mp4"/>
                </video>


                <br/>
                <br/>
                <div className="each-section-project">
                    <h4 className="project-name"> Time management UI interface
                        <a className="code" target="_blank" href="https://github.com/EECS330-HCI-2019-YJZZ/2019-HCI-Project">  &#128073; code </a>
                    </h4>
                    <ul className="text">
                        <li className="intro"> Implemented a IOS interface to help users to form a better habit and stay punctual for their events. </li>
                        <li className="intro"> Supported intelligence planning and connected user to social media by embedding google map and twitter. </li>
                    </ul>

                    <div className="demo-pic">
                        <img className="each-demo-pic-ui" src={ require('../UI_1.png') } />
                        <img className="each-demo-pic-ui" src={ require('../UI_2.png') } />
                    </div>

                </div>


                <button className="section-subtitle"> Web </button>

                <button className="section-subtitle"> AI & ML  </button>
            </div>
        );
    }

}