import "./App.css";

import { exportComponentAsPNG } from "react-component-export-image";
import React, { useState, createRef } from "react";
import pic from "./assets/pic.jpg";
import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import bluebg from "./assets/bluebg.jpeg";
import { GrStar } from "react-icons/gr";
import { GiCheckMark } from "react-icons/gi";

function MyComponent({ category, image, name, code }) {
  const [componentRef, setComponentRef] = useState(createRef());

  return (
    <>
      <div className="md:w-[32%] w-[99%] mx-auto md:mx-0 bold pt-2 bg-black    ">
        <div
          style={{
            backgroundImage: `url(${bluebg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
          ref={componentRef}
        >
          <div className=" flex flex-col justify-center text-white items-center">
            <h1 className="md:text-3xl text-xl my-1 font-bold cinzel">
              MY AWARDS SHOW KENYA 2023
            </h1>
            <p className="text-[#F5C877] uppercase my-1 font-bold text-xl md:text-5xl">
              {category}
            </p>
            <div className="flex justify-between p-4 gap-4 items-center">
              <img
                src={image}
                alt="img"
                className="w-[200px] h-[200px] rounded-3xl bg-cover h-[250px]"
              />
              <div className="flex flex-col gap-1">
                <p>1 . Dial * 544 * 32 #</p>
                <p>2. Select The Voting Category</p>
                <p>3 .Search MY AWARDS SHOW KENYA 2023</p>
                <p className="flex items-center gap-2">
                  4 . Enter My Name{" "}
                  <span className="text-[#F5C877] font-bold text-xl cinzel"></span>
                </p>

                <p>5 . Confirm Amount and Votes</p>
                <p>6 . Confirm Payment</p>
              </div>
            </div>
            <p className="text-2xl my-1  gap-2 font-semibold flex  items-center">
              Vote for me
              <span>
                <GiCheckMark className="rotate-12 text-4xl" />
              </span>
            </p>
            <p className="text-[#F5C877] font-bold cinzel my-1 text-2xl md:text-5xl">
              {name}
            </p>

            <div className="flex  items-center gap-2">
              <GrStar className="text-[#F5C877] text-2xl" />
              <p className="h-[1px] w-[100px] bg-white"></p>
              <GrStar className="text-[#F5C877] text-2xl" />
              <p className="h-[1px] w-[100px] bg-white"></p>
              <GrStar className="text-[#F5C877] text-2xl" />
            </div>
            <div className="bg-white w-[100%] flex p-2 justify-around items-center">
              <img src={logo1} alt="img" className="w-[50px] h-[50px]" />
              <img src={logo2} alt="img" className="w-[50px] h-[50px]" />
              <img src={logo3} alt="img" className="w-[50px] h-[30px]" />
            </div>
            <p className="bg-black text-[#F5C877] text-center p-2  w-[100%]  ">
              Powered by MY AWARDS SHOW KENYA 2023
            </p>
          </div>
        </div>
        {name && category && image && (
          <div className="flex justify-center items-center">
            <button
              className="bg-[#F5C877] my-2 text-black text-2xl font-bold p-2 rounded-2xl"
              onClick={() =>
                exportComponentAsPNG(componentRef, {
                  fileName: `${name} Poster.png`,
                })
              }
            >
              Download Poster
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default MyComponent;
