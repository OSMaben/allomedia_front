import React, { useState } from "react";
import Navbar from "./Header";
const Hero = () => {
    return (
        <>
            <Navbar />

            <div className="relative z-10 bg-[#090E34] pb-[120px] pt-[120px] md:pt-[150px] lg:pb-[150px] lg:pt-[180px] h-[100vh]">
                <div className="absolute right-0 top-0 z-[-1] h-full w-1/2 bg-primary"></div>
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center -mx-4">
                        <div className="w-full px-4">
                            <div className="mx-auto max-w-[550px] text-center">
                                  <span className="block mb-3 text-lg font-medium text-white">
                                    Super Fast Delivery ⭐
                                  </span>
                                <h1 className="mb-2 text-[60px] font-bold leading-[1.10] text-white md:text-[100px]">
                                    Speed
                                </h1>
                                <h2 className="mb-6 text-[30px] font-bold leading-[1.208] text-white md:text-[40px]">
                                   Is The Key For Our Success⚡
                                </h2>
                                <p className="mx-auto mb-9 max-w-[460px] text-base font-medium text-white">
                                    Lorem ipsum dolor sit amet consectetur adipiscing elit do
                                    eiusmod tempor incididunt labore et dolore.
                                </p>
                                <a
                                    href="/#"
                                    className="inline-flex items-center justify-center py-3 text-base font-medium text-center transition bg-white rounded-md px-7 text-dark shadow-1 hover:bg-gray-2 hover:text-body-color"
                                >
                                    Discover More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="absolute bottom-0 -translate-x-1/2 left-1/2">
            <DotShape />
          </span>
            </div>
        </>
    );
};

export default Hero;


