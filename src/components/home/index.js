import React from 'react';
import './style.css';

function Home(props) {
    return (
        <div>
            <section className="home-section section">
                <div className="effect-wrap">
                    <div className="effect effect-1"></div>
                    <div className="effect effect-3"></div>
                    <div className="effect effect-4"></div>
                    <div className="effect effect-5">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="container">
                    <div className="row full-screen align-items-center">
                        <div className="home-text">
                            <p>Hello</p>
                            <h2>I'm Nguyen Sy</h2>
                            <h1>Web Designer & Developer </h1>
                            <a href="#about" className="btn-1 outer-shadow ml-10">More About Me</a>
                            <a href="#resume" className="btn-1 outer-shadow">Resume</a>
                        </div>
                        <div className="home-img">
                            <div className="img-box">
                                <img className="outer-shadow" src="https://scontent.fdad3-2.fna.fbcdn.net/v/t1.0-9/57485868_1103842489798766_7348565099289772032_n.jpg?_nc_cat=101&ccb=2&_nc_sid=8bfeb9&_nc_ohc=d3wJhILmmWoAX_HOyFT&_nc_ht=scontent.fdad3-2.fna&oh=30f5ad57b47a8fea6cdc448288d93bed&oe=60139DB1" alt="" />
                            </div>
                            <ul>
                                <li className="contact" id="con" >Full Name: Nguyen Trung Sy</li>
                                <li className="contact">Phone Number: 0905214885</li>
                                <li className="contact">Gmail: ntrungsy1807@gmail.com</li>
                            </ul>

                        </div>

                    </div>
                </div>
            </section>

            <section className="about-section section">
                <div className="container">
                    <div className="row"id="about">
                        <div className="section-title">
                            <h2 data-heading="Main Info">About me</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="about-img">
                            <div className="img-box">
                                <img className="outer-shadow" src="https://scontent.fdad3-2.fna.fbcdn.net/v/t1.0-9/57485868_1103842489798766_7348565099289772032_n.jpg?_nc_cat=101&ccb=2&_nc_sid=8bfeb9&_nc_ohc=d3wJhILmmWoAX_HOyFT&_nc_ht=scontent.fdad3-2.fna&oh=30f5ad57b47a8fea6cdc448288d93bed&oe=60139DB1" alt="" />
                            </div>
                            <div className="social-links">
                                <a className="outer-shadow" href="https://www.facebook.com/nguyen.trungsy.58/"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                <a className="outer-shadow" href="https://www.instagram.com/nguyensy.j81/"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                <a className="outer-shadow" href="https://www.youtube.com/channel/UCd5qdYuTg7ywOBfkD8nec8A"><i class="fa fa-youtube" aria-hidden="true"></i></a>
                                <a className="outer-shadow" href="https://github.com/kitasn"><i className="fa fa-github" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        <div className="about-info">
                            <p><span>Hi! My name's Sy. I'm a Web Developer & Designer</span> I live in Gia Lai city in the south of Vietnam. 
                            I have a big family with six people. I have two sisters and a brother. My sisters are older and my brother is younger than me. 
                            My father is a teacher at a secondary school. He has worked for 35 years in the field and he is my biggest role model in life. 
                            My mother is a housewife. She is nice and she is really good at cooking. I love my family so much</p>
                            <p>I’m a generous and easy-going person but when it comes to work I’m a competitive perfectionist. 
                            I’m also an optimistic and outgoing person so I have many friends and other social relationships. 
                            I enjoy reading, writing and doing math</p>
                            <a href="cv.pdf" className="outer-shadow btn-1 ml-10">Download CV</a>
                            <a href="cv.pdf" className="outer-shadow btn-1">Hire me</a>
                        </div>
                    </div>
                    <div className="row"id="resume">
                        <div className="about-tags">
                            <span className="tag-item outer-shadow active" data-target=".skills">Skills</span>
                            <span className="tag-item outer-shadow " data-target=".experience">Experience</span>
                            <span className="tag-item outer-shadow " data-target=".education">Education</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="skills tag-content active">
                            <div className="row">
                                <div className="skill-item">
                                    <p>Html</p>
                                    <div className="progress outer-shadow">
                                        <div className="progress-bar" style={{ width: 'calc(80% - 14px)' }}>
                                            <span>80%</span>
                                        </div>

                                    </div>
                                </div>
                                <div className="skill-item">
                                    <p>Css</p>
                                    <div className="progress outer-shadow">
                                        <div className="progress-bar" style={{ width: 'calc(45% - 14px)' }}>
                                            <span>45%</span>
                                        </div>

                                    </div>
                                </div>
                                <div className="skill-item">
                                    <p>Javascript</p>
                                    <div className="progress outer-shadow">
                                        <div className="progress-bar" style={{ width: 'calc(30% - 14px)' }}>
                                            <span>30%</span>
                                        </div>

                                    </div>
                                </div>
                                <div className="skill-item">
                                    <p>Bootstrap</p>
                                    <div className="progress outer-shadow">
                                        <div className="progress-bar" style={{ width: 'calc(30% - 14px)' }}>
                                            <span>30%</span>
                                        </div>

                                    </div>
                                </div>
                                <div className="skill-item">
                                    <p>ReactJS</p>
                                    <div className="progress outer-shadow">
                                        <div className="progress-bar" style={{ width: 'calc(30% - 14px)' }}>
                                            <span>30%</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="experience tag-content">
                            <div className="row">
                                <div className="timeline">
                                    <div className="row">
                                        <div className="timeline-item">
                                            <div className="timeline-item-inner outer-shadow">
                                                <i className="fa fa-briefcase icon" aria-hidden="true"></i>
                                                <span>Sep,2019</span>
                                                <h3>intern Ship</h3>
                                                <h4>ViNaGame</h4>
                                                <p>I'm worked at VinaGame about 6 months</p>
                                            </div>
                                        </div>
                                        
                                        <div className="timeline-item">
                                            <div className="timeline-item-inner outer-shadow">
                                                <i className="fa fa-briefcase icon" aria-hidden="true"></i>
                                                <span>May, 2020 - Present</span>
                                                <h3>Front-End Developer</h3>
                                                <h4>HiveFive Company</h4>
                                                <p>I'm Learning and Working at here</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="education tag-content">
                            <div className="row">
                                <div className="timeline">
                                    <div className="row">
                                        <div className="timeline-item">
                                            <div className="timeline-item-inner outer-shadow">
                                                <i className="fa fa-graduation-cap icon" aria-hidden="true"></i>
                                                <span>2014 - 2017</span>
                                                <h3>Student of</h3>
                                                <h4>Tran Phu HighSchool</h4>
                                                <p>The beginning after the end</p>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="timeline-item-inner outer-shadow">
                                                <i className="fa fa-graduation-cap icon" aria-hidden="true"></i>
                                                <span>2017- Present</span>
                                                <h3>Student of</h3>
                                                <h4>The University of Da Nang - University of Science and Education</h4>
                                                <p>This University is Amazing</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;