import { useState } from "react";
import Skills from "../skills/Skills";
import Projects from "../projects/Projects";

function Home() {
  const [techArray, setTechArray] = useState<Array<number>>([]);

  const hoverProject = (techArr: Array<number>) => setTechArray(techArr);
  const unhoverProject = () => setTechArray([]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-4 bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Benjamin AMAND
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-slate-600 dark:text-slate-400 mb-6">
            Développeur <span className="font-semibold text-slate-800 dark:text-white">Back-end / Fullstack</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-lg italic">
            Expertise en Java Spring Boot & React.<br />
            Architecture robuste et interfaces fluides.
          </p>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src="/photo.jpg" 
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-2xl transform transition duration-500 hover:scale-[1.02]" 
              alt="Benjamin Amand"
            />
          </div>
        </div>
      </div>
      <main className="max-w-6xl mx-auto px-6 pb-20">
        <section>
          <Skills techArr={techArray} />
        </section>
        
        <section>
          <Projects hoverProject={hoverProject} unhoverProject={unhoverProject} />
        </section>
      </main>
    </div>
  );
}

export default Home;