const DotShape = () => {
    return (
        <>
            <svg
                width="77"
                height="77"
                viewBox="0 0 77 77"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="1.66343"
                    cy="75.3366"
                    r="1.66343"
                    transform="rotate(-90 1.66343 75.3366)"
                    fill="white"
                />
                <circle
                    cx="1.66343"
                    cy="31.7545"
                    r="1.66343"
                    transform="rotate(-90 1.66343 31.7545)"
                    fill="white"
                />
                <circle
                    cx="16.3016"
                    cy="75.3366"
                    r="1.66343"
                    transform="rotate(-90 16.3016 75.3366)"
                    fill="white"
                />
                <circle
                    cx="16.3016"
                    cy="31.7545"
                    r="1.66343"
                    transform="rotate(-90 16.3016 31.7545)"
                    fill="white"
                />
                <circle
                    cx="30.9398"
                    cy="75.3366"
                    r="1.66343"
                    transform="rotate(-90 30.9398 75.3366)"
                    fill="white"
                />
                <circle
                    cx="30.9398"
                    cy="31.7545"
                    r="1.66343"
                    transform="rotate(-90 30.9398 31.7545)"
                    fill="white"
                />
                <circle
                    cx="45.578"
                    cy="75.3366"
                    r="1.66343"
                    transform="rotate(-90 45.578 75.3366)"
                    fill="white"
                />
                <circle
                    cx="45.578"
                    cy="31.7545"
                    r="1.66343"
                    transform="rotate(-90 45.578 31.7545)"
                    fill="white"
                />
                <circle
                    cx="60.2162"
                    cy="75.3361"
                    r="1.66343"
                    transform="rotate(-90 60.2162 75.3361)"
                    fill="white"
                />
                <circle
                    cx="74.6634"
                    cy="75.3361"
                    r="1.66343"
                    transform="rotate(-90 74.6634 75.3361)"
                    fill="white"
                />
                <circle
                    cx="60.2162"
                    cy="31.7545"
                    r="1.66343"
                    transform="rotate(-90 60.2162 31.7545)"
                    fill="white"
                />
                <circle
                    cx="74.6634"
                    cy="31.7545"
                    r="1.66343"
                    transform="rotate(-90 74.6634 31.7545)"
                    fill="white"
                />
                <circle
                    cx="1.66343"
                    cy="60.6984"
                    r="1.66343"
                    transform="rotate(-90 1.66343 60.6984)"
                    fill="white"
                />
                <circle
                    cx="1.66343"
                    cy="17.1164"
                    r="1.66343"
                    transform="rotate(-90 1.66343 17.1164)"
                    fill="white"
                />
                <circle
                    cx="16.3016"
                    cy="60.6984"
                    r="1.66343"
                    transform="rotate(-90 16.3016 60.6984)"
                    fill="white"
                />
                <circle
                    cx="16.3016"
                    cy="17.1164"
                    r="1.66343"
                    transform="rotate(-90 16.3016 17.1164)"
                    fill="white"
                />
                <circle
                    cx="30.9398"
                    cy="60.6984"
                    r="1.66343"
                    transform="rotate(-90 30.9398 60.6984)"
                    fill="white"
                />
                <circle
                    cx="30.9398"
                    cy="17.1164"
                    r="1.66343"
                    transform="rotate(-90 30.9398 17.1164)"
                    fill="white"
                />
                <circle
                    cx="45.578"
                    cy="60.6984"
                    r="1.66343"
                    transform="rotate(-90 45.578 60.6984)"
                    fill="white"
                />
                <circle
                    cx="45.578"
                    cy="17.1164"
                    r="1.66343"
                    transform="rotate(-90 45.578 17.1164)"
                    fill="white"
                />
                <circle
                    cx="60.2162"
                    cy="60.6984"
                    r="1.66343"
                    transform="rotate(-90 60.2162 60.6984)"
                    fill="white"
                />
                <circle
                    cx="74.6634"
                    cy="60.6984"
                    r="1.66343"
                    transform="rotate(-90 74.6634 60.6984)"
                    fill="white"
                />
                <circle
                    cx="60.2162"
                    cy="17.1164"
                    r="1.66343"
                    transform="rotate(-90 60.2162 17.1164)"
                    fill="white"
                />
                <circle
                    cx="74.6634"
                    cy="17.1164"
                    r="1.66343"
                    transform="rotate(-90 74.6634 17.1164)"
                    fill="white"
                />
                <circle
                    cx="1.66343"
                    cy="46.0602"
                    r="1.66343"
                    transform="rotate(-90 1.66343 46.0602)"
                    fill="white"
                />
                <circle
                    cx="1.66343"
                    cy="2.47768"
                    r="1.66343"
                    transform="rotate(-90 1.66343 2.47768)"
                    fill="white"
                />
                <circle
                    cx="16.3016"
                    cy="46.0602"
                    r="1.66343"
                    transform="rotate(-90 16.3016 46.0602)"
                    fill="white"
                />
                <circle
                    cx="16.3016"
                    cy="2.47768"
                    r="1.66343"
                    transform="rotate(-90 16.3016 2.47768)"
                    fill="white"
                />
                <circle
                    cx="30.9398"
                    cy="46.0602"
                    r="1.66343"
                    transform="rotate(-90 30.9398 46.0602)"
                    fill="white"
                />
                <circle
                    cx="30.9398"
                    cy="2.47768"
                    r="1.66343"
                    transform="rotate(-90 30.9398 2.47768)"
                    fill="white"
                />
                <circle
                    cx="45.578"
                    cy="46.0602"
                    r="1.66343"
                    transform="rotate(-90 45.578 46.0602)"
                    fill="white"
                />
                <circle
                    cx="45.578"
                    cy="2.47768"
                    r="1.66343"
                    transform="rotate(-90 45.578 2.47768)"
                    fill="white"
                />
                <circle
                    cx="60.2162"
                    cy="46.0602"
                    r="1.66343"
                    transform="rotate(-90 60.2162 46.0602)"
                    fill="white"
                />
                <circle
                    cx="74.6634"
                    cy="46.0602"
                    r="1.66343"
                    transform="rotate(-90 74.6634 46.0602)"
                    fill="white"
                />
                <circle
                    cx="60.2162"
                    cy="2.47817"
                    r="1.66343"
                    transform="rotate(-90 60.2162 2.47817)"
                    fill="white"
                />
                <circle
                    cx="74.6634"
                    cy="2.47817"
                    r="1.66343"
                    transform="rotate(-90 74.6634 2.47817)"
                    fill="white"
                />
            </svg>
        </>
    );
};