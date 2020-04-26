import React, { useEffect, useRef } from "react";
import { FaPrint, FaLink } from "react-icons/fa";
import { NavBar, Splash, Footer } from "../shared";

const Resume = () => {
  const iframeEl = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const iframeWidth = iframeEl.current.clientWidth;
      iframeEl.current.style.height = `${(iframeWidth * 7) / 5}px`;
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <NavBar isDark />
      <main id="content">
        <Splash
          titleLines={["My History", "& Credentials"]}
          imgUrl="/imgs/resume-bg.jpg"
          imgAlt="person coding"
        >
          <div className="flex">
            <button
              className="btn mr-4"
              onClick={() => {
                window.frames["resume"].focus();
                window.frames["resume"].print();
              }}
            >
              <FaPrint className="mr-2" />
              PRINT
            </button>
            <a
              className="btn"
              href="/imgs/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLink className="mr-2" />
              OPEN
            </a>
          </div>
        </Splash>
        <div
          className="outer-grid flex flex-col items-center py-16"
          style={{ backgroundColor: "#515659" }}
        >
          <iframe
            ref={iframeEl}
            id="resume"
            name="resume"
            title="resume"
            src="/imgs/resume.pdf"
            className="w-full"
            style={{ maxWidth: 750 }}
          />
        </div>
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default Resume;
