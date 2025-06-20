import React, { useEffect, useState } from 'react';
import './index.css';

const Home = () => {
  const targetDate = new Date('2025-11-15T00:00:00');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    function getTimeRemaining() {
      const now = new Date();
      const diff = targetDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      return { days, hours, minutes, seconds };
    }

    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []); 

  return (
    <div>
      <div className="framed-couple-layout">
        <img
          src="https://res.cloudinary.com/dpzsoiz1l/image/upload/v1750350543/a6afcf80d7bff40a45ffa1939b2c2c6518108031_msekzf.png"
          alt="couple"
          className="bottom-corner-couple"
        />
        <img
          src="https://res.cloudinary.com/dpzsoiz1l/image/upload/v1750338648/52bdbf113f4b37ea9732f09a535ca8da7ac39ae3_iholiv.png"
          alt="flower frame"
          className="flower-frame-img-layout"
        />

        <div className="name-date-countdown-conatiner">
          <h1 className="card-bride-names">Ritesh & Foya</h1>
          <p className="card-date">Our Big Day is November 15, 2025</p>
          <img
            src="https://res.cloudinary.com/dpzsoiz1l/image/upload/v1750391525/0035a24d9f02bcff8fe3642e2e6d15ea0a552b9c_dp4mlc.png"
            alt="date"
            className="card-flower-image"
          />

          <div className="countdown-inside-left">
            <div className="text-center"><span>{timeLeft.days}</span><br />Days</div>
            <div className="text-center"><span>{timeLeft.hours}</span><br />Hours</div>
            <div className="text-center"><span>{timeLeft.minutes}</span><br />Mins</div>
            <div className="text-center"><span>{timeLeft.seconds}</span><br />Secs</div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center mb-5">
        <div>
          <h1 className="name">Ritesh Debtath</h1>
          <p className="speech">
            We look forward to building a life filled with love and countless memories. We are excited to share our joy.
          </p>
        </div>

        <div className="flower-frame d-flex justify-content-center align-items-center">
          <img
            src="https://res.cloudinary.com/dpzsoiz1l/image/upload/v1750341191/ef0a1c39673cbf5e59a6f1c08380a38e793aa797_eswiqw.png"
            alt="couple"
            className="couple-pic"
          />
        </div>

        <div>
          <h1 className="name">Joya Syarma</h1>
          <p className="speech">
            We look forward to building a life filled with love and countless memories. We are excited to share our joy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
