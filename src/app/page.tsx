
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/alsiam.png"
              alt="Al Siam Profile"
              className="shadow-dark"
            />
            <h1>Khushi</h1>
            <p>Full Stack & Web Developer</p>
            <div className="social-links">
              
              <a href="https://github.com/Khushi0712-coder" target="_blank">
                <i className="fa fa-github" />
              </a>
              
              <a href="https://www.linkedin.com/in/khushi-88360129a" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
