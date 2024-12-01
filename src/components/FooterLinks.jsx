import React from "react";
import { NavLink } from "react-router-dom";
import navConstants from "../constants/navStrings";

const navlinks = navConstants.NAVLINKS;

const FooterLinks = () => {
  return (
    <div>
      <h4 className="heading-lg text-primary mb-2">Links</h4>
      <div className="flex-1 flex items-center gap-x-1 gap-y-3 flex-wrap text-text-primary">
        {navlinks?.map(({ label, path }) => (
          <span className="w-[calc(50%-12px)]" key={path}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                `para-sm ${
                  isActive ? "active-route highlight" : "text-text-primary"
                } relative after:bg-primary after:absolute after:h-[2px] after:w-0 after:bottom-[-3px] after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer`
              }
            >
              {label}
            </NavLink>
          </span>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;
