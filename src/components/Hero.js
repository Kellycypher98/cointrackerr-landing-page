import { PlayIcon } from "@heroicons/react/solid";
import React from "react";

function Hero() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    // parent div
    <main className="container mt-4 md:flex flex-row-reverse justify-between items-center py-10">
      <div className="phone-cont md:w-2/4  flex justify-center">
        <img
          src="./images/cointrackerr-mobile.png"
          alt="hero"
          className="w-80"
        />
      </div>

      {/* text section */}
      <div className="text-center sm:text-left md:max-w-[40%]">
        <h1 className="font-bold text-4xl leading-[60px]">
          Know where your money is going.
        </h1>
        <p className="mt-4 text-[16px] leading-[28px] font-bold">
          Track how you are spending every dollar, identify unwanted
          subscriptions, and discover trends in your spending to out how to
          improve
        </p>
        <div className="mt-8 flex items-center justify-around sm:justify-start sm:space-x-8">
          <a
            href="https://cointrackerr.netlify.app/"
            className="primary-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </a>
          <p
            className="font-semibold text-primary whitespace-nowrap flex items-center underline hover:scale-110 active:scale-95 duration-200 cursor-pointer "
            onClick={toggleModal}
          >
            <PlayIcon className="h-8" onClick={toggleModal} />
            Watch the Video
          </p>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="bg-white p-10 rounded-lg shadow-lg ">
            <img
              src="./images/cointrackerr 2.gif"
              alt=""
              style={{ height: "auto" }}
            />
            <button className="mt-4 primary-button" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default Hero;
