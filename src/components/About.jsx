import React from 'react';
import me from '../assets/images/NewMe.jfif';

const About = () => {
  return (
    <div className="container flex flex-col lg:flex-row justify-between px-[5%] lg:gap-[5%] lg:py-10">
      {/* Left Section */}
      <div className="left w-full lg:w-[50%] p-5 flex justify-center items-center">
        <div>
          <img src={me} alt="Profile" className="h-[370px] w-full lg:w-[500px] rounded-2xl" />
        </div>
      </div>

      {/* Right Section */}
      <div className="right w-full lg:w-[40%] p-5 text-slate-900 font-semibold">
        <div className="all lg:mt-10">
          <div className="text-xs text-slate-950">
            <p>About</p>
          </div>
          <div className="text-3xl py-1 font-semibold text-slate-900">
            <h1>About Me</h1>
          </div>
          <div className="space-y-5 pt-5 text-slate-950">
            <div>
              <p>My name is Providence Charles, a passionate Full Stack Web Developer driven by innovation and excellence.</p>
            </div>
            <div>
              <p>Empowered by creativity and technical expertise, I deliver impactful projects and collaborate with talented developers and designers to bring visionary ideas to life.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
