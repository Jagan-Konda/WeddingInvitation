import './index.css'

const Navbar = () => (
  <nav className="navbar navbar-expand-lg bg-body-tertiary nav-container">
    <div className="container">
      <a className="navbar-brand logo" href="#home">Wedding</a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav nav-links-container justify-content-between">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#home">HOME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#schedules">SCHEDULES</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#rsvp">RSVP</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#gallery">GALLERY</a>
          </li>
          <li className="nav-item">
            <button className="nav-link btn btn-link disabled" aria-disabled="true" style={{ textDecoration: 'none' }}>
              GIFT REGISTRY
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar
