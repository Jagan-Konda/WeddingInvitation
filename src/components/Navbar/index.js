import './index.css'
const Navbar = () => (
    <nav class="navbar navbar-expand-lg bg-body-tertiary nav-container">
        <div class="container" >
            <a class="navbar-brand" href="#home" className="logo">Wedding</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav nav-links-container justify-content-between">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#home">HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#schedules">SCHEDULES</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#rsvp">RSVP</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#gallery">GALLERY</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link disabled" aria-disabled="true">GIFT REGISTRY</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Navbar