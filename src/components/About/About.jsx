import React from "react";
import AboutGif from "../../assets/AboutGif.gif"

const About = () => {
  return (
    <section
      className="flex justify-center items-center h-auto lg:h-[100vh] pb-10 lg:pb-0 w-full bg-[#f9f9f9]"
      id="about"
    >
      <div
        class="flex justify-center items-center lg:py-20 bg-[#fff]"
        id="about"
      >
        <div class="flex flex-col justify-center items-center lg:justify-normal lg:items-start lg:flex-row max-w-[90%] md:max-w-[66rem]">
          <div class="flex pt-1 pb-10 lg:pb-0 lg:pt-0 justify-center lg:justify-normal w-full lg:pl-7 lg:w-1/2">
            <img
              src={AboutGif}
              alt="about image"
              class="w-[90%] h-auto md:h-80 md:w-[420px] rounded-xl border-4 border-l-violet-200 border-b-lime-200 border-r-orange-200 border-t-green-200"
            />
          </div>
          <div class="flex flex-col md:max-w-[36rem] lg:w-1/2">
            <span class="text-[#147efb] font-bold mb-3 lg:mb-1.5 text-center lg:text-start">
              ABOUT ME
            </span>
            <span class="text-2xl font-extrabold text-[#2d2e32] px-2 lg:px-0 mb-5 lg:mb-3 text-center lg:text-start">
              A dedicated Full-Stack MERN Developer based in India 📍
            </span>
            <p class="font-[Mulish,sans-serif] font-medium text-[#767676] text-center lg:text-start">
              I'm a full-stack developer with expertise in HTML, CSS,
              JavaScript, React JS, Node JS, Express, and MongoDB. I specialize
              in creating responsive user interfaces and building robust
              server-side applications with secure APIs. My database management
              skills include designing scalable architectures with MongoDB.
              Contributing to various projects highlights my problem-solving
              abilities and commitment to quality. Engaged in the open-source
              community, I am also a team player who thrives in collaborating
              with cross-functional teams to produce outstanding web
              applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
