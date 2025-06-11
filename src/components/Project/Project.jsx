import { useState } from "react";
import { FaFolderOpen } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Project = ({
  projectName,
  projectDescription,
  projectURL,
  githubRepository,
  tags,
  date,
  urlImage
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="flex flex-col bg-mainColor text-white p-5 bedar-sc2:p-8 rounded-md border shadow">
      <FaFolderOpen className="w-6 h-6" />

      {urlImage && (
        <div className="relative w-full h-full rounded-xl overflow-hidden mt-4 shadow-md group">
          <img
              src={urlImage}
              alt={`${projectName} preview`}
              onLoad={() => setIsLoading(false)}
              className={`w-full h-full object-cover aspect-video transition-opacity duration-300 ${
                isLoading ? "skeleton" : ""
              }`}
            />
          <div
            className={`absolute bottom-0 text-white w-full px-4 py-2 backdrop-blur-[10px] text-sm text-center transition-all ease-linear invisible opacity-0 group-hover:opacity-100 group-hover:visible`}
          >
            {projectName} preview
          </div>
        </div>
      )}

      <strong className="mt-5 mb-2 text-2xl text-[#fedf89]">
        {projectName}
      </strong>

      <div className="mb-2">{projectDescription}</div>
      <div className="flex flex-wrap gap-2 items-center mb-3">
        {tags.map((Skill, index) => (
          <Skill
            key={index}
            className="h-8 w-8 bg-mainColor cursor-pointer p-1 rounded shadow-md shadow-[#000]/15"
          />
        ))}
      </div>

      <div className="flex items-center justify-between mt-auto">
        <div className="text-sm opacity-70">{date}</div>
        <div className="flex gap-2">
          {projectURL && (
            <Link to={projectURL} target="_blank" rel="noopener noreferrer">
              <IoEyeSharp title="Live demo" className="w-6 h-6 hover:text-[#fedf89]" />
            </Link>
          )}
          {githubRepository && (
            <Link to={githubRepository} target="_blank" rel="noopener noreferrer">
              <IoLogoGithub title="Source Code" className="w-6 h-6 hover:text-[#fedf89]" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
