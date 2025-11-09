const Project = () => {
    const projectItems1 = ['API Handling','JS DOM Manipulation','Tailwind UI']; 
    const projectItems2 = ['UI Redesign with Figma','React Implementation','Github Diployment']; 
  return (
    <>
      <div className="w-100">
        <h3 className="text-[0.9rem]">Projects</h3>
        <p className="text-[0.6rem]">Here are the things that I have build recently or accidently.</p>
      </div>
    <div className="flex">
      <div className="project-1 w-50 p-2 mx-0.5 border bg-[#1C1C1C] transition-all duration-300 hover:scale-105 hover:bg-[#131212]">
        <p className="text-[0.7rem]">Jockey Jack</p>
            <ul className="list-disc list-inside text-[0.5rem]">
                {projectItems1.map((item, index) =>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button
                onClick={() => window.open("https://github.com/mazahirx/jokey-Jack---random-joke-generator", "_blank")}
                className="mt-6 px-2 py-1 bg-white text-black rounded hover:bg-gray-200 transition">
                View Code
            </button>
      </div>
      <div className="project-2 w-50 p-2 mx-0.5 border bg-[#1C1C1C] transition-all duration-300 hover:scale-105 hover:bg-[#131212]">
        <p className="text-[0.7rem]">PMAS AAUR</p>
            <ul className="list-disc list-inside text-[0.5rem]">
                {projectItems2.map((item, index) =>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button
                onClick={() => window.open("https://github.com/mazahirx/ict-project", "_blank")}
                className="mt-3 px-2 py-1 bg-white text-black rounded hover:bg-gray-200 transition">
                View Code
            </button>
      </div>
    </div>
    </>
  )
}

export default Project
