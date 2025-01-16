import React from "react";
import profilepic from "../assets/mine.jpg";
import exp from "../assets/express-logo.png";
import mongo from "../assets/mongo-logo.png";
import tail from "../assets/tailwind-css.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={["Full Stack Developer", 1000, "Java Programmer", 1000]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
          />

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
          >
            HEY, I AM <br />
            <span className="text-purple-500">SUKANT C</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
          >
            I am a passionate Full Stack Developer and Java Programmer.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-row items-center gap-6 my-4 md:mb-0"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)",
              }}
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-purple-400 rounded-xl"
            >
              Download CV
            </motion.button>

            <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
              <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/SUKANT43">
                <AiOutlineGithub />
              </motion.a>

              <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/sukant-c-b6bba4317/">
                <AiOutlineLinkedin />
              </motion.a>


            </div>
          </motion.div>
        </motion.div>

        <motion.img
  src={profilepic}
  className="w-[300px] md:w-[450px] rounded-full"
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
/>

      </div>

      <div className="text-gray-300 my-3">
        <h3 className="text-4xl font-semibold mb-5">
          About <span>Me</span>
        </h3>
        <p className="text-justify leading-7 w-11/12 mx-auto">
          <strong>I'm Sukant, an Aspiring Full Stack Developer and Java Programmer.</strong>
          <br />
          Hello! I am currently pursuing my education at Bannari Amman Institute of Technology, where I have been excelling academically with a remarkable CGPA of 7.1 in the first five semesters. My major work focuses on essential subjects such as Operating Systems, Database Management Systems, Computer Networks, Object-Oriented Programming, Data Structures, and Algorithms. Since beginning my educational journey in 2022, I have been dedicated to expanding my knowledge and skills in the field of Computer Science. With an expected graduation year of 2026, I am eager to leverage my education to contribute meaningfully to the world of technology and embark on exciting opportunities.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
      >
        <p className="text-gray-200 mr-6">My Tech Stack</p>
        <DiHtml5 className="text-orange-600 mx-2" />
        <DiCss3 className="text-blue-600 mx-2" />
        <DiJavascript1 className="text-yellow-500 mx-2" />
        <DiReact className="text-blue-500 mx-2" />
        <DiNodejsSmall className="text-green-500 mx-2" />

        {/* Add the images here */}
        <img src={tail} alt="Tailwind CSS" className="w-[40px] h-[40px] mx-2" />
        <img src={exp} alt="Express" className="w-[40px] h-[40px] mx-2" />
        <img src={mongo} alt="MongoDB" className="w-[40px] h-[40px] mx-2" />
      </motion.div>

      <div className="absolute inset-0 hidden md:block">
        <ShinyEffect left={0} top={0} size={1400} />
      </div>
    </div>
  );
};

export default Hero;
