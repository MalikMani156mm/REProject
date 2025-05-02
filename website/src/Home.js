import React from 'react';
import styles from './Home.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import video from './images/bannervideo.mp4';
import blueworldcity from './images/blueworldcity.jpeg';
import kingdomvalley from './images/kingdomvalley.jpeg';
import newcityparadise from './images/newcityparadise.jpeg';
import parkviewcity from './images/parkviewcity.jpeg';
import lakeshore from './images/lakeshore.jpeg';
import blue from './images/blue.jpeg';
import zameen from './images/zameen.jpeg';
import park from './images/parkCert.jpeg';
import ceo from './images/ceo.jpeg';
import female from './images/female.jpg';
import Reviews from './Reviews.js';
import ContactUs from './Contact_us.js';
import { NavLink } from 'react-router-dom';

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992, // tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className={styles.videoContainer}>
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className={styles.videoElement}
        />
      </div>
      <div className={styles.projects}>
        <h2>
          Best Housing Societies to Invest
        </h2>
      </div>
      <Slider {...settings}>
        <div className={styles.projectImage}>
          <div>
            <NavLink to="/BlueWorldCity">
              <img src={blueworldcity} alt="blueworldcity pic unload" width={400} height={450} />
              <p>Blue World City</p>
            </NavLink>
          </div>
        </div>
        <div className={styles.projectImage}>
          <NavLink to="/ParkViewCity">
            <img src={parkviewcity} alt="parkviewcity pic unload" width={400} height={450} />
            <p>Park View City</p>
          </NavLink>
        </div>
        <div className={styles.projectImage}>
          <NavLink to="/KingdomValley">
            <img src={kingdomvalley} alt="kingdomvalley pic unload" width={400} height={450} />
            <p>Kingdom Valley</p>
          </NavLink>
        </div>
        <div className={styles.projectImage}>
          <NavLink to="/NewCityParadise">
            <img src={newcityparadise} alt="newcityparadise pic unload" width={400} height={450} />
            <p>New City Paradise</p>
          </NavLink>
        </div>
      </Slider>
      <div className={styles.achiever}>
        <h2>
          Our Achievements
        </h2>
      </div>
      <Slider {...settings}>
        <div className={styles.projectImage}>
          <div>
            <img src={zameen} alt="zameen.com certificate unload" width={400} height={450} />
          </div>
        </div>
        <div className={styles.projectImage}>
          <img src={blue} alt="blueworldcity certificate unload" width={400} height={450} />
        </div>
        <div className={styles.projectImage}>
          <img src={park} alt="park view city certificate unload" width={400} height={450} />
        </div>
        <div className={styles.projectImage}>
          <img src={lakeshore} alt="lakeshore certificate unload" width={400} height={450} />
        </div>
      </Slider>
      <div className={styles.achiever}>
        <h2>
          Our Team
        </h2>
      </div>
      <div className={styles.teams}>
        <div className={styles.teamImage}>
          <img src={ceo} alt="CEO pic unload" width={300} height={450} />
          <p><strong>Usama Ali</strong></p>
          <p>Chief Executive Officer</p>
          <p>Phone: <a href='tel:+92335518182'>03355181828</a></p>
        </div>
        <div className={styles.teamImage}>
          <img src={female} alt="Consultant pic unload" width={350} height={450} />
          <p><strong>Mahnoor Malik</strong></p>
          <p>Investment Consultant</p>
          <p>Phone: <a href='tel:+923185881618'>03185881618</a></p>
        </div>
      </div>
      <Reviews />
      <div className={styles.map}>
        <div>
          <h2>
            Contact Us:
          </h2>
        </div>
      </div>
      <ContactUs />
      <div className={styles.map}>
        <div>
          <h2>
            Visit Our Office
          </h2>
        </div>
        <div className={styles.mapIframe}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3325.4559308083208!2d73.10641957569476!3d33.54152857335353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDMyJzI5LjUiTiA3M8KwMDYnMzIuNCJF!5e0!3m2!1sen!2s!4v1745404577895!5m2!1sen!2s"
            title='map'
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

    </>
  )
}

export default Home