import React from "react";
import { FaGithubSquare, FaLink } from "react-icons/fa";

const Project = ({
  name,
  description,
  techs,
  githubLink,
  link,
  children,
  isDark = false
}) => {
  return (
    <div
      className={
        "overflow-hidden py-32 outer-grid" + (isDark ? " bg-light-gray" : "")
      }
    >
      <div className="flex flex-col items-center lg:flex-row lg:items-stretch">
        <div className="lg:flex-2 lg:pr-16">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-5xl lg:text-6xl leading-tight text-gray-900">
                {name}
              </h3>
              <em className="mb-6 mt-1 block text-lg text-gray-600">
                {techs.join(", ")}
              </em>
            </div>
            <div className="flex pt-2">
              {githubLink ? (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 transition-text duration-200 text-blue-700 hover:text-blue-500"
                >
                  <FaGithubSquare className="w-8 h-8" />
                  Code
                </a>
              ) : null}
              {link ? (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 transition-text duration-200 text-blue-700 hover:text-blue-500"
                >
                  <FaLink className="w-8 h-8" />
                  Link
                </a>
              ) : null}
            </div>
          </div>
          <p
            className="text-lg text-gray-900"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <div className="w-full flex flex-col items-center lg:flex-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Project;
