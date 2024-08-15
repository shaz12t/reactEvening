import React from 'react';
import { useTrail, animated } from 'react-spring';
import { SiMarketo } from "react-icons/si";

function Loading() {
  const text = "WELCOME!";
  const trail = useTrail(text.length, {
    from: { opacity: 0, transform: 'translateX(-20px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: { mass: 1, tension: 200, friction: 20 },
  });

  return (
    <div className="w-screen h-screen bg-gradient-to-r from-neutral-900 via-gray-800 to-yellow-900 flex items-center justify-center">
   
   <div className="w-screen h-screen bg-gradient-to-r from-neutral-900 via-gray-800 to-yellow-900 flex items-center justify-center">
  <div className="flex flex-col items-center">
    <SiMarketo className="w-16 h-16 mb-4 text-white" />
    <div className="flex space-x-2">
      {trail.map((style, index) => (
        <animated.span key={index} style={style} className="text-yellow-800 text-[70px] font-bold">
          {text[index]}
        </animated.span>
      ))}
    </div>
    <h3 className="text-gray-200 mt-4 text-[25px] text-center" style={{ maxWidth: '500px', margin: '0 auto' }}>
    CryptoCrawler analyzes cryptocurrency data from multiple exchanges.</h3>
  </div>
</div>

    </div>
  );
}

export default Loading;
