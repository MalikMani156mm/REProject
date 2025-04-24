import React from 'react';
import styles from './Home.module.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1 from './images/pic1.jpeg';
import pic2 from './images/pic2.jpeg';
import pic3 from './images/pic3.jpeg';
import pic4 from './images/pic4.jpeg';
import pic5 from './images/pic5.jpeg';
import pic6 from './images/pic6.jpeg';
import pic7 from './images/pic7.jpeg';
import pic8 from './images/pic8.jpeg';
import pic9 from './images/pic9.jpeg';
import pic10 from './images/pic10.jpeg';


const BWC = () => {
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
                    Blue World City
                </h1>
            </div>
            <div className={styles.content}>
                <p>The master plan of BWC contains various types of separate zones for commercial and residential areas. In addition, the society also offers farmhouses to support varying preferences to the locality. Since it is the result of the collaboration between national and international developers, the investors can witness the project’s advanced urban planning. For example, the well-planned roads with wide streets of 40 feet, major roads at 80 feet, and the grand boulevard at 120 feet ensure residents smooth connectivity. Plus, the city is located centrally in Moza Town, Sihal, which is more appealing to its interested community. The Blue World City (BWC) is an avant-garde real estate project that symbolizes the strong ties between Pakistan and China. This first-of-its-kind tourist city near Rawalpindi and Islamabad has been designed with innovative infrastructure. The Blue World City owner is committed to provide a comfortable lifestyle in a highly sought-after community. Blue World City has a total land area of of more than one lakh Kanal spread along the Chakri road. The society’s accessible location near the Islamabad Motorway (M2) and China-Pakistan Economic Corridor (CPEC) route has granted it a significant importance. Plus, the city is also 20 minutes away from the New Islamabad International Airport. Moreover, the administration of Blue World City has designed flexible payment plans that anyone can afford to pay.</p>
            </div>
            <div className={styles.achiever}>
                <h2>
                    What We Offers!
                </h2>
            </div>
            <Slider {...settings}>
                <div className={styles.projectImage}>
                    <div>
                        <img src={pic1} alt="blueworldcity pic1 unload" width={400} height={450} />
                    </div>
                </div>
                <div className={styles.projectImage}>
                    <img src={pic2} alt="blueworldcity pic2 unload" width={400} height={450} />
                </div>
                <div className={styles.projectImage}>
                    <img src={pic4} alt="blueworldcity pic4 unload" width={400} height={450} />
                </div>
                <div className={styles.projectImage}>
                    <img src={pic3} alt="blueworldcity pic3 unload" width={400} height={450} />
                </div>
                <div className={styles.projectImage}>
                    <img src={pic10} alt="blueworldcity pic10 unload" width={400} height={450} />
                </div>
                <div className={styles.projectImage}>
                    <img src={pic5} alt="blueworldcity pic5 unload" width={400} height={450} />
                </div>
                <div className={styles.projectImage}>
                    <img src={pic6} alt="blueworldcity pic6 unload" width={400} height={450} />
                </div>
                <div className={styles.projectImage}>
                    <img src={pic7} alt="blueworldcity pic7 unload" width={400} height={450} />
                </div>
                <div className={styles.projectImage}>
                    <img src={pic8} alt="blueworldcity pic8 unload" width={400} height={450} />
                </div>
                <div className={styles.projectImage}>
                    <img src={pic9} alt="blueworldcity pic9 unload" width={400} height={450} />
                </div>
            </Slider>
        </>
    )
}

export default BWC;