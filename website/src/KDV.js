import React from 'react';
import styles from './Home.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import kpic from './images/kpic.jpeg';
import kpic2 from './images/kpic2.jpeg';


const KDV = () => {
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
            <div className={styles.achiever}>
                <h1>
                    Kingdom Valley
                </h1>
            </div>
            <div className={styles.content}>
                <p>Kingdom Valley is an emerging real estate development in Pakistan, designed to offer a blend of modern living and serene surroundings at highly affordable prices. Located near the Lahore-Islamabad Motorway (M-2), this futuristic housing project is part of the Naya Pakistan Housing Program, making it an attractive option for both investors and homebuyers. The society features well-planned residential, commercial, and recreational zones, ensuring a balanced lifestyle for its residents. With a focus on quality infrastructure, wide roads, green belts, and smart urban planning, Kingdom Valley aims to redefine affordable luxury living. Its strategic location near Islamabad, easy accessibility, and flexible payment plans further enhance its appeal as one of the most promising housing schemes in the region.</p>
            </div>
            <div className={styles.achiever}>
                <h2>
                    What We Offers!
                </h2>
            </div>
            <Slider {...settings}>
            <div className={styles.projectImage}>
                    <div>
                        <img src={kpic2} alt="blueworldcity pic1 unload" width={400} height={450} />
                    </div>
                </div>
                <div className={styles.projectImage}>
                    <div>
                        <img src={kpic} alt="blueworldcity pic1 unload" width={400} height={450} />
                    </div>
                </div>
                <div className={styles.projectImage}>
                    <div>
                        <img src={kpic2} alt="blueworldcity pic1 unload" width={400} height={450} />
                    </div>
                </div>
            </Slider>
        </>
    )
}

export default KDV;