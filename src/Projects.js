function Projects() {
  return (
    <section id="projects" className="container">
      <h2 className="section-title">Projects</h2>

      <div className="project-grid">

        <div className="card">
          <h3>Portfolio Website</h3>
          <p>Modern portfolio built with React</p>
          <div className="tech">React • CSS</div>
          <div className="links">
            <a href="#">Live</a>
            <a href="#">GitHub</a>
          </div>
        </div>

        <div className="card">
          <h3>Task Manager</h3>
          <p>Manage daily tasks efficiently</p>
          <div className="tech">JavaScript</div>
          <div className="links">
            <a href="#">Live</a>
            <a href="#">GitHub</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;