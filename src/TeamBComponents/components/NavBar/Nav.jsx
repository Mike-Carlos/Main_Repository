import React, { useContext, useEffect, useState } from "react";
import logo from "../../../assets/TeamBassests/companyLogo.png";

//import react icon
import { GiHamburgerMenu } from "react-icons/gi";
import NavSideBar from "./NavSideBar";
import { Link } from "react-router-dom";

//import profile logo
import profileLogo from "../../../assets/TeamBassests/profile.svg";

//import react icon
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { NavBarContext } from "../context/NavBarContext";

const Nav = () => {
  const {
    header,
    dashBoardShow,
    profileShow,
    courseListShow,
    showDropDown,
    setShowDropDown,
    showLogout,
    show,
    setShow,
    showLogo,
    showDashBoard,
    showProfile,
    showCourseList,
  } = useContext(NavBarContext);

  return (
    <>
      <nav className="fixed w-full top-0 z-[100] ">
        <div
          className={
            header
              ? "relative flex justify-between items-center lg:justify-normal bg-[#BCE8B1] h-[69px] transition-all "
              : "relative flex justify-between items-center lg:justify-normal bg-transparent h-[69px] transition-all "
          }>
          <Link to="/teambdashboard">
            <img
              className="  ml-10 xl:w-[171.67px] xl:h-[50px] lg:h-[5rem] xl:ml-[95px] py-3 xl:py-1"
              src={logo}
              alt="tsukidenLogo"
              width={171.67}
              height={50}
              onClick={showLogo}
            />
          </Link>
          <div className="hidden lg:flex lg:items-end xl:w-[300px] lg:pl-10 lg:min-w-[280px] lg:justify-between">
            {/* 1/11/2024 */}
            <Link to="/teambdashboard" onClick={showDashBoard}>
              <ul
                className={
                  dashBoardShow
                    ? "font-semibold text-[#116211] text-center p-1 text-shadow transition-all"
                    : "font-light text-shadow p-1  hover:text-[#116211] transition-all hover:bg-opacity-[50%] hover:font-semibold "
                }>
                DASHBOARD
              </ul>
            </Link>
            <Link to="/teambcourselist" onClick={showCourseList}>
              <ul
                className={
                  courseListShow
                    ? "font-semibold text-[#116211]  text-center p-1 text-shadow transition-all"
                    : "font-light text-shadow p-1  hover:text-[#116211] hover:bg-opacity-[50%] hover:font-semibold transition-all"
                }>
                COURSE LIST
              </ul>
            </Link>
          </div>
          <div className="relative flex items-center px-3 lg:hidden">
            <GiHamburgerMenu
              className="text-[2rem]"
              onClick={() => setShow((prev) => !prev)}
            />
            {show && <NavSideBar />}
          </div>
          <div className="drop-shadow-lg shadow-lg  bg-[#EBE9E9] cursor-pointer lg:text-[.9rem] lg:w-[160px] 2xl:w-[193px] h-[7vh] rounded-md absolute right-5 hidden lg:flex justify-between items-center p-1 text-[#126912]">
            <img
              src={profileLogo}
              alt=""
              className="h-[7vh] p-1"
              onClick={() => setShowDropDown((prev) => !prev)}
            />
            <p
              onClick={() => setShowDropDown((prev) => !prev)}
              className=" text-shadow">
              Hi, Judes!
            </p>
            <span
              onClick={() => setShowDropDown((prev) => !prev)}
              className="cursor-pointer">
              {showDropDown ? <FaChevronUp /> : <FaChevronDown />}
            </span>
            {showDropDown && (
              <div className=" absolute right-0 top-12 w-[8vw] flex flex-col justify-center items-center border-solid border-2 border-[#116211]">
                <Link
                  to="/teambprofile"
                  onClick={showProfile}
                  className="w-full text-center ">
                  <p
                    className={
                      profileShow
                        ? showDropDown
                          ? "font-light text-[#000000] text-center p-1 bg-white text-shadow hover:bg-[#116211] hover:bg-opacity-[50%] hover:font-semibold hover:text-[#fff]"
                          : "font-semibold text-[#fff]  text-center p-1 text-shadow "
                        : showDropDown
                        ? "font-light text-[#000000] text-center p-1 bg-white text-shadow hover:bg-[#116211] hover:bg-opacity-[50%] hover:font-semibold hover:text-[#fff]"
                        : "font-semibold text-[#fff]  text-center p-1 text-shadow "
                    }>
                    PROFILE
                  </p>
                </Link>
                <Link

                  to="/login"

                

                  onClick={showLogout}
                  className="w-full text-center ">
                  <p
                    className={
                      profileShow
                        ? showDropDown
                          ? "font-light text-[#000000] text-center p-1 bg-white text-shadow hover:bg-[#116211] hover:bg-opacity-[50%] hover:font-semibold hover:text-[#fff]"
                          : "font-semibold text-[#fff]  text-center p-1 text-shadow "
                        : showDropDown
                        ? "font-light text-[#000000] text-center p-1 bg-white text-shadow hover:bg-[#116211] hover:bg-opacity-[50%] hover:font-semibold hover:text-[#fff]"
                        : "font-semibold text-[#fff]  text-center p-1 text-shadow "
                    }>
                    LOGOUT
                  </p>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};


export default Nav;
//1/23/2024

