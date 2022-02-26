import { Tab } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment } from "react";
import { skills } from "../../data/skills";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const data = ["Languages", "Frameworks", "Databases", "Tools"];

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    initialInView1: true,
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
    <div id="skills" className="px-10 py-14 bg-[#f0f0f0] overflow-x-hidden">
      <div>
        <div className="">
          <h2 className="text-5xl font-semibold underline tracking-tight">
            Skills
          </h2>
        </div>
        <motion.div
          ref={ref}
          animate={animation}
          className="mt-10 w-full mx-auto"
        >
          <Tab.Group defaultIndex={1}>
            <Tab.List className="mx-auto sm:text-lg w-fit flex-wrap flex gap-3 items-center justify-center p-4 rounded-xl">
              {data.map((obj) => (
                <Tab
                  key={obj}
                  className={({ selected }) =>
                    `w-32 p-2 rounded-lg ${
                      selected
                        ? `font-bold text-white/90 bg-gray-600 `
                        : `hover:bg-slate-500/[0.6]`
                    }`
                  }
                >
                  {obj}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel className="flex mt-10 sm:mt-20 items-center justify-evenly flex-wrap gap-16">
                {skills.languages.map((obj) => (
                  <div
                    key={obj.name}
                    className="flex text-sm flex-col items-center"
                  >
                    <div className="relative h-16 w-16">
                      <Image
                        className="object-contain h-14 w-14"
                        src={obj.logo}
                        layout="fill"
                        alt=""
                      />
                    </div>
                    <p className="mt-2">{obj.name}</p>
                  </div>
                ))}
              </Tab.Panel>
              <Tab.Panel className="flex mt-10 sm:mt-20 items-center justify-evenly flex-wrap gap-16">
                {skills.frameworks.map((obj) => (
                  <div
                    key={obj.name}
                    className="flex text-sm flex-col items-center"
                  >
                    <div className="relative h-16 w-16">
                      <Image
                        className="object-contain h-14 w-14"
                        src={obj.logo}
                        layout="fill"
                        alt=""
                      />
                    </div>
                    <p className="mt-2">{obj.name}</p>
                  </div>
                ))}
              </Tab.Panel>
              <Tab.Panel className="flex mt-10 sm:mt-20 items-center justify-evenly flex-wrap gap-16">
                {skills.databases.map((obj) => (
                  <div
                    key={obj.name}
                    className="flex text-sm flex-col items-center"
                  >
                    <div className="relative h-16 w-16">
                      <Image
                        className="object-contain h-14 w-14"
                        src={obj.logo}
                        layout="fill"
                        alt=""
                      />
                    </div>
                    <p className="mt-2">{obj.name}</p>
                  </div>
                ))}
              </Tab.Panel>
              <Tab.Panel className="flex mt-10 sm:mt-20 items-center justify-evenly flex-wrap gap-16">
                {skills.tools.map((obj) => (
                  <div
                    key={obj.name}
                    className="flex text-sm flex-col items-center"
                  >
                    <div className="relative h-16 w-16">
                      <Image
                        className="object-contain h-14 w-14"
                        src={obj.logo}
                        layout="fill"
                        alt=""
                      />
                    </div>
                    <p className="mt-2">{obj.name}</p>
                  </div>
                ))}
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
