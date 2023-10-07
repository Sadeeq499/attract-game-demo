import React from "react";
import logo from "../Images/attrackGameLogo.jpeg";

function SliderShow() {
  return (
    <div className=" ">
      <div className="relative rounded-lg block md:flex flex-wrap items-center bg-gray-100 shadow-xl min-h-72">
        {/* Logo on the left side */}
        <div className="">
          <img
            className=" sm:w-[400px] mx-auto  flex justify-center items-center md:w-[300px] h-[100%]"
            src={logo}
            alt="Logo"
          />
        </div>
        {/* Rest of your content */}
        <div className="w-full md:w-3/5 h-full flex  items-center bg-gray-100 rounded-lg">
          <div className="p-12 md:pr-24 md:pl-16 md:py-12">
            <p className="text-gray-600">
              <span className="text-gray-900">
                Attrack Game: Elevate Your Gaming Experience
              </span>{" "}
              Join the ranks of satisfied gamers worldwide with Attrack Game.
              Our cutting-edge platform delivers thrilling gaming adventures
              while ensuring seamless, secure transactions for players across
              the globe. Get ready to level up your gaming journey today!
            </p>
            <a
              className="flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900"
              href=""
            >
              <span>Learn more about our users</span>
              <span className="text-xs ml-1">&#x279c;</span>
            </a>
          </div>
          {/* <svg
            className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          > */}
          {/* <polygon points="50,0 100,0 50,100 0,100" />
          </svg> */}
        </div>
        {/* Buttons and other content */}
      </div>
      {/* Additional content below the hero section */}
      <div className="flex items-center pt-5 justify-center">
        <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100">
          <img
            className="w-full"
            src="https://stripe.com/img/v3/payments/overview/logos/kickstarter.svg"
            alt=""
            style={{ maxHeight: "60px" }}
          />
        </button>
        <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100">
          <img
            className="w-full"
            src="https://stripe.com/img/v3/payments/overview/logos/slack.svg"
            alt=""
            style={{ maxHeight: "60px" }}
          />
        </button>
        <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100">
          <img
            className="w-full"
            src="https://stripe.com/img/v3/payments/overview/logos/glossier.svg"
            alt=""
            style={{ maxHeight: "60px" }}
          />
        </button>
        <button className="px-2 opacity-50 hover:opacity-100 focus:opacity-100">
          <img
            className="w-full"
            src="https://stripe.com/img/v3/payments/overview/logos/charity_water.svg"
            alt=""
            style={{ maxHeight: "60px" }}
          />
        </button>
        <button className="px-2 opacity-100 hover:opacity-100 focus:opacity-100">
          <img
            className="w-full"
            src="https://stripe.com/img/v3/payments/overview/logos/missguided.svg"
            alt=""
            style={{ maxHeight: "60px" }}
          />
        </button>
      </div>
    </div>
  );
}

export default SliderShow;
