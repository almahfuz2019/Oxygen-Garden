import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative h-screen mb-40 bg-no-repeat bg-bottom md:bg-cover -mt-36 md:-mt-28"
      style={{
        backgroundImage: "url('https://i.ibb.co/QN9zsvb/Frame-66.png')",
      }} 
    >
      <div className="container mx-auto absolute left-0 right-0 bottom-0 pb-[40vh] md:pb-[53vh] lg:pb-[60vh]">
        <header>
          <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight text-center text-white Circular-Std">
            Quality matters <br /> specially on what we eat
          </h1>
          <p className="text-xl md:text-2xl font-normal Ubuntu leading-relaxed text-white text-center mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed
            do eiusmod tempor incididunt
          </p>
        </header>
        {/* <figure className="flex justify-center">
          <img src="https://i.ibb.co/7S458xx/pngwing-com-2-2.png" alt="Description of image" />
        </figure> */}
      </div>
    </section>
  );
};

export default HeroSection;
