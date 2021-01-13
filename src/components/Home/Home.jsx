import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import InfoSection from "./InfoSection/InfoSection";
import ServiceSection from "./ServicesSection/ServiceSection";
import VideoSection from "./VideoSection/videoSection";
import CommentSection from "./CommentSection/CommentSection";
import Testamonial from "./TestamonialSection/Testamonial";
import HomeFooter from "./HomeFooter/HomeFooter";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <InfoSection />
      <ServiceSection />
      <VideoSection />
      {/* <CommentSection /> */}
      <Testamonial />
      <HomeFooter />
    </div>
  );
};

export default Home;
