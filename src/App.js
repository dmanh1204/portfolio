import React, { useEffect } from 'react';
import './App.css';

function App() {
  const onScroll = (e) => {
    let scrollY = window.scrollY;
    if (scrollY > 20) {
      document.querySelector("#scroll-up").style.display = "block";
      document.querySelector("#tab-responsive").style.display = "flex";
      document.querySelector(".self-picture").style.display = "block";
    } else {
      document.querySelector("#scroll-up").style.display = "none";
      document.querySelector("#tab-responsive").style.display = "none";
      document.querySelector(".self-picture").style.display = "none";
    }
    document.querySelector(".background-parallax").style.backgroundPositionY = - (scrollY / 2) + "px";
  }

  useEffect(() => {
    document.querySelector(".hd-right").addEventListener("mouseover", function () {
      document.querySelector(".header-content").style.opacity = "0";
    })

    document.querySelector(".hd-right").addEventListener("mouseleave", function () {
      document.querySelector(".header-content").style.opacity = "1";
    })

    window.addEventListener('scroll', onScroll);
  }, [])

  return (
    <div className="App">
      <div id="root">
        <div class="background-parallax">
          <div class="container">
            <header>
              <div class="container">
                <div class="hd-left">
                  <a href="">
                    <img class="hd-logo" src="/logo.png" alt="lg" />
                  </a>
                </div>
                <div class="hd-right">
                  <a href="#home" class="hd-home active" data-text="HOME">HOME</a>
                  <a href="#about" class="hd-about" data-text="ABOUT">ABOUT</a>
                  <a href="#skills" class="hd-skills" data-text="SKILLs">SKILLs</a>
                  <a href="#experiences" class="hd-experiences" data-text="EXPERIENCES">EXPERIENCES</a>
                  <a href="#projects" class="hd-projects" data-text="PROJECTS">PROJECTS</a>
                  <a href="#education" class="hd-education" data-text="EDUCATION">EDUCATION</a>
                </div>
              </div>
            </header>
          </div>

          <div class="header-content">
            <div class="hd-title">
              <h1 class="hd-name">Tran Van Manh</h1>
              <h3 class="hd-pos">NodeJs Developer</h3>
              {/* <a style="margin-top: 12px; display: inline-block" title="download my cv.pdf" target="_blank" href=""><i class="fas fa-cloud-download-alt"></i> My CV</a> */}
            </div>
          </div>
        </div>

        <div class="body">
          <div class="container">
            <div class="self-picture">
              <div class="wrap-self-picture">
                <img width="248" height="248" src="/avatar.jpg" alt="self" />
              </div>
            </div>
            <center>
              <p>manuci1801@gmail.com</p>
              <p>096 430 8465</p>
            </center>
            <h1 class="text-resume">RESUME</h1>
            <div class="resume">
              <div class="timeline">
                <div class="contain left">
                  <div class="content" id="about">
                    <h2>ABOUT</h2>
                    <p>
                      I'm a junior student at Ha Noi University of Industry. My major is Information
                      Technology.
                                </p>
                    <p>
                      I can work hard under pressure and have responsible for the work. Learning new
                      languages and technologies are what I am passionate about.
                                </p>
                  </div>
                </div>
                <div class="contain right">
                  <div class="content" id="skills">
                    <h2>SKILLS</h2>
                    <div>
                      <h3>Programming Languages:</h3>
                      <ul>
                        <li>Javascript ES6</li>
                        <li>HTML5, CSS3, Bootstrap</li>
                      </ul>
                    </div>
                    <div>
                      <h3>Frameworks/ Platforms</h3>
                      <ul>
                        <li>NodeJs (Express, Socket.io, FeatherJs, NestJs,...)</li>
                        <li>ReactJs (Hooks, Redux)</li>
                      </ul>
                    </div>
                    <div>
                      <h3>Databases:</h3>
                      <ul>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>PostgreSQL</li>
                        <li>Redis</li>
                      </ul>
                    </div>
                    <div>
                      <h3>Version Control:</h3>
                      <ul>
                        <li>Git</li>
                      </ul>
                    </div>
                    <div>
                      <h3>Soft Skills: </h3>
                      <ul>
                        <li>Team work</li>
                        <li>Time management</li>
                      </ul>
                    </div>
                    <div>
                      <h3>Languages: </h3>
                      <ul>
                        <li>English communication</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="contain left">
                  <div class="content" id="experiences">
                    <h2>WORK EXPERIENCES</h2>
                    <div>
                      <h3>Fresher NodeJs in Bac Ha Software (BHSoft)</h3>
                      <ul>
                        <li>Jan 2020 - Jun 2020</li>
                        <li>Take part in two projects (WebRTC and JobSeeker) as Backend Developer</li>
                      </ul>
                    </div>
                  </div>
                </div>



                <div class="contain right">
                  <div class="content" id="projects">
                    <h2>PROJECTS</h2>
                    <div>
                      <h3> <a href="#">Finesse Everywhere (Jun 2020 - Present)</a></h3>
                      <ul>
                        <li>Direct link:
                                            <a href="#">Coming soon</a>
                        </li>
                        <li>Github:
                                            <a href="">Coming soon</a>
                        </li>
                        <li>
                          <span>Client: </span><br /> None
                                        </li>
                        <li>
                          <span>Description:</span> <br />The website where people can finesse
                                            everywhere at every times. People can view videos about finesse, view food
                                            menu to train, communicate with PJ by chat or video call.
                                        </li>
                        <li>
                          <span>Team Size: </span> 3
                                        </li>

                        <li>
                          <span>Technology in use:</span><br /> NodeJs (NestJs), ReactJs(NextJs),
                                            Databases (PostgreSQL, Redis)
                                        </li>
                      </ul>

                      <h3> <a href="#">UET Community (WebRTC) (Mar 2020 - Jun 2020)</a></h3>
                      <ul>
                        <li>Direct link:
                                            <a href="#">Private</a>
                        </li>
                        <li>Github:
                                            <a href="">Private</a>
                        </li>
                        <li>
                          <span>Client: </span><br />Private
                                        </li>
                        <li>
                          <span>Description:</span> <br />The website where people can find jobs or
                                            find candidates.
                                        </li>
                        <li>
                          <span>Team Size: </span> 4
                                        </li>

                        <li>
                          <span>Technology in use:</span><br /> NodeJs (FeatherJs), VueJs
                                            , Databases (PostgreSQL).
                                        </li>
                      </ul>

                      <h3> <a href="#">UET Community (WebRTC) (Jan 2020 - Mar 2020)</a></h3>
                      <ul>
                        <li>Direct link:
                                            <a href="#">Private</a>
                        </li>
                        <li>Github:
                                            <a href="">Private</a>
                        </li>
                        <li>
                          <span>Client: </span><br />VNU University of Engineering and Technology
                                        </li>
                        <li>
                          <span>Description:</span> <br />The website where students of UET can
                                            communicate with consultant by chat or video call.
                                        </li>
                        <li>
                          <span>Team Size: </span> 3
                                        </li>

                        <li>
                          <span>Technology in use:</span><br /> NodeJs (Express, Socket.io), ReactJs
                                            (Redux), Databases (MySql, Redis).
                                        </li>
                      </ul>

                      <h3> <a href="#">Chat App (Apr 2020 -
                                            Present)</a></h3>
                      <ul>
                        <li>Direct link:
                                            <a href="#">Coming soon</a>
                        </li>
                        <li>Github:
                                            <a
                            href="https://github.com/manuci1801/chat_app">https://github.com/manuci1801/chat_app</a>
                        </li>
                        <li>
                          <span>Client: </span><br />None
                                        </li>
                        <li>
                          <span>Description:</span> <br />The website has some features like friends
                                            management, chat text, send file, audio and video call.
                                        </li>
                        <li>
                          <span>Team Size: </span> 1
                                        </li>

                        <li>
                          <span>Technology in use:</span><br /> NodeJs (Express, Socket.io), ReactJs
                                            (Hooks), Databases (MongoDB, Redis).
                                        </li>
                      </ul>

                    </div>
                  </div>
                </div>

                <div class="contain left">
                  <div class="content" id="education">
                    <h2>EDUCATION</h2>
                    <div>
                      <h3>Ha Noi University of Industry</h3>
                      <ul>
                        <li>Junior student at Ha Noi University of Industry</li>
                        <li>Graduating in 5/2021 (expected)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <p>CONTACT ME</p>

          <p>
            <a title="Facebook" target="_blank" href="https://www.facebook.com/manuci1801"><i
              class="fab fa-facebook"></i></a>
            <a title="Whatapp" target="_blank" href="https://wa.me/84964308465"><i class="fab fa-whatsapp"></i></a>
            <a title="Gmail" target="_blank"
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=manuci1801@gmail.com"><i
                class="far fa-envelope"></i></a>


            {/* <a title="download my cv.pdf" target="_blank"
                    href=""><i
                        class="ti-cloud-down"></i></a> */}
          </p>
        </footer>

        <div id="scroll-up">
          <a href="#top"><i class="ti-angle-double-up"></i></a>
        </div>

        <div id="tab-responsive">
          <a title="About" href="#about"><i class="fas fa-user"></i></a>
          <a title="Skills" href="#skills"><i class="fas fa-shield-alt"></i></a>
          <a title="Experiences" href="#experiences"><i class="fas fa-building"></i></a>
          <a title="Projects" href="#projects"><i class="fas fa-code"></i></a>
          <a title="Education" href="#education"><i class="fas fa-university"></i></a>
        </div>
      </div>
    </div>
  );
}

export default App;
