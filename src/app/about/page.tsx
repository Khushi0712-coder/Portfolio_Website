import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
  <h2>
    I am Khushi, a <span>Full Stack & Web Developer</span>
  </h2>
  <p>
    Hi! My name is Khushi. I am a passionate and dedicated Full Stack &
    Web Developer currently pursuing B.Tech in Computer Science at Geeta
    University. I have experience in building web projects using HTML, CSS,
    JavaScript, PHP, and MySQL, and I enjoy problem-solving using C++ and DSA.
    I love turning ideas into creative, responsive, and user-friendly digital
    experiences.
  </p>
</div>

              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>khushi0712042@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>BTech CSE</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+91 9034996261</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Jind, Haryana</span>
                      </p>
                    </div>
                    
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/assets/docs/resume.pdf"
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </a>
                      <a
                        href="#contact"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>Html5</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Css3</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "60%" }} />
                        <div className="skill-percent">60%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Javascript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "50%" }} />
                        <div className="skill-percent">50%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Bootstrap</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <div className="row">
  <div className="education padd-15">
    <h3 className="title">Education</h3>
    <div className="row">
      <div className="timeline-box padd-15">
        <div className="timeline shadow-dark">
          {/* Timeline Item */}
          <div className="timeline-item">
            <div className="circle-dot" />
            <h6 className="timeline-date">
              <i className="fa fa-calendar" /> 2023 – 2027
            </h6>
            <h4 className="timeline-title">B.Tech — Computer Science & Engineering</h4>
            <p className="timeline-text">
              Geeta University, Panipat — Pursuing B.Tech (CSE). Current CGPA: 8.60.
            </p>
          </div>
          {/* Timeline Item end */}

          {/* Timeline Item */}
          <div className="timeline-item">
            <div className="circle-dot" />
            <h6 className="timeline-date">
              <i className="fa fa-calendar" /> 2021 – 2023
            </h6>
            <h4 className="timeline-title">Intermediate (CBSE)</h4>
            <p className="timeline-text">
              Adi Shankaracharya Convent Public School, Safidon — Completed Intermediate with 85%.
            </p>
          </div>
          {/* Timeline Item end */}

          {/* Timeline Item */}
          <div className="timeline-item">
            <div className="circle-dot" />
            <h6 className="timeline-date">
              <i className="fa fa-calendar" /> 2020 – 2021
            </h6>
            <h4 className="timeline-title">Matriculation (CBSE)</h4>
            <p className="timeline-text">
              Adi Shankaracharya Convent Public School, Safidon — Completed Matriculation with 86%.
            </p>
          </div>
          {/* Timeline Item end */}
        </div>
      </div>
    </div>
  </div>

  <div className="experience padd-15">
    <h3 className="title">Experience</h3>
    <div className="row">
      <div className="timeline-box padd-15">
        <div className="timeline shadow-dark">
          {/* Timeline Item */}
          <div className="timeline-item">
            <div className="circle-dot" />
            <h6 className="timeline-date">
              <i className="fa fa-calendar" /> May 2025 – Aug 2025
            </h6>
            <h4 className="timeline-title">Data Visualization Intern</h4>
            <p className="timeline-text">
              Built interactive dashboards and reports using Excel, Power BI, and Tableau.
              Performed data cleaning & transformation and presented insights with user-friendly visualizations.
            </p>
          </div>
          {/* Timeline Item end */}

          {/* Timeline Item */}
          <div className="timeline-item">
            <div className="circle-dot" />
            <h6 className="timeline-date">
              <i className="fa fa-calendar" /> Jun 2024 – Jul 2024
            </h6>
            <h4 className="timeline-title">DSA & C++ Workshop / Internship</h4>
            <p className="timeline-text">
              Completed focused DSA training using C++; practiced problems and learned algorithmic techniques used in competitive programming and interviews.
            </p>
          </div>
          {/* Timeline Item end */}

          {/* Timeline Item */}
          <div className="timeline-item">
            <div className="circle-dot" />
            <h6 className="timeline-date">
              <i className="fa fa-calendar" /> 2024 – Present
            </h6>
            <h4 className="timeline-title">Web Development & Projects</h4>
            <p className="timeline-text">
              Developed personal and college projects including a Perfume E-commerce site, Realtime Student Feedback Portal, and a Next.js portfolio.
              Technologies used: HTML, CSS, JavaScript, PHP, MySQL, React, Node.js, Next.js, Tailwind.
            </p>
          </div>
          {/* Timeline Item end */}
        </div>
      </div>
    </div>
  </div>
</div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
