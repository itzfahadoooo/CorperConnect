import { useState } from "react";

import { Link } from "react-scroll";
import { Button } from "./ui/button";
import { Link as RouterLink } from "react-router-dom";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>


      {/* Mobile Menu Button */}
      <button

        className="md:hidden"
        
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close Menu" : "Open Menu"}
      >
        <svg
          className="h-6 w-6 text-gray-800"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>{" "}
      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 top-16 z-10 w-full bg-white p-4 shadow-lg md:hidden">
          <div className="flex flex-col space-y-4">
            <Link
              to="features"
              className="text-base font-medium text-gray-800 hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              to="how-it-works"
              className="text-base font-medium text-gray-800 hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              How it works
            </Link>
            <Link
              to="testimonials"
              className="text-base font-medium text-gray-800 hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              to="faq"
              className="text-base font-medium text-gray-800 hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              Faq
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <RouterLink
                to="/login"
                className="text-base font-medium text-gray-800 "
              >
                <Button
                  variant="outline"
                  className="w-full border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Button>
              </RouterLink>
              <RouterLink
                to="/signup"
                className="text-base font-medium text-white "
              >
                <Button
                  className="w-full bg-green-600 text-white hover:bg-green-700"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Button>
              </RouterLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
