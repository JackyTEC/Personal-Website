import './App.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyWebsite</div>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#sigma-gooners">Sigma Gooners</a></li>
      </ul>
    </nav>
  )
}

function App() {
  return (
    <>
      <Navbar />

      <section id="about">
        <h1>About</h1>
        <p>Hello, I'm ...</p>
      </section>

      <section id="projects">
        <h1>Projects</h1>
        <p>Here are my projects...</p>
      </section>

      <section id="contact">
        <h1>Contact</h1>
        <p>Reach me at...</p>
      </section>

      <section id="sigma-gooners">
        <h1>Sigma Gooners</h1>
        <p>...</p>
      </section>
    </>
  )
}

export default App
