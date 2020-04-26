import React from "react";

const Splash = ({ titleLines, imgUrl, imgAlt, children }) => {
  return (
    <div
      id="splash"
      className="relative flex items-center outer-grid"
      style={{ height: "100vh" }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-right"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
      <div className="relative">
        <h1
          className="font-serif text-white leading-tight mb-8 md:mb-12 text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
          dangerouslySetInnerHTML={{ __html: titleLines.join("<br/>") }}
        ></h1>
        {children}
      </div>
    </div>
  );
};

export default Splash;
