import React from 'react';
import git from '../assets/icons/mdi_github.png';
import first from '../assets/images/product-cart-bjrjp85bv-provees-projects.vercel.app_.png';
import arrow from '../assets/icons/Vector (8).png';
import second from '../assets/images/bento-grid-wj8s-if0cjhr97-provees-projects.vercel.app_.png';
import homepro from '../assets/images/homepro-phi.vercel.app_.png';

const Portfolio = () => {
  return (
    <div className="general lg:py-10">
      <div className="both flex justify-between items-center mx-5 lg:mx-10 py-10">
        <div>
          <p className="font-semibold">Recent Projects</p>
          <h1 className="py-3 text-2xl lg:text-3xl font-semibold">My Portfolio</h1>
        </div>
        <div className="bg-purple-700 w-32 flex text-white p-[3px] rounded-md">
          <a href="https://github.com/Provee510" target="_blank" rel="noopener noreferrer" className="py-3 flex gap-1">
            <div>
              <img src={git} alt="GitHub" className="w-5 h-5" />
            </div>
            <div className="text-sm">
              <p>Visit My GitHub</p>
            </div>
          </a>
        </div>
      </div>
      <div className="recent-project lg:flex gap-5 justify-center">
        <div className="each-project lg:w-[400px] p-5 shadow-lg">
          <div>
            <img src={first} alt="" className="lg:w-[400px] h-[300px]" />
          </div>
          <div className="description text-xs lg:w-[300px]">
            <p className="py-3 font-bold text-lg">Product Cart</p>
            <p>The Product Cart Challenge is a coding challenge that tests your front-end development skills by creating an interactive shopping cart interface.</p>
          </div>
          <div className="border-b border-purple-700 w-36 flex">
            <a href="https://product-cart-main.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center mt-3 text-slate-950 p-1">
              <button>View Website</button>
              <div className="relative top-0 left-2">
                <img src={arrow} alt="" className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>
        <div className="each-project lg:w-[400px] p-5 shadow-lg">
          <div>
            <img src={second} alt="" className="lg:w-[400px] h-[300px]" />
          </div>
          <div className="description text-xs lg:w-[300px]">
            <p className="py-3 font-bold text-lg">Bento Grid</p>
            <p>The Bento Grid challenge tests your skills with CSS Grid and responsive design.</p>
          </div>
          <div className="border-b border-purple-700 w-36 flex">
            <a href="https://bento-grid-wj8s-if0cjhr97-provees-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center mt-3 text-slate-950 p-1">
              <button>View Website</button>
              <div className="relative top-0 left-2">
                <img src={arrow} alt="" className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>
        <div className="each-project lg:w-[400px] p-5 shadow-lg">
          <div>
            <img src={homepro} alt="" className="lg:w-[400px] h-[300px] rounded-md" />
          </div>
          <div className="description text-xs lg:w-[300px]">
            <p className="py-3 font-bold text-lg">HomePro</p>
            <p>HomePro is a real estate platform designed to connect buyers, sellers, and real estate professionals.</p>
          </div>
          <div className="border-b border-purple-700 w-36 flex">
            <a href="https://link-to-homepro.com" target="_blank" rel="noopener noreferrer" className="flex items-center mt-3 text-slate-950 p-1">
              <button>View Website</button>
              <div className="relative top-0 left-2">
                <img src={arrow} alt="" className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
