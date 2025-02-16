/* eslint-disable react/prop-types */
import data from "./data.js";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#ece9e6] to-[#ffffff] flex items-center justify-center">
      {/* 
        The outer container has a max width that roughly accommodates 5 cards (5 x 350px = 1750px)
        Adjust the max-w value as needed.
      */}
      <div className="w-full max-w-[1750px] px-5">
        <h1 className="text-3xl font-bold text-center mb-10">Our Team</h1>
        {/* 
          The scroll container: 
          - "flex" displays cards in a row.
          - "gap-5" adds spacing between cards.
          - "overflow-x-auto" enables horizontal scrolling.
          - "snap-x snap-mandatory" allows scroll snapping (each card snaps into place on scroll).
        */}
        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory">
          {data.map((person, index) => (
            <Card key={index} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ person }) {
  return (
    // The "flex-none" class ensures that the card does not shrink and "snap-start" makes it snap into view.
    <div className="flex-none w-[350px] snap-start">
      <div
        className="bg-white rounded-[15px] shadow-xl overflow-hidden m-5 transition-all duration-500 transform hover:[transform:scale(1.05)_rotateY(10deg)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]"
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
