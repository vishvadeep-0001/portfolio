import React from "react";
import HelloGif from "../../assets/HelloGif.gif";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section
      className="flex justify-center items-center h-auto lg:h-[100vh] pb-10 lg:pb-0 w-full bg-[#f9f9f9]"
      id="home"
    >
      <div className="flex flex-col space-y-7 max-w-[90%] md:max-w-[66rem]">
        <div className="flex flex-col-reverse justify-center items-center space-y-reverse space-y-10 lg:space-y-0 lg:flex-row mt-28 lg:gap-24">
          <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start space-y-5 max-w-[32rem]">
            <div>
              <span className="text-4xl md:text-5xl lg:text-6xl leading-tight text-[#2d2e32] font-bold">
                Full-Stack MERN Developer👋
              </span>
            </div>
            <div className="text-[#555] px-2 lg:px-0 text-center lg:text-start md:text-lg font-[Mulish,sans-serif] font-medium leading-relaxed">
              Hi, I'm Vishvadeep Sharma. A passionate FullStack Developer based
              in India. 📍
            </div>
            <div className="flex flex-row space-x-5 text-3xl text-black">
              <Link
                to="https://github.com/vishvadeep-0001"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-500"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </Link>
              <a
                href="https://www.linkedin.com/in/aryan-dahiya-a72320249"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-500"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 256 256"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M216,20H40A20,20,0,0,0,20,40V216a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V40A20,20,0,0,0,216,20Zm-4,192H44V44H212ZM112,176V124a12,12,0,0,1,21.43-7.41A40,40,0,0,1,192,152v24a12,12,0,0,1-24,0V152a16,16,0,0,0-32,0v24a12,12,0,0,1-24,0ZM96,124v52a12,12,0,0,1-24,0V124a12,12,0,0,1,24,0ZM68,80A16,16,0,1,1,84,96,16,16,0,0,1,68,80Z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com/aryandahiya23"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-500"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center lg:ml-auto">
            <img
              src={HelloGif}
              alt="profile"
              className="h-80 w-80 rounded-full object-cover object-top"
            />
          </div>
        </div>

        {/* Tech Stack  */}
        <div className="py-10 lg:py-14 lg:relative max-w-[32rem] lg:max-w-full">
          <div className="lg:absolute flex flex-col justify-center items-center lg:justify-start space-y-6 lg:space-y-0 lg:flex-row w-full bottom-0">
            <div className="flex justify-center items-center lg:pr-8">
              <p className="text-[#2d2e32] font-[Mulish,sans-serif] min-w-max font-semibold py-2 lg:py-0 lg:pr-2 border-b-2 border-b-gray-500 lg:border-r-2 lg:border-r-gray-500 lg:border-b-0">
                Tech Stack
              </p>
            </div>
            <div className="flex flex-wrap gap-12 md:gap-16 justify-center items-center lg:flex-nowrap lg:justify-start lg:items-start lg:gap-0 lg:space-y-0 lg:flex-row lg:space-x-7">
              <div className="img-container flex">
                <img
                  src="https://skillicons.dev/icons?i=html,css"
                  alt="HTML CSS"
                  className="cursor-pointer mr-2"
                />
                <img
                  src="https://skillicons.dev/icons?i=js"
                  alt="JavaScript"
                  className="cursor-pointer mr-2"
                />
                <img
                  src="https://skillicons.dev/icons?i=bootstrap,tailwind"
                  alt="Tailwind Bootstrap"
                  className="cursor-pointer mr-2"
                />
              </div>

              <div className="img-container flex">
                <img
                  src="https://skillicons.dev/icons?i=react"
                  alt="React"
                  className="cursor-pointer mr-2"
                />
                <img
                  src="https://skillicons.dev/icons?i=nodejs,express"
                  alt="Node Express"
                  className="cursor-pointer mr-2"
                />
                <img
                  src="https://skillicons.dev/icons?i=mongodb"
                  alt="MongoDB"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
