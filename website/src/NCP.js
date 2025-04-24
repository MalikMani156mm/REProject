import React from 'react';
import styles from './Home.module.css';
import ncpPic from './images/ncppic.jpeg';

const NCP = () => {
  return (
          <>
              <div className={styles.achiever}>
                  <h1>
                      New City Paradise
                  </h1>
              </div>
              <div className={styles.content}>
                  <p>New City Paradise is a promising new addition to the landscape of modern housing developments in Pakistan, located ideally near the Burhan Interchange on the M-1 Motorway, just a short drive from Islamabad and Rawalpindi. Developed by the renowned New City Developers, this society aims to offer a high-quality lifestyle with affordability at its core. Spanning over thousands of Kanals, New City Paradise is designed with meticulous urban planning, featuring wide roads, green spaces, underground utilities, and a secure, gated environment. With a blend of residential, commercial, and recreational facilities, the project caters to the evolving needs of contemporary families and real estate investors. Its strategic location, NOC approval, and commitment to timely development make it one of the most anticipated housing projects in the region.</p>
              </div>
              <div className={styles.achiever}>
                  <h2>
                      What We Offers!
                  </h2>
              </div>
              <div className={styles.projectImage}>
                  <div>
                      <img src={ncpPic} alt="NewCityParadise pic unload" width={400} height={450} />
                  </div>
              </div>
          </>
      )
}

export default NCP;