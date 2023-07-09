import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from './image';
import Certificate from './certificate2.png'
import DarkModeToggle from "react-dark-mode-toggle";
import ProfessionalSkill from './ProfessionalSkill';

function Home() {
    const [isDarkMode,setIsDarkMode]=useState(false)

    return (
        <div className={isDarkMode?"body-dark":"body"}>
            
        <div className={"cover"}>
                    <div className={isDarkMode?'mydark sticky-top':"myColor sticky-top"}>
                        <ul className={isDarkMode?'nav myNav-dark':'nav myNav'} id='navigation'>
                            <li className='nav-item'><Link to='/' className='nav-link active navbar-text link'>Home</Link></li>
                            <li className='nav-item'><a href='https://github.com/Mr-hollowman' className='nav-link active navbar-text link'>Project</a></li>
                            <li className='nav-item'><a href='#footer' className='nav-link active navbar-text link'>Contact</a></li>
                            <li className='nav-item nav-link'><DarkModeToggle onChange={setIsDarkMode} 
                                                checked={isDarkMode}
                                                size={30}/></li>
                            {/* <li className='nav-item nav-link'><button onClick={()=>setTheme(!theme)}>Theme</button></li> */}
                </ul>
                    </div>
            <div className={isDarkMode?"cover text-center mydark":'myColor cover text-center'} id='heading'>
                <h1 className='myName'>Hai<span style={{'fontSize':30}}>&#128075;</span>, This is Selvaguru</h1>
                <p>Software Developer </p> 
            </div>
        <div className={isDarkMode?'wave-bg-dark':'wave-bg'}></div>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-5 mb-5'>
                        <Image />
                    </div>
                    <div className='col-sm-7 mt-5'>
                        <h2 className='myskills'>Career Objective</h2>
                        <br></br>
                        <p className='skills'>Looking for an entry-level position as a Software Engineer in a dynamic firm that values my analytical and technical skills and provides scope for updating my knowledge, I seek a company that will help me contribute to its development while concurrently aiding my personal growth.</p>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-sm-6'>
                        <h2 className='myskills'>Technical Skills</h2>
                        <br />
                        <ul className='skills'>
                            <li>Front end Languages - HTML, CSS, JavaScript, ReactJs</li>
                            <li>Back end Languages - Python, NodeJS</li>
                            <li>Data Base - MySql, Firebase</li>
                        </ul>
                    </div>
                    <div className='col-sm-6'>
                        <h2 className='myskills'>Internship Certificate</h2>
                        <br />
                        <ul className='skills'>
                            <li>I done ReactJS intern in Azure soft tech solutions</li>
                            <li>I done Python intern in WingWizard</li>
                        </ul>
                    </div>
                    <br />
                    <div className='col-sm-12'>
                        <h2 className='myskills'>Professional Skills</h2><br/>
                            <ProfessionalSkill />
                    </div>
                    <div className='col-sm-12 mt-5'>
                         <h2 className='myskill mt-5'>Certificates</h2><br></br>
                         <img className='certificate' src={Certificate} alt='certificate'/>
                    </div>
                    <div className='col-sm-12 top'>
                        <h2 className='myskills'>Projects</h2>
                        <br />
                        <table className={isDarkMode?'table table-dark table-striped':'table table-light table-striped'}>
                            <thead>
                                <tr>
                                    <th>Project domain</th>
                                    <th>Programming languages</th>
                                    <th>Git link</th>
                                    <th>Project link</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Fullstack web Development</td>
                                    <td>HTML, CSS, NodeJS, ReactJS</td>
                                    <td><a href={'https://github.com/Mr-hollowman/project'}>Music player</a></td>
                                    <td><a href={'https://mr-hollowman.github.io/project'}>Live run</a></td>
                                </tr>
                                <tr>
                                    <td>web Development</td>
                                    <td>HTML, CSS, NodeJS, ReactJS</td>
                                    <td><a href={'https://github.com/Mr-hollowman/pagination'}>Simple Pagination</a></td>
                                    <td><a href={'https://codesandbox.io/s/github/Mr-hollowman/pagination'}>Live run</a></td>
                                </tr>
                                <tr>
                                    <td>web Development</td>
                                    <td>HTML, CSS, NodeJS, ReactJS</td>
                                    <td><a href={'www.github.com/Mr-Hollowman'}>My resume</a></td>
                                    <td><a href='https://mr-hollowman.github.io/Resume'>Live run</a></td>
                                </tr>
                                <tr>
                                    <td>web Development</td>
                                    <td>HTML, CSS, NodeJS, ReactJS</td>
                                    <td><a href={'https://github.com/Mr-hollowman/task-management'}>Task-management</a></td>
                                    <td><a href='https://selva-f289a.web.app/login'>Live run</a></td>
                                </tr>
                                <tr>
                                    <td>web Development</td>
                                    <td>HTML, CSS, NodeJS, ReactJS</td>
                                    <td><a href={'https://github.com/Mr-hollowman/firstBlog'}>Simple Blog Website</a></td>
                                    <td><a href='https://mr-hollowman.github.io/firstBlog/'>Live run</a></td>
                                </tr>
                                <tr>
                                    <td>Fullstack web Development</td>
                                    <td>HTML, CSS, NodeJS, ReactJS</td>
                                    <td><a href={'https://github.com/Mr-hollowman/project-management'}>Project-management</a></td>
                                    <td><a href='https://mr-hollowman.web.app/signup'>Live run</a></td>
                                </tr>
                                <tr>
                                    <td>Dev Challanges</td>
                                    <td>HTML, CSS, NodeJS, ReactJS</td>
                                    <td><a href={'https://github.com/Mr-hollowman/image-uploader'}>Image-Uploader</a></td>
                                    <td><a href='https://mr-hollowman.github.io/image-uploader/'>Live run</a></td>
                                </tr>
                                <tr>
                                    <td>Dev Challanges</td>
                                    <td>HTML, CSS, NodeJS, ReactJS</td>
                                    <td><a href={'https://github.com/Mr-hollowman/myunsplash.git'}>My unsplash</a></td>
                                    <td><a href='https://selva-unsplash.web.app/'>Live run</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='col-sm-12'>
                        <h2 className='myskills'>Educational Qualification</h2>
                        <br />
                        <table className={isDarkMode?'table table-dark table-striped':'table table-light table-striped'}>
                            <thead>
                                <tr>
                                    <th>Degree</th>
                                    <th>Institution</th>
                                    <th>Year Of Passing</th>
                                    <th>Persentage</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Master Of Computer Applications</td>
                                    <td>Kalasalingam Institute Of Research And Education</td>
                                    <td>2022</td>
                                    <td>87%</td>
                                </tr>
                                <tr>
                                    <td>B.A English</td>
                                    <td>Devanga Arts College</td>
                                    <td>2019</td>
                                    <td>49%</td>
                                </tr>
                                <tr>
                                    <td>SSC</td>
                                    <td>S.B.K Higher Secondary School</td>
                                    <td>2016</td>
                                    <td>67%</td>
                                </tr>
                                <tr>
                                    <td>SSLC</td>
                                    <td>S.B.K Higher Secondary School</td>
                                    <td>2014</td>
                                    <td>87%</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
            <div className={isDarkMode?"mycolor mydark footer ":'footer myColor text-center'} id='footer'>
                <ul className='nav justify-content-center'>
                    {/* <li className='nav-item'>
                        <a href='www.github.com/Mr-hollowman'
                        ><span className='tooltip'>Github</span><i className={isDarkMode? 'fa fa-github dark-git':'fa fa-github'}></i></a>
                    </li> */}
                    <li className='nav-item'>
                        <a href='https://www.instagram.com/mr.hollow_man_'
                        ><i className='fa fa-instagram'></i></a>
                    </li>
                    <li className='nav-item'>
                        <a href='https://www.linkedin.com/in/selva-guru-4b5797192'
                        ><i className='fa fa-linkedin'></i></a>
                    </li>
                    <li className='nav-item'>
                        <a href='https://twitter.com/MrHollowMan1'
                        ><i className='fa fa-twitter'></i></a>
                    </li>
                    <li className='nav-item'>
                        <a href='https://wa.me/918610268591'
                        ><i className='fa fa-whatsapp'></i></a>
                    </li>
                    <li className='nav-item'>
                        <a href='mailto:selvamani825@gmail.com'
                        ><i className="fa fa-envelope"></i></a>
                    </li>
                </ul>

            </div>
            <div className='text-center' style={{padding:"30px"}}>
                copywrite ©  selva 2022
            </div>
        </div>
        </div>
    );
}

export default Home;