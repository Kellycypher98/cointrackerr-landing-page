import React from "react";
import { Element } from "react-scroll";
function OurExperts() {
  return (
    <section className="container mt-28 text-center">
      <Element name="get-started">
        <h2 className="text-[32px] font-bold ">Easy to Use on all platforms</h2>
        <p className="mt-2 max-w-xl m-auto">
          Seamlessly access your finances from anywhere, anytime, on any device.
          Our Web app is designed for your convenience, whether you're on a
          desktop, mobile, or tablet.
        </p>

        <div className="pb-20">
          <img src="./images/cointracker-mockup.png" alt="product mockup" />
        </div>

        <a
          href="https://cointrackerr.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="primary-button"
        >
          Get Started
        </a>
      </Element>
    </section>
  );
}

export default OurExperts;
