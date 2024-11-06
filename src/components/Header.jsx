import React, { useEffect, useState } from 'react';
import right from '../assets/images/NewMe.jfif';

const Header = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "I develop dynamic and User-Centered Web Applications"; 

  useEffect(() => {
    let currentCharIndex = 0;

    const typeText = () => {
      if (currentCharIndex < fullText.length) {
        setTypedText(fullText.slice(0, currentCharIndex + 1)); 
        currentCharIndex += 1;
        setTimeout(typeText, 50); 
      }
    };

    typeText();
  }, []); 

  return (
    <div className="flex flex-col-reverse lg:flex-row w-full px-[5%] bg-blue-100 lg:py-10">
      {/* Text Section */}
      <div className="w-full lg:w-[43%] p-10 space-y-5">
        <div>
          <p>Hey, I am Provee</p>
        </div>
        <div className="text-4xl font-bold space-y-4 text-slate-800">
          <p>{typedText}</p>
        </div>
        <div className="text-slate-800">
          <p>My expertise spans both front-end and back-end development, enabling me to build comprehensive solutions that meet diverse client needs.</p>
        </div>
        <div className="btn p-3 w-32 flex items-center justify-center text-white rounded-md bg-purple-800 hover:opacity-85">
          <button className="btn-primary">Get in Touch</button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-[45%] flex justify-center items-center border border-purple-100 relative lg:left-10 mb-5 lg:mb-0 py-5 lg:py-0 top-5 lg:top-0">
        <img src={right} alt="Provee" className="h-[370px] w-[700px] rounded-2xl" />
      </div>
    </div>
  );
};
export default Header;
