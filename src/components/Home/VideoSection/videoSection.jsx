import React from "react";

const VideoSection = () => {
  return (
    <div>
      <section class="video-promo section bg-1">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="content-block">
                <h2>Watch Our Promo Video</h2>
                <p>
                  If you want to Learn how to use this application, Let's watch this video 
                </p>
                <a
                  data-fancybox
                  href="https://www.youtube.com/watch?v=jrkvirglgaQ"
                >
                  <i class="ti-control-play video"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoSection;
