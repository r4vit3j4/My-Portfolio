import Image from "next/image";
import React, { useEffect } from "react";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { projects } from "../../data/projects";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import { CircleFill, GithubFill, Pin } from "akar-icons";

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.08,
    triggerOnce: true,
    initialInView: true,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "tween",
          duration: 0.3,
          // delay: 0.1,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: 200,
        opacity: 0,
      });
    }
  }, [animation, inView]);

  return (
    <div
      id="projects"
      className="px-10 pt-5 min-h-[75vh] bg-[#f0f0f0] overflow-hidden"
    >
      <div className="">
        <h2 className="text-5xl font-semibold underline tracking-tight">
          Projects
        </h2>
      </div>
      <motion.div ref={ref} animate={animation} className="w-full">
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 place-items-center gap-10 gap-x-14">
          {projects.map((obj) => (
            <div
              key={obj.name}
              className="max-w-[360px] min-w-[360px] sm:max-w-md bg-white rounded-lg border border-gray-300 shadow-md"
            >
              <div className="relative h-[215px] bg-gray-800 rounded-t-lg border-b border-gray-300">
                <Image
                  className="rounded-t-lg object-cover h-full mx-auto"
                  src={obj.image}
                  layout="fill"
                  alt=""
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold mb-2 tracking-tight text-2xl text-gray-900">
                  {obj.name}
                </h3>
                <p className="mb-3 font-normal text-gray-600">{obj.content}</p>
                <div className="my-2 flex items-center space-x-3 overflow-x-scroll scrollbar-hide overflow-y-hidden whitespace-nowrap">
                  {obj.tags.map((tag) => (
                    <span
                      key={tag.name}
                      className={`flex cursor-default items-center gap-1 bg-${tag.color}-500 text-sm text-white px-1 rounded-md`}
                    >
                      <CircleFill className="h-[5px] w-[5px]" />
                      {tag.name}
                      {console.log(tag.name, tag.color)}
                    </span>
                  ))}
                </div>
                <div className="mt-7 flex items-center space-x-3">
                  <a
                    href={obj.site}
                    target={"_blank"}
                    className="mb-3 w-fit flex items-center justify-center gap-1 bg-blue-600 py-2 px-3 text-sm text-white font-medium
              rounded-lg hover:bg-blue-800 focus:ring-2 focus:ring-blue-500"
                  >
                    Live Site{" "}
                    {
                      <ArrowRightIcon className="h-4 w-4 font-medium -rotate-45" />
                    }
                  </a>
                  <a
                    href={obj.github}
                    target={"_blank"}
                    className="mb-3 w-fit flex items-center justify-center gap-1 bg-slate-600 py-2 px-3 text-sm text-white font-medium
              rounded-lg hover:bg-gray-700 focus:ring-2 focus:ring-gray-400"
                  >
                    Github {<GithubFill className="h-4 w-4 font-medium" />}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <div className="mx-auto text-center mt-14 ">
        <a
          href="https://github.com/r4vit3j4"
          target={"_blank"}
          className="bg-gray-600 inline-flex items-center gap-1 px-3 py-2 text-base  text-white rounded-lg hover:bg-gray-700"
        >
          {<Pin className="h-4 w-4" />}More Projects
        </a>
      </div>
    </div>
  );
};

export default Projects;
