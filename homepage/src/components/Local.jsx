import React from "react";
import Button from "../layouts/Button";
import img from "../assets/oldman.jpg";
import { Link } from "react-scroll";

const Local = () => {
  const backgroundColor = `bg-brightColor`;

  return (
    <div className="  min-h-screen lg:min-h-[90vh]  flex flex-col justify-center lg:flex-row items-center md:mx-32 mx-20">
      <div className=" flex flex-col text-center  lg:text-start gap-5">
        <h1 className=" font-semibold text-5xl leading-tight">
          Ask a Local
        </h1>
        <p>
          Have Questions about the Destinations. Ask from the local people we provide for you.
        </p>

        <div className=" lg:pl-24">
          <Link to="destination" spy={true} smooth={true} duration={500}>
            <Button title="Search" backgroundColor={backgroundColor} />
          </Link>
        </div>
      </div>
      <div className=" mt-14 lg:mt-0 w-full lg:w-4/5">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default Local;