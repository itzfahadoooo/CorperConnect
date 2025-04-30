"use client";

import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Building,
  Map,
  Users,
  MessageSquare,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  PanelRightOpen,
  PanelRightClose,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "@/firebase/auth";
import { useAuth } from "@/contexts/AuthContext";
import logo from "@/assets/logo.png";

const Sidebar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const { user } = useAuth();

  const initials = user?.displayName
    ? user.displayName
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "NA";

  const navItems = [
    { name: "Overview", path: "/dashboard", icon: Home },
    { name: "Housing", path: "/dashboard/housing", icon: Building },
    { name: "Locations", path: "/dashboard/locations", icon: Map },
    { name: "Community", path: "/dashboard/community", icon: Users },
    { name: "Messages", path: "/dashboard/messages", icon: MessageSquare },
    { name: "Notifications", path: "/dashboard/notifications", icon: Bell },
    { name: "Settings", path: "/dashboard/settings", icon: Settings },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };

  useEffect(() => {
    // Dispatch custom event for the layout to listen to
    const event = new CustomEvent("sidebarToggle", { detail: { isCollapsed } });
    window.dispatchEvent(event);
  }, [isCollapsed]);

  return (
    <>

      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
        
          onClick={toggleMobileMenu}
          className="p-2 rounded-md bg-emerald-600 text-white"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Sidebar for desktop */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 bg-white border-r transform transition-all duration-300 ease-in-out lg:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } ${isCollapsed ? "w-20" : "w-64"}`}
      >
        <div
          className={`h-full flex flex-col ${isCollapsed && "items-center"}`}
        >
          {/* Logo */}

          <div className="p-4 border-b">
            <Link to="/dashboard" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <img src={logo} alt="" />
              </div>
              {!isCollapsed && (
                <span className="font-bold text-lg text-[#008000]">
                  CorperConnect
                </span>
              )}
            </Link>
          </div>

          {/* User info */}
          <div className="p-4 border-b">
            <div
              className={`flex items-center ${
                isCollapsed ? "justify-center" : "gap-3"
              }`}
            >
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={user.displayName || "User Avatar"}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600 font-medium">{initials}</span>
                </div>
              )}

              {!isCollapsed && (
                <div>
                  <p className="font-medium text-sm">
                    {user?.displayName || "No Name"}
                  </p>
                  <p className="text-xs text-gray-500">
                    Lagos State • 2023 Batch A
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const Icon = item.icon;

                return (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm ${
                        isActive
                          ? "bg-emerald-50 text-emerald-700 font-medium"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      title={isCollapsed ? item.name : ""}
                    >
                      <Icon size={18} />
                      {!isCollapsed && <span>{item.name}</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Collapse Toggle */}
          <div className="p-4 border-t ">
            <button
              onClick={toggleCollapse}
              className="flex cursor-pointer items-center justify-center w-full gap-3 px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100"
            >
              {isCollapsed ? (
                <PanelRightOpen size={18} />
              ) : (
                <>
                  <PanelRightClose size={18} />
                  {/* <span>Collapse Sidebar</span> */}
                </>
              )}
            </button>
          </div>

          {/* Logout */}
          <div
            className="p-4 border-t"
            onClick={(e) => {
              e.preventDefault();
              handleLogout();
              setIsMobileMenuOpen(false);
            }}
            aria-label="Logout"
          >
            <Link
              to="/logout"
              className="flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-100"
              title={isCollapsed ? "Logout" : ""}
            >
              <LogOut size={18} />
              {!isCollapsed && <span>Logout</span>}
            </Link>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
