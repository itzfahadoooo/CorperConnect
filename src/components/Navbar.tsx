"use client";

import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import MobileMenu from "./MobileMenu";

import { useAuth } from "@/contexts/AuthContext";

import { useUser } from "@/contexts/UserContext";

export default function Navbar() {

  const { user } = useAuth();
  const { userData, loading } = useUser();

  const initials = user?.displayName
    ? user.displayName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "NA";

  return (
    <nav className="flex items-center justify-between px-4 py-4 md:px-6 lg:px-8 shadow-md sticky top-0 bg-white z-50">
      <div className="max-w-[95rem] mx-auto flex items-center justify-between w-full">
        {/* Logo */}

        <div className="flex items-center">
          <Link to="home" className="flex items-center gap-2 cursor-pointer">
            <div className="relative h-12 w-16">
              <img src={logo} alt="" />
            </div>
            <span className="text-2xl font-bold text-[#008000]">
              CopperConnect
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center space-x-8 md:flex">
          <Link
            to="features"
            className="text-base font-medium text-gray-800 hover:text-green-600 cursor-pointer"
          >
            Features
          </Link>

          <Link
            to="how-it-works"
            className="text-base font-medium text-gray-800 hover:text-green-600 cursor-pointer"
          >
            How it works
          </Link>
          <Link
            to="testimonials"
            className="text-base font-medium text-gray-800 hover:text-green-600 cursor-pointer"
          >
            Testimonials
          </Link>
          <Link
            to="faq"
            className="text-base font-medium text-gray-800 hover:text-green-600 cursor-pointer"
          >
            Faq
          </Link>
        </div>

        {/* User Profile OR Auth Buttons */}
        <div className="hidden items-center space-x-4 md:flex">
          {loading ? null : user && userData ? (
            // Show profile pic or initials
            user?.photoURL ? (
              <img
                src={user.photoURL}
                alt={user.displayName || "User Avatar"}
                className="w-10 h-10 rounded-full object-cover"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-600 font-medium">{initials}</span>
              </div>
            )
          ) : (
            <>
              <RouterLink to="/login">
                <Button
                  variant="outline"
                  className="border-[#008000] text-[#008000] hover:bg-gray-200 cursor-pointer"
                >
                  Login
                </Button>
              </RouterLink>
              <RouterLink to="/signup">
                <Button className="bg-[#008000] text-white hover:bg-[#228B22] cursor-pointer">
                  Sign Up
                </Button>
              </RouterLink>
            </>
          )}
        </div>
      </div>
      <MobileMenu />
    </nav>
  );
}
