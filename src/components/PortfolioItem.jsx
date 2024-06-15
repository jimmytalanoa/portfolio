import React from "react";

function PortfolioItem({title, imgUrl, stack, link}) {
  return (
    <div className="border-2 rounded-md overflow-hidden">
    <img src={imgUrl} alt="portfolio" className="w-full h-36 md:h-48 object-cover cursor-pointer"/>
    <div className="w-full p-4">
        <h3 className="text-lg md:text-x1 mb-2 md:mb-3 font-semibold">{title}</h3>
        <p className="flex flex-wrap gap-2 items-center justify-start text-xs md:text-sm">
            {stack.map((item, index) => (
                <span key={index} className="text-sm bg-gray-200 p-1 mr-1 rounded">{item}</span>
            ))}
        </p>
    </div>
    </div>
  );
}

export default PortfolioItem;