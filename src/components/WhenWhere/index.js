import './index.css'
const WhenWhere = () => {
    return (
        <div className='when-where-bg-container'>
            <h1 className='when-where-heading'>When & Where</h1>
            <ul className='when-where-list-container'>
                <li className="when-where-list-item">
                    <div className="when-where-bg-frame">
                        <img src="https://res.cloudinary.com/dpzsoiz1l/image/upload/v1750355218/80989355f7474edefaa1d2add4b71dff7453eb80_mhdekh.png" alt="couples" className='when-where-couples-pic' />
                    </div>
                    <div className='when-where-details'>
                        <h1 className='when-where-ceremony'>The Reception</h1>
                        <p className='when-where-date-time'>Monday, 12 Apr. 2025 1:00 PM - 2:30 PM</p>
                        <p className='when-where-place'>Blue Ginger Lawn Taj West End25, Race Course Road, Bengaluru, 560001</p>
                    </div>
                </li>
                <li className="when-where-list-item">
                    <div className="when-where-bg-frame">
                        <img src="https://res.cloudinary.com/dpzsoiz1l/image/upload/v1750356847/bdfb0fc9d887ed7cc0fcfec0e6e46f26f9dbba8e_kmfvvx.png" alt="couples" className='when-where-couples-pic' />
                    </div>
                    <div className='when-where-details'>
                        <h1 className='when-where-ceremony'>The Ceremony</h1>
                        <p className='when-where-date-time'>Monday, 15 Apr. 2025 1:00 PM – 2:30 PM</p>
                        <p className='when-where-place'>Blue Ginger Lawn Taj West End25, Race Course Road, Bengaluru, 560001</p>
                    </div>
                </li>
                <li className="when-where-list-item">
                    <div className="when-where-bg-frame">
                        <img src="https://res.cloudinary.com/dpzsoiz1l/image/upload/v1750357027/3075c5670f4b02670a4a40e1896387feeeab3536_dx1jsc.png" alt="couples" className='when-where-couples-pic' />
                    </div>
                    <div className='when-where-details'>
                        <h1 className='when-where-ceremony'>The Party</h1>
                        <p className='when-where-date-time'>Monday, 25 Apr. 2026 1:00 PM – 2:30 PM</p>
                        <p className='when-where-place'>Blue Ginger Lawn Taj West End25, Race Course Road, Bengaluru, 560001</p>
                    </div>
                </li>

            </ul>
            <div className="map">
                <iframe
                    title="venue-location"
                    src="https://www.google.com/maps?q=37.7912179,-122.3997431&hl=es;z=14&output=embed"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    )
}

export default WhenWhere