import React from 'react';
import styles from './Home.module.css';
import ceo from './images/ceo.jpeg';
import female from './images/female.jpg';
import Reviews from './Reviews.js';

const AboutUs = () => {
    return (
        <>
            <div className={styles.achiever}>
                <h1>
                    About Us:
                </h1>
            </div>
            <div className={styles.whyUsBg}>
                <div className={styles.achiever}>
                    <h2>Why to Choose Us?</h2>
                </div>
                <div className={styles.rowDiv}>
                    <div className={styles.colDiv}>
                        <h3>Happy Customers</h3>
                        <p>Results speak for themselves. Our clients consistently express satisfaction with our services, achieving guaranteed profits when purchasing property with our assistance. We believe that positive client feedback has established us as a top property dealer in Pakistan.</p>
                    </div>
                    <div className={styles.colDiv}>
                        <h3>Best in Pakistan</h3>
                        <p>We never compromise on quality when serving our clients, which sets us apart as a leading real estate property company in Pakistan. Our in-depth legal, financial, and commercial evaluations of each project ensure that we provide our clients with the best possible guidance.</p>
                    </div>
                    <div className={styles.colDiv}>
                        <h3>Complete Guidance</h3>
                        <p>The Dream Marketing team believes in success through comprehensive guidance for our clients. We maintain full transparency with investors, openly sharing both the pros and cons of each opportunity, while leaving the final decision in their hands.</p>
                    </div>
                    <div className={styles.colDiv}>
                        <h3>Expert Agents</h3>
                        <p>Our real estate agents bring extensive experience and expertise in property dealings across Pakistan, and each team member is thoroughly trained to excel in their role. We hire only top industry experts to uphold the high standards our clients expect.</p>
                    </div>
                </div>
            </div>
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
        </>
    )
}

export default AboutUs;