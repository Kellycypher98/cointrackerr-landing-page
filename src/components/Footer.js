import React from "react";
import { Element } from "react-scroll";
function Footer() {
  return (
    <div className="mt-24 pt-12 pb-8">
      <div className="container mb-12 text-center sm:text-left grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        <div className="mx-auto sm:ml-0">
          <a href="h.com" className="flex flex-row gap-1 items-center">
            <img src="./images/moneybag.png" alt="" className="h-8" />
            <p className="font-bold text-2xl">cointrackerr</p>
          </a>

          <div className="mt-4 flex justify-around">
            <a
              href="https://twitter.com/_kellyboateng"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              {" "}
              <img
                className="icon-button"
                src="./images/x-twitter.svg"
                alt=""
              />{" "}
            </a>

            <a
              href="https://www.linkedin.com/in/kelvin-boateng-945239198/"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <img className="icon-button" src="./images/linkedin.svg" alt="" />{" "}
            </a>

            <a
              href="https://github.com/Kellycypher98/CoinTrackerr.git"
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <img
                className="icon-button"
                src="./images/github-svgrepo-com.svg"
                alt=""
              />
            </a>
          </div>
        </div>

        <div>
          <h6 className="font-medium text-xl mb-4">Resources</h6>
          <Link text="About Us" />
          <Link text="Blog" />
          <Link text="Contact" />
          <Link text="FAQ" />
        </div>

        <div>
          <h6 className="font-medium text-xl mb-4">Misc.</h6>
          <Link text="Disclaimer" />
          <Link text="Financing" />
          <Link text="Privacy Policy" />
          <Link text="Terms of Service" />
        </div>

        <div className="lg:col-span-2">
          <Element name="footer">
            {" "}
            <h6 className="font-medium text-xl">Get to know first</h6>
          </Element>

          <div className="mt-9 border border-[#BCD0E5] rounded-md text-left">
            <input
              className="w-full p-2 bg-transparent outline-none"
              type="email"
              placeholder="Johndoe@email.com"
            />
          </div>
          <button className="primary-button mt-6">Subscribe now</button>
        </div>
      </div>

      <p className="text-center mt-12">💰Cointrackerr. All Right Reserved</p>
    </div>
  );
}

export default Footer;

export function Link({ text }) {
  return <p className="cursor-pointer mt-2">{text}</p>;
}
