import React, { useState } from "react";
import DiscountSlider from "./DiscountSlider";
import UserReview from "./UserReview";

export default function FunFacts() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayButton = () => {
    const video = document.getElementById("video");
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="max-w-[1110px] mx-auto py-24">
      {/* Video Section */}
      <div className="mb-8 px-4">
        <div className="relative w-full h-0 pb-[56.25%]">
          {/* 16:9 aspect ratio */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black max-h-[562px] rounded-3xl">
              <img
                src="https://i.ibb.co/Jd71pvR/background-image.png"
                alt="Video Thumbnail"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl"
              />
              <button className="absolute" onClick={handlePlayButton}>
                <img
                  src="https://i.ibb.co/7Yv1pmR/Frame-5.png"
                  alt="Play Button"
                  className="md:w-[110px] h-[70px] w-[70px] md:h-[110px] shadow-2xl hover:scale-125 transition-transform"
                />
              </button>
            </div>
          )}
          <video
            id="video"
            className={`absolute inset-0 w-full h-full ${
              isPlaying ? "block" : "hidden"
            } rounded-3xl`}
            controls
            onEnded={() => setIsPlaying(false)}
          >
            <source src="/assets/Videos/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Slider and User Review Section */}
      <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-8">
        <div className="flex-1 md:w-[40%]">
          <DiscountSlider />
        </div>
        <div className="flex-1 md:w-[60%]">
          <UserReview />
        </div>
      </div>
    </section>
  );
}
