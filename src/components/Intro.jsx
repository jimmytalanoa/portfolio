import React from "react";

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <h1 className="text-4x1 md:text-7x1 dark:text-white mb-1 md:mb-3 font-bold">James Talanoa</h1>
      <p className="text-base md:text-x1  mb-3 font-medium">Software Developer</p>
      <p className="text-sm max-w-xl mb-6 font-bold">I am a self taught software developer in the Logistics and Transport industry, building full stack applications to allow companies to communicate directly with the shipping ports.</p>
    </div>
  );
}

export default Intro;