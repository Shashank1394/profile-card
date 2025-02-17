/* eslint-disable react/prop-types */
import data from "./data";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "motion/react";

function CardDisplay() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-40%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <h1 className="pointer-events-none absolute inset-0 z-10 mb-[700px] flex items-center justify-center text-5xl font-bold">
          Our Team
        </h1>
        <motion.div style={{ x }} className="flex gap-4">
          {data.map((person, index) => {
            return <Card key={index} person={person} />;
          })}
        </motion.div>
      </div>
    </section>
  );
}

function Card({ person }) {
  return (
    <div className="m-5 w-[350px] flex-none snap-start">
      <div
        className="h-[525px] transform overflow-hidden rounded-[15px] bg-white shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl"
        style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
      >
        <Avatar image={person.image} name={person.name} />
        <div className="p-5">
          <Intro name={person.name} intro={person.intro} />
          <SkillList skills={person.skills} emojis={person.emojis} />
        </div>
      </div>
    </div>
  );
}

function Avatar({ image, name }) {
  return (
    <img
      src={image}
      alt={`${name} Image`}
      className="block h-[200px] w-full object-cover"
    />
  );
}

function Intro({ name, intro }) {
  return (
    <div className="text-center">
      <h1 className="m-0 inline-block bg-gradient-to-tl from-purple-500 via-blue-300 to-cyan-500 bg-clip-text text-[1.8rem] font-bold text-transparent">
        {name}
      </h1>
      <p className="mt-2.5 text-[0.95rem] leading-[1.4] text-gray-600">
        {intro}
      </p>
    </div>
  );
}

function SkillList({ skills, emojis }) {
  return (
    <div className="mt-4 flex flex-wrap justify-center gap-4">
      {skills.map((skill, index) => (
        <Skill key={index} skill={skill} emoji={emojis[index]} />
      ))}
    </div>
  );
}

function Skill({ skill, emoji }) {
  return (
    <div className="flex items-center rounded-lg bg-[#f5f5f5] px-3 py-2 shadow-md transition-transform duration-300 hover:-translate-y-[5px]">
      <span className="mr-[5px] font-bold text-gray-800">{skill}</span>
      <span className="text-[1.2rem]">{emoji}</span>
    </div>
  );
}

export default CardDisplay;
