import { useEffect, useState } from "react";

const AboutMe = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img
          src="https://avatars.githubusercontent.com/u/3386323?v=4"
          alt="A picture of me"
          className="object-contain"
        />
        {/* <p className="text-lg">{bodyText}</p> */}
      </div>
      <div className="flex justify-center">
        <div className="w-9/12">
          {/* <h1 className="text-3xl">About Me</h1> */}
          <p>
            I'm a programmer with a love for solving challenging problems and
            diving deep into systems to see how they work. My recent projects
            have been web projects, and my interests include 3D graphics and
            rendering and lower, systems-level programming.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
