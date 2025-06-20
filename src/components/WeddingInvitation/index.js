import Navbar from "../Navbar"
import Home from "../Home"
import Schedules from "../Schedules"
import RSVP from "../RSVP"
import WhenWhere from "../WhenWhere"
import Gallery from "../Gallery"
import Footer from "../Footer"
import './index.css'
const WeddingInvitation = () => {
    return (
        <div className="bg-container">
            <div className="main-container">
                <div className="responsive-container">

                    <Navbar />
                    <section id="home">
                        <Home />
                    </section>
                    <section id="schedules">
                        <Schedules />
                    </section>
                    <section id="rsvp">
                        <RSVP />
                        <WhenWhere />
                    </section>
                    <section id="gallery">
                        <Gallery />
                    </section>
                    <section>
                        <Footer />
                    </section>
                </div>
            </div>
        </div>
    )
}

export default WeddingInvitation