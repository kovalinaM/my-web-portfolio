import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className="py-10" id="projects">
      <h1 className="heading">
        Мои <span className="text-purple">проекты</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center
             sm:w-[570px] w-[80vw] mb-10"
          >
            <PinContainer title={title} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[90vw]
               overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="./bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-0" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
              <div className="flex items-center justify-between mt-3 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 justify-center items-center"
                    style={{transform: `translate(-${5 * index * 2}px)`}}>
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-center">
                    <p className="flex lg:text-xl sm:text-xs text-sm text-purple">Check Live Site</p>
                    <FaLocationArrow className="ms-3" color="#CBACF9"/>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;