import React from 'react';
import styles from './Home.module.css';
import ContactUs from './Contact_us';
import whatsapp from './images/whatsapp.png'

const ContactUsPage = () => {
    return (
        <>
            <div className={styles.map}>
                <div>
                    <h1>
                        Contact Us:
                    </h1>
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

            <a href="https://wa.me/923355181828"
                target="_blank"
                rel="noopener noreferrer" 
                className={styles.whatsapp}>
                <div>
                    <img src={whatsapp} alt="whatsapp logo pic unload" width={100} height={100} />
                </div>
                <div className={styles.whatsappContent}>
                    <h2>NEED HELP CONTACT US:</h2>
                    <h2>+92 335 5181828</h2>
                </div>
            </a>
        </>
    )
}

export default ContactUsPage;