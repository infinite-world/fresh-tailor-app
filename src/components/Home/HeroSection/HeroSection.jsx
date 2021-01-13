import React, { useEffect } from "react";
import "./HeroSection.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Link } from "react-router-dom";

const HeroSection = () => {

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="pt-1">
      <section class="section gradient-banner">
        {/* Start background animation section */}
        <div class="shapes-container">
          <div
            class="shape"
            data-aos="fade-down-left"
            data-aos-duration="1500"
            data-aos-delay="100"
          ></div>
          <div
            class="shape"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="100"
          ></div>
          <div
            class="shape"
            data-aos="fade-up-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          ></div>
          <div
            class="shape"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          ></div>
          <div
            class="shape"
            data-aos="fade-down-left"
            data-aos-duration="1000"
            data-aos-delay="100"
          ></div>
          <div
            class="shape"
            data-aos="fade-down-left"
            data-aos-duration="1000"
            data-aos-delay="100"
          ></div>
          <div
            class="shape"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="300"
          ></div>
          <div
            class="shape"
            data-aos="fade-down-right"
            data-aos-duration="500"
            data-aos-delay="200"
          ></div>
          <div
            class="shape"
            data-aos="fade-down-right"
            data-aos-duration="500"
            data-aos-delay="100"
          ></div>
          <div
            class="shape"
            data-aos="zoom-out"
            data-aos-duration="2000"
            data-aos-delay="500"
          ></div>
          <div
            class="shape"
            data-aos="fade-up-right"
            data-aos-duration="500"
            data-aos-delay="200"
          ></div>
          <div
            class="shape"
            data-aos="fade-down-left"
            data-aos-duration="500"
            data-aos-delay="100"
          ></div>
          <div
            class="shape"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="0"
          ></div>
          <div
            class="shape"
            data-aos="fade-down"
            data-aos-duration="500"
            data-aos-delay="0"
          ></div>
          <div
            class="shape"
            data-aos="fade-up-right"
            data-aos-duration="500"
            data-aos-delay="100"
          ></div>
          <div
            class="shape"
            data-aos="fade-down-left"
            data-aos-duration="500"
            data-aos-delay="0"
          ></div>
        </div>
        {/* End Of Background animation section */}
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 order-2 order-md-1 text-center text-md-left">
              <h1 class="text-white font-weight-bold mb-4">
                Showcase your app with Small Apps
              </h1>
              <p class="text-white mb-5">
                Besides its beautiful design. Laapp is an incredibly rich core
                framework for you to showcase your App.
              </p>
              <Link to="/signup">
                <button
                  type="button"
                  class="btn btn-white text-primary font-weight-bold"
                >
                  Sign Up
                  </button>
              </Link>
              <Link to="/login">
                <button
                  type="button"
                  class="btn btn-white text-primary font-weight-bold"
                >
                  Log in
                  </button>
              </Link>
            </div>
            <div class="col-md-6 text-center order-1 order-md-2">
              <img class="img-fluid" src="images/mobile.png" alt="screenshot" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
