/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import leftArrow from "../../assets/Images/left_arrow.png"; // Replace with your image path
import rightArrow from "../../assets/Images/right_arrow.png"; // Replace with your image path

const slidesData = [
  {
    imgSrc: "https://i.ibb.co/SKcmX3C/Group-1.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis veniam voluptatibus vero obcaecati, dolorum, optio blanditiis omnis dignissimos provident fuga consequuntur, voluptatem atque! Labore natus culpa ipsum similique, quod et?",
    userImg:
      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    userName: "Al Mahfuz",
    userTitle: "Web Developer",
  },
  {
    imgSrc: "https://i.ibb.co/SKcmX3C/Group-1.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis veniam voluptatibus vero obcaecati, dolorum, optio blanditiis omnis dignissimos provident fuga consequuntur, voluptatem atque! Labore natus culpa ipsum similique, quod et?",
    userImg:
      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    userName: "Al Mahfuz",
    userTitle: "Web Developer",
  },
  {
    imgSrc: "https://i.ibb.co/SKcmX3C/Group-1.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis veniam voluptatibus vero obcaecati, dolorum, optio blanditiis omnis dignissimos provident fuga consequuntur, voluptatem atque! Labore natus culpa ipsum similique, quod et?",
    userImg:
      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    userName: "Al Mahfuz",
    userTitle: "Web Developer",
  },
  {
    imgSrc: "https://i.ibb.co/SKcmX3C/Group-1.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis veniam voluptatibus vero obcaecati, dolorum, optio blanditiis omnis dignissimos provident fuga consequuntur, voluptatem atque! Labore natus culpa ipsum similique, quod et?",
    userImg:
      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    userName: "Al Mahfuz",
    userTitle: "Web Developer",
  },
  {
    imgSrc: "https://i.ibb.co/SKcmX3C/Group-1.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis veniam voluptatibus vero obcaecati, dolorum, optio blanditiis omnis dignissimos provident fuga consequuntur, voluptatem atque! Labore natus culpa ipsum similique, quod et?",
    userImg:
      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    userName: "Al Mahfuz",
    userTitle: "Web Developer",
  },
  // Add more slide objects here as needed
];

const UserReview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section className="lg:w-[635px] md:w-[100vw]  lg:pr-0  ">
      <div className="navigation-wrapper relative ">
        <div ref={sliderRef} className="keen-slider  overflow-hidden">
          {slidesData.map((slide, index) => (
            <div
              key={index}
              className="keen-slider__slide  flex items-center justify-center "
            >
              <div className="bg-secondary mx-4 pb-24 text-white p-8 text-center rounded-3xl">
                <div className="flex justify-center items-center mb-6">
                  <img src={slide.imgSrc} alt="Slide image" />
                </div>
                <p className="text-xl font-normal Ubuntu text-[#F5F5F5]">
                  {slide.text}
                </p>
                <div className="flex items-center gap-5 justify-center mt-12">
                  <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-16 rounded-full ring ring-offset-2">
                      <img src={slide.userImg} alt="User" />
                    </div>
                  </div>
                  <div>
                    <h5 className="text-xl text-left font-medium">
                      {slide.userName}
                    </h5>
                    <p className="text-base font-normal">{slide.userTitle}</p>
                  </div>
                </div>
                <div className="bg-secondary">
                  {" "}
                  {loaded && instanceRef.current && (
                    <div className="dots flex justify-center mt-12">
                      {[
                        ...Array(
                          instanceRef.current.track.details.slides.length,
                        ).keys(),
                      ].map((idx) => (
                        <button
                          key={idx}
                          onClick={() => instanceRef.current?.moveToIdx(idx)}
                          className={
                            "dot w-2.5 h-2.5 mx-1 rounded-full " +
                            (currentSlide === idx
                              ? "bg-green-500"
                              : "bg-gray-300")
                          }
                        ></button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center bg-red-400 ">
          <div className="absolute bottom-14 w-full flex justify-between px-8 ">
            {loaded && instanceRef.current && (
              <div className="text-white   w-full pb-4 flex justify-between">
                <Arrow
                  className="left-0 "
                  left
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  disabled={currentSlide === 0}
                />
                <Arrow
                  className="right-0 "
                  onClick={(e) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 1
                  }
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

function Arrow(props) {
  const disabled = props.disabled ? " opacity-50 cursor-not-allowed" : "";
  return (
    <button
      onClick={props.onClick}
      className={`rounded-full ${
        props.left ? "mr-auto md:w-auto w-10" : "ml-auto w-10 md:w-auto"
      } ${disabled}`}
      disabled={props.disabled}
      aria-label={props.left ? "Previous Slide" : "Next Slide"}
    >
      <img
        src={props.left ? leftArrow : rightArrow}
        alt={props.left ? "Previous" : "Next"}
      />
    </button>
  );
}

export default UserReview;
