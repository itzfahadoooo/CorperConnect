"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="flex items-center justify-between px-4 py-4 md:px-6 lg:px-8 shadow-md ">
      <div className="max-w-[95rem] mx-auto flex items-center justify-between w-full">
        {/* Logo */}
        
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
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
            to="/"
            className="text-base font-medium text-gray-800 hover:text-green-600"
          >
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-base font-medium text-gray-800 hover:text-green-600">
              Industries
              <ChevronDown className="h-4 w-4 relative top-[2px]" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link to="/industries/technology" className="w-full">
                  Technology
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/industries/healthcare" className="w-full">
                  Healthcare
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/industries/finance" className="w-full">
                  Finance
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/industries/education" className="w-full">
                  Education
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            to="/blog"
            className="text-base font-medium text-gray-800 hover:text-green-600"
          >
            Blog
          </Link>
          <Link
            to="/pricing"
            className="text-base font-medium text-gray-800 hover:text-green-600"
          >
            Pricing
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden items-center space-x-4 md:flex">
          <Button
            variant="outline"
            className="border-[#008000] text-[#008000] hover:bg-gray-200 cursor-pointer"
          >
            <Link to="/login" className="text-base font-medium text-gray-800 ">
              Login
            </Link>
          </Button>
          <Button className="bg-[#008000] text-white hover:bg-green-600 cursor-pointer">
            <Link to="/signup" className="text-base font-medium text-white ">
              Sign Up
            </Link>
          </Button>
        </div>

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
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute left-0 top-16 z-10 w-full bg-white p-4 shadow-lg md:hidden">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-base font-medium text-gray-800 hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-gray-800 hover:text-green-600">
                  Industries
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="mt-2 space-y-2 pl-4">
                  <Link
                    to="/industries/technology"
                    className="block text-sm text-gray-600 hover:text-green-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Technology
                  </Link>
                  <Link
                    to="/industries/healthcare"
                    className="block text-sm text-gray-600 hover:text-green-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Healthcare
                  </Link>
                  <Link
                    to="/industries/finance"
                    className="block text-sm text-gray-600 hover:text-green-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Finance
                  </Link>
                  <Link
                    to="/industries/education"
                    className="block text-sm text-gray-600 hover:text-green-600"
                    onClick={() => setIsOpen(false)}
                  >
                    Education
                  </Link>
                </div>
              </details>
              <Link
                to="/blog"
                className="text-base font-medium text-gray-800 hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/pricing"
                className="text-base font-medium text-gray-800 hover:text-green-600"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Button
                  variant="outline"
                  className="w-full border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Button>
                <Button
                  className="w-full bg-green-600 text-white hover:bg-green-700"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
