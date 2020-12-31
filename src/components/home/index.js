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
                                <li className="contact">Full Name: Nguyen Trung Sy</li>
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
                                <a className="outer-shadow" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                <a className="outer-shadow" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                <a className="outer-shadow" href="#"><i className="fa fa-google" aria-hidden="true"></i></a>
                                <a className="outer-shadow" href="#"><i className="fa fa-github" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        <div className="about-info">
                            <p><span>Hi! My name's Sy. I'm a Web Developer & Designer</span> of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's
                            standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a
                            type specimen book.</p>
                            <p>It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the 1960s with the
                            release of Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like Aldus PageMaker
                            including versions of Lorem Ipsum.</p>
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
                                        <div className="progress-bar" style={{ width: 'calc(100% - 14px)' }}>
                                            <span>100%</span>
                                        </div>

                                    </div>
                                </div>
                                <div className="skill-item">
                                    <p>Css</p>
                                    <div className="progress outer-shadow">
                                        <div className="progress-bar" style={{ width: 'calc(100% - 14px)' }}>
                                            <span>100%</span>
                                        </div>

                                    </div>
                                </div>
                                <div className="skill-item">
                                    <p>Javascript</p>
                                    <div className="progress outer-shadow">
                                        <div className="progress-bar" style={{ width: 'calc(70% - 14px)' }}>
                                            <span>70%</span>
                                        </div>

                                    </div>
                                </div>
                                <div className="skill-item">
                                    <p>Bootstrap</p>
                                    <div className="progress outer-shadow">
                                        <div className="progress-bar" style={{ width: 'calc(100% - 14px)' }}>
                                            <span>100%</span>
                                        </div>

                                    </div>
                                </div>
                                <div className="skill-item">
                                    <p>ReactJS</p>
                                    <div className="progress outer-shadow">
                                        <div className="progress-bar" style={{ width: 'calc(50% - 14px)' }}>
                                            <span>50%</span>
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
                                                <span>Sep,2019 - Present</span>
                                                <h3>Fullstack Developer</h3>
                                                <h4>Company name</h4>
                                                <p>It has survived not only five centuries,
                                                but also the leap into electronic typesetting, remaining
                                                essentially unchanged. It was popularised in the 1960s</p>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="timeline-item-inner outer-shadow">
                                                <i className="fa fa-briefcase icon" aria-hidden="true"></i>
                                                <span>Sep,2019 - Present</span>
                                                <h3>Fullstack Developer</h3>
                                                <h4>Company name</h4>
                                                <p>It has survived not only five centuries,
                                                but also the leap into electronic typesetting, remaining
                                                essentially unchanged. It was popularised in the 1960s</p>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="timeline-item-inner outer-shadow">
                                                <i className="fa fa-briefcase icon" aria-hidden="true"></i>
                                                <span>Sep,2019 - Present</span>
                                                <h3>Fullstack Developer</h3>
                                                <h4>Company name</h4>
                                                <p>It has survived not only five centuries,
                                                but also the leap into electronic typesetting, remaining
                                                essentially unchanged. It was popularised in the 1960s</p>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="timeline-item-inner outer-shadow">
                                                <i className="fa fa-briefcase icon" aria-hidden="true"></i>
                                                <span>Sep,2019 - Present</span>
                                                <h3>Fullstack Developer</h3>
                                                <h4>Company name</h4>
                                                <p>It has survived not only five centuries,
                                                but also the leap into electronic typesetting, remaining
                                                essentially unchanged. It was popularised in the 1960s</p>
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
                                                <span>Sep,2019 - Present</span>
                                                <h3>Student of</h3>
                                                <h4>Duy Tan University</h4>
                                                <p>It has survived not only five centuries,
                                                but also the leap into electronic typesetting, remaining
                                                essentially unchanged. It was popularised in the 1960s</p>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="timeline-item-inner outer-shadow">
                                                <i className="fa fa-graduation-cap icon" aria-hidden="true"></i>
                                                <span>Sep,2019 - Present</span>
                                                <h3>Student of</h3>
                                                <h4>Duy Tan University</h4>
                                                <p>It has survived not only five centuries,
                                                but also the leap into electronic typesetting, remaining
                                                essentially unchanged. It was popularised in the 1960s</p>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="timeline-item-inner outer-shadow">
                                                <i className="fa fa-graduation-cap icon" aria-hidden="true"></i>
                                                <span>Sep,2019 - Present</span>
                                                <h3>Student of</h3>
                                                <h4>Duy Tan University</h4>
                                                <p>It has survived not only five centuries,
                                                but also the leap into electronic typesetting, remaining
                                                essentially unchanged. It was popularised in the 1960s</p>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="timeline-item-inner outer-shadow">
                                                <i className="fa fa-graduation-cap icon" aria-hidden="true"></i>
                                                <span>Sep,2019 - Present</span>
                                                <h3>Student of</h3>
                                                <h4>Duy Tan University</h4>
                                                <p>It has survived not only five centuries,
                                                but also the leap into electronic typesetting, remaining
                                                essentially unchanged. It was popularised in the 1960s</p>
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