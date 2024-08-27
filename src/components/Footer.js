import React from "react";
import { NavLink } from "react-router-dom";
import Vector from "../imges/Vector.svg";
import Vector2 from "../imges/Vector2.svg";
import phone from "../imges/phone.png";
import mail from "../imges/message.png";
import location from "../imges/location.png";
import FooterLogo from "../imges/FooterLogo.png";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = (props) => {
  const { t, i18n } = useTranslation();
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  const phoneNumber = "+971543575745";
  return (
    <div className=" min-h-[40vh] bg-black relative">
      <img
        src={Vector}
        alt="logo"
        className=" sm:w-[100px] w-[90px] absolute"
      />

      <div
        className={
          i18n.language !== "ar"
            ? " flex flex-col sm:flex-row gap-5 w-[95%] sm:w-[85%] m-auto pt-10"
            : " flex flex-col sm:flex-row-reverse gap-5 w-[95%] sm:w-[85%] m-auto pt-10"
        }
      >
        <div
          className={
            i18n.language !== "ar"
              ? " flex items-center sm:items-start flex-col w-full sm:w-[30%]"
              : " flex items-center sm:items-end flex-col w-full sm:w-[30%]"
          }
        >
          <div className=" h-[100px] flex items-center">
            <div>
              <img src={FooterLogo} alt="FooterLogo" className="w-[170px]" />
            </div>
          </div>
          {/**-------------------- */}
          <div className=" flex items-center">
            <p
              className={
                i18n.language !== "ar"
                  ? " text-sm font-light sm:text-start text-center text-white"
                  : " text-sm font-light sm:text-end text-center text-white"
              }
            >
              {t(
                "We are CAF Sports Company, one of the leading companies in Egypt and the United Arab Emirates specialized in the field of sports construction and industrial flooring"
              )}
            </p>
          </div>
          <div className=" flex gap-3 mt-5 sm:pt-0 items-center">
            <a
              href="https://www.facebook.com/ConsultantFlooringCAF?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="w-[30px] h-[50px]  text-white" />
            </a>
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="w-[30px] h-[50px] text-white" />
            </a>
            <a
              href="tel:+971543575745"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPhone className="w-[30px] h-[50px] text-white" />
            </a>
          </div>
        </div>
        {/**-------------------- */}
        <div className=" flex items-center flex-col w-full sm:w-[30%]">
          <p className=" text-green-700 font-medium mt-4 text-lg">
            {t("Quick Links")}
          </p>
          <ul
          >
            <div className={
                  i18n.language === "en"
                    ? " flex flex-row sm:flex-col flex-wrap gap-3 justify-center"
                    : " flex flex-row-reverse sm:flex-col flex-wrap gap-3 justify-center "
                }>
              <div
                className={
                  i18n.language === "en"
                    ? " flex flex-row sm:flex-col gap-3 "
                    : " flex flex-row-reverse sm:flex-col gap-3  "
                }
              >
                <li className=" font-normal text-xs sm:text-sm text-[#ffffff]">
                  <NavLink
                    element={props.togol2}
                    onClick={topFunction}
                    className=""
                    to={"/CAF-SPORTS"}
                  >
                    {t("Home")}
                  </NavLink>
                </li>
                <li className="font-normal text-xs sm:text-sm text-[#ffffff]">
                  <NavLink onClick={topFunction} className=" " to={"/About"}>
                    {t("About Us")}
                  </NavLink>
                </li>

                <li className="font-normal text-xs sm:text-sm text-[#fff]">
                  <NavLink onClick={topFunction} className="" to={"/Projects"}>
                    {t("Our Projects")}
                  </NavLink>
                </li>
              </div>
              <div className={
                  i18n.language === "en"
                    ? " flex flex-row sm:flex-col gap-3"
                    : " flex flex-row-reverse sm:flex-col gap-3 "
                }>
                <li className="font-normal text-xs sm:text-sm text-[#fff]">
                  <NavLink onClick={topFunction} className="" to={"/Services"}>
                    {t("Services")}
                  </NavLink>
                </li>
                <li className="font-normal text-xs sm:text-sm text-[#fff]">
                  <NavLink onClick={topFunction} className="" to={"/Contact"}>
                    {t("Contact Us")}
                  </NavLink>
                </li>
              </div>
            </div>
          </ul>
        </div>
        {/**-------------------- */}
        <div className=" flex items-center flex-col w-full sm:w-[40%]">
          <p className="text-green-700 font-medium md:pr-[115px] mt-4 text-lg">
            {t("Reach Us")}
          </p>
          <ul
            className={
              i18n.language === "en"
                ? " flex flex-row flex-wrap mt-2 justify-center items-start sm:flex-col gap-2 sm:gap-5"
                : " flex flex-row flex-wrap mt-2 justify-center items-start sm:flex-col gap-2 sm:gap-5:"
            }
          >
            <div className="sm:ml-2 w-[100%] flex gap-2 justify-center">
              <img src={mail} alt="mail" className=" w-[20px] sm:w-[25px]" />
              <li className="font-normal text-xs text-start sm:w-[170px] text-[#fff]">
              <a href="mailto:sales_uae@caf-sports.com"
                  target="_blank"
                  rel="noopener noreferrer" >
              sales_uae@caf-sports.com
              </a>
              </li>
            </div>
            <div className="sm:ml-2 flex sm:gap-2 items-start">
              <img
                src={location}
                className=" w-[20px] sm:w-[25px]"
                alt="mail"
              />
              <li className="font-normal text-xs sm:text-sm text-start sm:w-[170px] text-[#fff]">
                United Arab Emirates
              </li>
            </div>
            <div className="sm:ml-2 flex gap-2 items-start text-start">
              <img src={phone} alt="mail" className=" w-[20px] sm:w-[25px]" />
              <li className="font-normal text-xs sm:text-sm sm:w-[170px] text-[#fff]">
                <a
                  href="tel:+971543575745"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (+971) 543575745
                </a>
              </li>
            </div>
            <div className=" flex flex-row gap-1 sm:flex-col flex-wrap justify-center">
              <div className="sm:ml-2 flex sm:gap-2 items-start">
                <img
                  src={location}
                  className=" w-[20px] sm:w-[25px]"
                  alt="mail"
                />
                <li className="font-normal text-xs sm:text-sm text-start sm:w-[170px] text-[#fff]">
                  Egypt
                </li>
              </div>
              <div className="sm:ml-2 flex gap-1 items-start text-start">
                <img src={phone} alt="mail" className=" w-[20px] sm:w-[25px]" />
                <li className="font-normal flex gap-1 flex-wrap text-xs sm:text-sm sm:w-[170px] text-[#fff]">
                  <a
                    href="tel:01141227755"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (+20) 01141227755
                  </a>
                  <br />
                  <a
                    href="tel:01126484032"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (+20) 01126484032
                  </a>
                </li>
              </div>
            </div>
          </ul>
        </div>
        {/**-------------------- */}
      </div>
      <div
        className={
          i18n.language === "en"
            ? "w-[80%] sm:w-[85%] m-auto h-[120px] sm:h-[100px] flex items-center justify-start"
            : "w-[80%] sm:w-[85%] m-auto h-[120px] sm:h-[100px] flex items-center justify-end"
        }
      >
        <p className=" text-sm sm:text-lg font-light text-white">
          {t(
            "Copyright © 2024 All rights reserved | This Website is made by Eslam Emam"
          )}
        </p>
      </div>
      <img
        src={Vector2}
        alt="logo"
        className=" sm:w-[100px] w-[90px] absolute bottom-0 right-0 "
      />
    </div>
  );
};

export default Footer;
