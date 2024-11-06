import React, { useEffect, useRef } from 'react';
import mobile from '../assets/icons/icomoon-free_mobile.png';
import front from '../assets/icons/tag 1.png';
import test from '../assets/icons/UI & UX Design.png';
import web from '../assets/icons/Webflow Development.png';

const skills = [
  { icon: mobile, title: 'Responsive Design', percentage: 70 },
  { icon: front, title: 'Front-End Frameworks', percentage: 80 },
  { icon: test, title: 'Testing and Debugging', percentage: 50 },
  { icon: web, title: 'Cloud Service', percentage: 50 },
];

const MySkill = () => {
  const skillRefs = useRef([]);

  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const { target } = entry;
          const index = target.getAttribute('data-index');
          const skill = skills[index];
          let start = 0;
          const end = skill.percentage;
          const duration = 2000;
          const incrementTime = duration / end;

          const incrementCounter = () => {
            start += 1;
            target.querySelector('.count').textContent = `${start}%`;
            if (start < end) {
              setTimeout(incrementCounter, incrementTime);
            }
          };
          incrementCounter();

          observer.unobserve(target);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.5, 
    });

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect(); 
    };
  }, []);

  return (
    <div className="general lg:p-16 overflow-hidden">
      <div className="my-skill relative left-5 lg:left-0 mt-3 lg:mt-0 top-2 lg:top-0">
        <div className="text-xs font-semibold">
          <p>My Skills</p>
        </div>
        <div className="text-4xl font-semibold py-3">
          <h1>My Expertise</h1>
        </div>
      </div>
      <div className="Profesion py-5 flex flex-col lg:flex-row gap-8 relative lg:left-10 justify-center lg:items-start lg:justify-start items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            ref={(el) => (skillRefs.current[index] = el)}
            data-index={index}
            className="bg-blue-50 h-[200px] lg:w-[230px] w-[350px] rounded-md lg:flex-none flex flex-col justify-center items-start"
          >
            <div className="img lg:h-12 lg:w-12 h-20 w-20 bg-white flex items-center justify-center rounded-md relative left-36 lg:left-5 top-5 lg:top-0">
              <img src={skill.icon} alt="" className="lg:h-8 lg:w-8 h-16 w-16 " />
            </div>
            <div className="p-5 mt-3 font-semibold text-xl text-center w-full">
              <h3>{skill.title}</h3>
              <p className="count mt-2 text-center">0%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkill;
