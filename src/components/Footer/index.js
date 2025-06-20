import './index.css'
const Footer = () => {
    return (
        <div className="footer" id="footer">
            <img
                src="https://res.cloudinary.com/dpzsoiz1l/image/upload/v1750360749/Group_blbl68.png"
                alt="Left Flower"
                className="footer-flower-img left"
            />
            <img
                src="https://res.cloudinary.com/dpzsoiz1l/image/upload/v1750360822/Group_1_cw29pf.png"
                alt="Right Flower"
                className="footer-flower-img right"
            />

            <p className="footer-message">
                Let us come together in the spirit of love and joy, as we embark on
                this beautiful journey of togetherness. Your presence will add warmth
                and blessings to our union, making it a celebration to remember in our
                hearts and souls.
            </p>

            <div className="footer-links">
                <a href="#home">HOME</a>
                <a href="#schedules">SCHEDULES</a>
                <a href="#rsvp">RSVP</a>
                <a href="#gallery">GALLERY</a>
                <a href="#" style={{ cursor: 'not-allowed' }} aria-disabled="true">GIFT REGISTRY</a>
            </div>
        </div>
    );

}

export default Footer