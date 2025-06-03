"use client";

import React from "react";

const Navbar = ({ role }) => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Visiting Management System</div>
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="hover:underline">
            Home
          </a>
        </li>
        {role === "ADMIN" && (
          <>
            <li>
              <a href="/dashboard/admin" className="hover:underline">
                Admin Dashboard
              </a>
            </li>
            <li>
              <a href="/reports" className="hover:underline">
                Reports
              </a>
            </li>
          </>
        )}
        {role === "USER" && (
          <>
            <li>
              <a href="/dashboard/user" className="hover:underline">
                User Dashboard
              </a>
            </li>
            <li>
              <a href="/visitors" className="hover:underline">
                Visitors
              </a>
            </li>
          </>
        )}
        {!role && (
          <>
            <li>
              <a href="/auth/login" className="hover:underline">
                Login
              </a>
            </li>
            <li>
              <a href="/auth/register" className="hover:underline">
                Register
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
