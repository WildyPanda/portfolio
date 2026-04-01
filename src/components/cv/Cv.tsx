function CV() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-16 transition-colors">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-20">
          <div className="relative group shrink-0">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src="/photo.jpg" 
              className="relative w-48 h-48 object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-2xl" 
              alt="Benjamin AMAND"
            />
          </div>
          
          <div className="grow text-center md:text-left">
            <h1 className="text-5xl font-extrabold tracking-tight mb-2">Benjamin AMAND</h1>
            <h2 className="text-2xl font-light text-blue-600 dark:text-blue-400 mb-6 italic">
              Alternance en développement informatique
            </h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href="/AMAND_Benjamin_CV.pdf" 
                download
                className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-bold hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white transition-all shadow-lg flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                Télécharger le CV (PDF)
              </a>
              <a 
                href="mailto:b.amand.ecole@gmail.com" 
                className="px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl font-medium hover:border-blue-500/50 hover:text-blue-600 transition-all shadow-sm flex items-center gap-2"
              >
                Me contacter
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-12">
            <section>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Contact</h3>
              <div className="space-y-3 text-sm">
                <p className="flex items-center gap-3">
                  <span className="text-blue-500">📍</span> 62217, Achicourt France
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-blue-500">📞</span> 06 41 17 81 40
                </p>
                <p className="flex items-center gap-3 underline decoration-blue-500/30">
                  <span className="text-blue-500">🔗</span> <a href="https://www.linkedin.com/in/benjamin-amand/" target="_blank">LinkedIn</a>
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Langues</h3>
              <div className="space-y-2">
                <p className="flex justify-between"><span>Français</span> <span className="font-bold text-blue-600 text-xs">Maternel</span></p>
                <p className="flex justify-between"><span>Anglais</span> <span className="font-bold text-blue-600 text-xs">Niveau B2</span></p>
              </div>
            </section>

            <section>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Compétences</h3>
              <div className="flex flex-wrap gap-2">
                {["Java", "React", "C#", "Spring", "SQL", "Docker"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-lg text-xs font-bold border border-blue-100 dark:border-blue-800">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>
          <div className="md:col-span-2 space-y-16 text-left">
            <section>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                Expérience Professionnelle
              </h3>
              <div className="space-y-10">
                <div className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800">
                  <div className="absolute -left-2.25 top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-slate-50 dark:border-slate-950"></div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-xl">Supermarchés MATCH - Équipe Admin</h4>
                      <p className="text-blue-600 text-sm font-semibold italic">Alternance Master</p>
                    </div>
                    <span className="text-xs font-mono text-slate-400 whitespace-nowrap">2024 - 2026</span>
                  </div>
                  <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-4 mt-4">
                    <li>
                      <strong>Migration Kubernetes :</strong> Piloter la transition applicative, de la stratégie d'infrastructure jusqu'à l'autonomie.
                    </li>
                    <li>
                      <strong>Chiffrage Hibernate :</strong> Développement d'un système de chiffrement transparent avec Annotation Processing (Migration sans downtime).
                    </li>
                    <li>
                      <strong>Évolutions Projets :</strong> Diverses tâches évolutives sur une grande diversité de technologies (Java, React, Spring Boot).
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-left">
                <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                Formations
              </h3>
              <div className="grid gap-6">
                <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-bold">Mastère MSC Expert Informatique & SI</h4>
                    <span className="text-xs font-mono text-blue-500">2024-2026</span>
                  </div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">EPSI Arras</p>
                </div>
                
                <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-bold">Bachelor DevOps</h4>
                    <span className="text-xs font-mono text-slate-400">2023-2024</span>
                  </div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest text-left">EPSI Arras</p>
                </div>

                <div className="p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm text-left">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-bold">Licence Informatique</h4>
                    <span className="text-xs font-mono text-slate-400">2021-2023</span>
                  </div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest text-left">Université de Lille</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}

export default CV;