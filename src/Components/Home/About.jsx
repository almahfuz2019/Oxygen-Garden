import React from "react";

const About = () => {
  return (
    <section className="about relative bg-primary text-white py-24">
      <div className="container max-w-screen-xl mx-auto px-4 ">
        <div className="flex flex-col lg:flex-row gap-20 items-center justify-between">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <div className="flex items-center md:gap-5 gap-3">
              <h1 className="text-3xl mb-4 font-semibold Inter"> About Us </h1>
              <div className="md:w-60 w-32 h-[1px] bg-white"></div>
            </div>
            <p className="lg:text-6xl text-5xl font-extrabold Circular-Std">
              We believe in <br className="lg:block hidden" /> your trust
            </p>
            <p className="text-lg md:text-xl mb-6 mt-8">
              Nunc convallis semper justo quis tempor. Praesent molestie, lorem
              sed imperdiet tempor, libero urna semper urna, facilisis vulputate
              velit arcu vitae mi. Donec ac nisi ex. Nunc convallis facilisis
              vulputate velit arcu vitae mi. Donec ac nisi ex. Nunc
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-8 lg:max-w-[366px] mt-10">
              <div>
                <div className="bg-[#01BB74] p-4 inline-block rounded-lg">
                  <img src="https://i.ibb.co/ByhQF6z/Database.png" alt="" />
                </div>
                <p className="text-white font-semibold text-lg Inter mt-2">
                  Lorem ipsum
                </p>
              </div>
              <div>
                <div className="bg-[#01BB74] p-4 inline-block rounded-lg">
                  <img src="https://i.ibb.co/ByhQF6z/Database.png" alt="" />
                </div>
                <p className="text-white font-semibold text-lg Inter mt-2">
                  Lorem ipsum
                </p>
              </div>
              <div>
                <div className="bg-[#01BB74] p-4 inline-block rounded-lg">
                  <img src="https://i.ibb.co/ByhQF6z/Database.png" alt="" />
                </div>
                <p className="text-white font-semibold text-lg Inter mt-2">
                  Lorem ipsum
                </p>
              </div>
              <div>
                <div className="bg-[#01BB74] p-4 inline-block rounded-lg">
                  <img src="https://i.ibb.co/ByhQF6z/Database.png" alt="" />
                </div>
                <p className="text-white font-semibold text-lg Inter mt-2">
                  Lorem ipsum
                </p>
              </div>
            </div>
          </div>
          {/* Image Content */}
          <div className="lg:w-1/2 mt-8 md:mt-0">
            <img
              src="https://i.ibb.co/s6V738C/4e86d4d22ece26b80277be1ef7332107.jpg"
              alt="About Us"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
      <div className="about-bg-clip"></div>
    </section>
  );
};

export default About;
