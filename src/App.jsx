/* eslint-disable react/prop-types */
// import React from "react";
import data from "./data";

function App() {
  // Build an array of Card components from the data.
  const cards = data.map((person, index) => (
    <Card key={index} person={person} />
  ));

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ece9e6] to-[#ffffff] flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-center mb-10">Our Team</h1>
      {/* Outer container that clips any overflow */}
      <div className="overflow-hidden w-full">
        {/* Animated container that holds two identical copies of the cards */}
        <div className="flex animate-marquee">
          {/* Wrap the first copy in a flex container */}
          <div className="flex">{cards}</div>
          {/* Second copy */}
          <div className="flex">{cards}</div>
        </div>
      </div>
    </div>
  );
}

function Card({ person }) {
  return (
    // Remove gap from the marquee container and let each card handle its own margin
    <div className="flex-none w-[350px] m-5 snap-start">
      {" "}
      {/* Fixed dimensions for uniform appearance */}
      <div
        className="bg-white rounded-[15px] shadow-xl overflow-hidden h-[525px] transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
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

/**
 * Renders the team member's image.
 */
function Avatar({ image, name }) {
  return (
    <img
      src={image}
      alt={`${name} Image`}
      className="w-full h-[200px] object-cover block"
    />
  );
}

/**
 * Displays the team member's name and introduction.
 */
function Intro({ name, intro }) {
  return (
    <div className="text-center">
      <h1 className="text-[1.8rem] font-bold m-0 inline-block bg-gradient-to-tl from-purple-500 via-blue-300 to-cyan-500 text-transparent bg-clip-text">
        {name}
      </h1>
      <p className="text-[0.95rem] leading-[1.4] text-gray-600 mt-2.5">
        {intro}
      </p>
    </div>
  );
}

/**
 * Maps over the skills and renders each one.
 */
function SkillList({ skills, emojis }) {
  return (
    <div className="mt-4 flex flex-wrap justify-center gap-4">
      {skills.map((skill, index) => (
        <Skill key={index} skill={skill} emoji={emojis[index]} />
      ))}
    </div>
  );
}

/**
 * Displays an individual skill with its corresponding emoji.
 */
function Skill({ skill, emoji }) {
  return (
    <div className="bg-[#f5f5f5] rounded-lg py-2 px-3 shadow-md transition-transform duration-300 hover:-translate-y-[5px] flex items-center">
      <span className="font-bold mr-[5px] text-gray-800">{skill}</span>
      <span className="text-[1.2rem]">{emoji}</span>
    </div>
  );
}

export default App;
