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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="flex items-center justify-between px-4 py-4 md:px-6 lg:px-8">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full text-green-600"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"
                fill="currentColor"
              />
              <path
                d="M8.5 8C8.5 9.38 9.62 10.5 11 10.5C12.38 10.5 13.5 9.38 13.5 8C13.5 6.62 12.38 5.5 11 5.5C9.62 5.5 8.5 6.62 8.5 8Z"
                fill="currentColor"
              />
              <path
                d="M13 8C13 9.1 12.1 10 11 10C9.9 10 9 9.1 9 8C9 6.9 9.9 6 11 6C12.1 6 13 6.9 13 8Z"
                fill="white"
              />
              <path
                d="M16 8C16 9.1 15.1 10 14 10C12.9 10 12 9.1 12 8C12 6.9 12.9 6 14 6C15.1 6 16 6.9 16 8Z"
                fill="white"
              />
            </svg>
          </div>
          <span className="text-xl font-bold text-green-600">
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
          className="border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700 cursor-pointer"
        >
          Login
        </Button>
        <Button className="bg-green-600 text-white hover:bg-green-700 cursor-pointer">
          Sign Up
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
    </nav>
  );
}
