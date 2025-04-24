import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import ContactUsPage from "./ContactUs";
import AboutUs from "./AboutUs";
import BWC from "./BWC";
import PVC from "./PVC";
import KDV from "./KDV";
import NCP from "./NCP";

function App() {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <div className={styles.layout}>
          <Header />
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              exact
              element={
                <div className={styles.main}>
                  <Home />
                </div>
              }
            />
            <Route
              path="/ContactUs"
              exact
              element={
                <div className={styles.main}>
                  <ContactUsPage />
                </div>
              }
            />
            <Route
              path="/AboutUs"
              exact
              element={
                <div className={styles.main}>
                  <AboutUs />
                </div>
              }
            />
            <Route
              path="/BlueWorldCity"
              exact
              element={
                <div className={styles.main}>
                  <BWC />
                </div>
              }
            />
            <Route
              path="/ParkViewCity"
              exact
              element={
                <div className={styles.main}>
                  <PVC />
                </div>
              }
            />
            <Route
              path="/KingdomValley"
              exact
              element={
                <div className={styles.main}>
                  <KDV />
                </div>
              }
            />
            <Route
              path="/NewCityParadise"
              exact
              element={
                <div className={styles.main}>
                  <NCP />
                </div>
              }
            />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
