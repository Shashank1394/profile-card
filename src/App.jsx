/* eslint-disable react/prop-types */

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ece9e6] to-[#ffffff]">
      <div
        className="bg-white rounded-[15px] shadow-xl overflow-hidden w-[350px] m-5 transition-all duration-500 transform hover:[transform:scale(1.05)_rotateY(10deg)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)]"
        style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
      >
        <Avatar />
        <div className="p-5">
          <Intro />
          <SkillList />
        </div>
      </div>
    </div>
  );
}

export default App;

function Avatar() {
  return (
    <img
      src="Kyle Cambridge.jpg"
      alt="Kyle Cambridge Image"
      className="w-full h-[200px] object-cover block"
    />
  );
}

function Intro() {
  return (
    <div className="text-center">
      <h1 className="text-[1.8rem] font-bold m-0 inline-block bg-gradient-to-tl from-purple-500 via-blue-300 to-cyan-500 text-transparent bg-clip-text">
        Kyle Cambridge
      </h1>
      <p className="text-[0.95rem] leading-[1.4] text-gray-600 mt-2.5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        laudantium fuga ipsum nisi quod, perferendis quaerat aspernatur labore
        eos facilis eum amet dolor, a, sed inventore dolorem obcaecati totam
        cumque?
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="mt-4 flex flex-wrap justify-center gap-4">
      <Skill skill="React" emoji="✌️" />
      <Skill skill="HTML+CSS" emoji="👌" />
      <Skill skill="Tailwind CSS" emoji="🤟" />
    </div>
  );
}

function Skill({ skill, emoji }) {
  return (
    <div className="bg-[#f5f5f5] rounded-lg py-2 px-3 shadow-md transition-transform duration-300 hover:-translate-y-[5px] flex items-center">
      <span className="font-bold mr-[5px] text-gray-800">{skill}</span>
      <span className="text-[1.2rem]">{emoji}</span>
    </div>
  );
}
