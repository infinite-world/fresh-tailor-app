import React from "react";
const ServiceSection = () => {
  return (
    <div>
      <section class="service section bg-gray">
        <div class="container-fluid p-0">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-title">
                <h2> Link Between "Class Elegance Art & Tailoring"</h2>
                <p>
                  We provide some of the best feature to grow tailors business
                  and to have all the data on clouds so you don't have to worry
                  about things that make you uncomfortable, its all done in this
                  application
                </p>
              </div>
            </div>
          </div>
          <div class="row no-gutters">
            <div class="col-lg-6 align-self-center">
              <div class="service-thumb left" data-aos="fade-right">
                <img
                  class="img-fluid"
                  src="images/feature/iphone-ipad.png"
                  alt="iphone-ipad"
                />
              </div>
            </div>
            <div class="col-lg-5 mr-auto align-self-center">
              <div class="service-box">
                <div class="row align-items-center">
                  <div class="col-md-6 col-xs-12">
                    <div class="service-item">
                      <i class="ti-bookmark"></i>
                      <h3>Big Community</h3>
                      <p>
                        As it is going to be a platform for tailors so they can
                        connect and communicate with each other
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6 col-xs-12">
                    <div class="service-item">
                      <i class="ti-pulse"></i>
                      <h3>Easy Access</h3>
                      <p>
                        You can manage the data of your customers & access it on
                        just one click whenever and wherever you want
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6 col-xs-12">
                    <div class="service-item">
                      <i class="ti-bar-chart"></i>
                      <h3>24/7 availability</h3>
                      <p>
                        Your data is availale throughout the day and with every
                        minor details you have written
                      </p>
                    </div>
                  </div>
                  <div class="col-md-6 col-xs-12">
                    <div class="service-item">
                      <i class="ti-panel"></i>
                      <h3>Privacy & Security</h3>
                      <p>
                        Your Data is 100% secure and fully protected only you
                        can access your data
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceSection;
