import React from "react";
import "../index.css";
import { MenuIcon } from "@heroicons/react/solid";
import { Link as ScrollLink } from "react-scroll";
function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="container flex justify-between shadow-md  h-20 ">
      <a href="h.com" className="flex flex-row gap-1 items-center">
        <img src="./images/moneybag.png" alt="" className="h-8" />
        <p className="font-bold">cointrackerr</p>
      </a>

      <div className="flex items-center">
        <MenuIcon className="h-10 lg:hidden" onClick={toggleMobileMenu} />
        <div
          className={`fixed inset-y-0 right-0 transform lg:hidden transition-transform ease-in-out duration-300 w-2/4 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="bg-white p-4 h-full relative">
            {/* Close Button */}
            <button
              className="text-gray-500 hover:text-gray-700 absolute bottom-0 left-10 border px-5 item-center rounded-full font-bold bg-black "
              onClick={closeMobileMenu}
            >
              close
            </button>
            {/* Mobile menu items */}

            <div className="flex flex-col text-center space-y-2 ">
              <ScrollLink
                to="features-section"
                smooth={true}
                duration={500}
                className="nav-item"
              >
                Features
              </ScrollLink>
              <ScrollLink
                to="get-started"
                smooth={true}
                duration={500}
                className="nav-item"
              >
                Get started
              </ScrollLink>
              <ScrollLink
                to="testimonial"
                smooth={true}
                duration={500}
                className="nav-item"
              >
                Testimonial
              </ScrollLink>
              <ScrollLink
                to="footer"
                smooth={true}
                duration={500}
                className="nav-item"
              >
                Subscribe
              </ScrollLink>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-3 lg:space-x-8">
          <ScrollLink
            to="features-section"
            smooth={true}
            duration={500}
            className="nav-item"
          >
            Features
          </ScrollLink>
          <ScrollLink
            to="get-started"
            smooth={true}
            duration={500}
            className="nav-item"
          >
            Get started
          </ScrollLink>
          <ScrollLink
            to="testimonial"
            smooth={true}
            duration={500}
            className="nav-item"
          >
            Testimonial
          </ScrollLink>
          <ScrollLink
            to="footer"
            smooth={true}
            duration={500}
            className="nav-item"
          >
            Subscribe
          </ScrollLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
