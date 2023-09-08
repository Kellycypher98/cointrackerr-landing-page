import React from "react";

function BottomCTA() {
  return (
    <div className="container mt-28">
      <div className="max-w-[968px] m-auto p-5 rounded-[32px] bg-primary flex items-center flex-col md:flex-row justify-between">
        <div className="text-center md:text-left md:max-w-[55%] md:mx-6 lg:mx-10">
          <h3 className="text-[32px] font-semibold leading-[150%] text-white pb-20">
            Join our growing community of smart spenders! Start today and take
            charge of your financial future.
          </h3>
          <a
            href="https://cointrackerr.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button-white mt-12 md:mt-8 lg:mt-12 "
          >
            Get This
          </a>
        </div>
        <img
          className="mt-6 md:mt-0 sm:w-[80%] md:w-[40%] drop-shadow-2xl"
          src="./images/cointracker-mockup.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default BottomCTA;
