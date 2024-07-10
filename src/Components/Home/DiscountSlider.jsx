/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Link } from "react-router-dom";

const DiscountSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 1,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <section className=" lg:w-auto mx-auto md:w-[100vw] ">
      <div className="navigation-wrapper relative ">
        <div ref={sliderRef} className="keen-slider overflow-hidden">
          {/* Slide 1 */}
          <div className="keen-slider__slide  flex items-center justify-center rounded-3xl px-4">
            <div className="flex items-start justify-between w-full ">
              <div className="overflow-hidden bg-cover bg-no-repeat rounded-3xl h-auto w-full  bg-[url('https://i.ibb.co/BPwRJPR/C-mo-hacer-una-buena-Lista-de-supermercado-no-gastes-de-m-s-1.png')] pt-52 lg:pt-72">
                <div className="discountGradient pb-5 px-8 ">
                  <div>
                    <p className="font-normal text-lg text-white -mb-3 pt-20">
                      Weekend offer - Raw chicken meat
                    </p>
                    <h5 className="text-[50px] font-extrabold text-white">
                      5% Discount
                    </h5>
                    <div className="flex justify-between items-center">
                      <Link
                        to=""
                        className="font-medium text-xl leading-[26px] text-[#21F3A3] underline underline-offset-4"
                      >
                        Click here
                      </Link>
                      <div>
                        {loaded && instanceRef.current && (
                          <div className="dots flex justify-center mt-4">
                            {[
                              ...Array(
                                instanceRef.current.track.details.slides.length,
                              ).keys(),
                            ].map((idx) => {
                              return (
                                <button
                                  key={idx}
                                  onClick={() => {
                                    instanceRef.current?.moveToIdx(idx);
                                  }}
                                  className={
                                    "dot w-2.5 h-2.5 mx-1 rounded-full " +
                                    (currentSlide === idx
                                      ? "bg-green-500"
                                      : "bg-gray-300")
                                  }
                                ></button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Slide 2 */}
          <div className="keen-slider__slide flex items-center justify-center rounded-3xl px-4">
            <div className="flex items-start justify-between w-full">
              <div className="overflow-hidden bg-cover bg-no-repeat rounded-3xl h-auto w-full bg-[url('https://i.ibb.co/BPwRJPR/C-mo-hacer-una-buena-Lista-de-supermercado-no-gastes-de-m-s-1.png')] pt-52">
                <div className="discountGradient pb-5 px-8">
                  <div>
                    <p className="font-normal text-lg text-white -mb-3">
                      Weekend offer - Raw chicken meat
                    </p>
                    <h5 className="text-[50px] font-extrabold text-white">
                      5% Discount
                    </h5>
                    <div className="flex justify-between items-center">
                      <Link
                        to=""
                        className="font-medium text-xl leading-[26px] text-[#21F3A3] underline underline-offset-4"
                      >
                        Click here
                      </Link>
                      <div>
                        {loaded && instanceRef.current && (
                          <div className="dots flex justify-center mt-4">
                            {[
                              ...Array(
                                instanceRef.current.track.details.slides.length,
                              ).keys(),
                            ].map((idx) => {
                              return (
                                <button
                                  key={idx}
                                  onClick={() => {
                                    instanceRef.current?.moveToIdx(idx);
                                  }}
                                  className={
                                    "dot w-2.5 h-2.5 mx-1 rounded-full " +
                                    (currentSlide === idx
                                      ? "bg-green-500"
                                      : "bg-gray-300")
                                  }
                                ></button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Slide 3 */}
          <div className="keen-slider__slide flex items-center justify-center rounded-3xl px-4">
            <div className="flex items-start justify-between w-full">
              <div className="overflow-hidden bg-cover bg-no-repeat rounded-3xl h-auto w-full bg-[url('https://i.ibb.co/BPwRJPR/C-mo-hacer-una-buena-Lista-de-supermercado-no-gastes-de-m-s-1.png')] pt-52">
                <div className="discountGradient pb-5 px-8">
                  <div>
                    <p className="font-normal text-lg text-white -mb-3">
                      Weekend offer - Raw chicken meat
                    </p>
                    <h5 className="text-[50px] font-extrabold text-white">
                      5% Discount
                    </h5>
                    <div className="flex justify-between items-center">
                      <Link
                        to=""
                        className="font-medium text-xl leading-[26px] text-[#21F3A3] underline underline-offset-4"
                      >
                        Click here
                      </Link>
                      <div>
                        {loaded && instanceRef.current && (
                          <div className="dots flex justify-center mt-4">
                            {[
                              ...Array(
                                instanceRef.current.track.details.slides.length,
                              ).keys(),
                            ].map((idx) => {
                              return (
                                <button
                                  key={idx}
                                  onClick={() => {
                                    instanceRef.current?.moveToIdx(idx);
                                  }}
                                  className={
                                    "dot w-2.5 h-2.5 mx-1 rounded-full " +
                                    (currentSlide === idx
                                      ? "bg-green-500"
                                      : "bg-gray-300")
                                  }
                                ></button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Add more slides as needed */}
        </div>
      
      </div>
    </section>
  );
};



export default DiscountSlider;
