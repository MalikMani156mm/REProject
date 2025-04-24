import React from 'react';
import styles from './Home.module.css';
import pvcPic from './images/pvcPic.jpeg';


const PVC = () => {
    return (
        <>
            <div className={styles.achiever}>
                <h1>
                    Park View City
                </h1>
            </div>
            <div className={styles.content}>
                <p>Park View City is a premium housing society nestled in the heart of Islamabad, offering a perfect fusion of luxury, tranquility, and modern living. Located in the lush green surroundings of Zone IV near Bani Gala, the society is approved by the Capital Development Authority (CDA), adding to its credibility and trust. Developed by the Vision Group, Park View City features state-of-the-art infrastructure, wide carpeted roads, underground electricity, and an eco-friendly environment. The society offers a variety of residential and commercial plot options to suit the needs of families and investors alike. With its scenic views, proximity to the city center, and modern amenities like schools, hospitals, and shopping zones, Park View City stands as a symbol of elegance and sophistication in the capital’s real estate landscape.</p>
            </div>
            <div className={styles.achiever}>
                <h2>
                    What We Offers!
                </h2>
            </div>
            <div className={styles.projectImage}>
                <div>
                    <img src={pvcPic} alt="blueworldcity pic1 unload" width={400} height={450} />
                </div>
            </div>
        </>
    )
}

export default PVC;