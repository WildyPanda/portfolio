import { SkillsSmall } from "../../skills/Skills";

function AccompagnementKubernetes() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-16 transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-12 text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-linear-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
            Accompagnement Kubernetes
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light leading-relaxed">
            Pilotage de la transition Cloud Native : de la pédagogie technique à l'autonomie opérationnelle des équipes de développement.
          </p>
          <div className="mt-8 border-y border-slate-200 dark:border-slate-800 py-4">
            <SkillsSmall techArr={[5, 4, 10, 1]} />
          </div>
        </header>
        <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm mb-16">
          <h3 className="text-2xl font-bold flex items-center gap-3 mb-4">
            <img className="w-8 h-8" src="https://img.icons8.com/color/48/conference-call.png" alt="mentoring" />
            L'Objectif
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic">
            Accompagner les équipes de développement dans la migration de leur première application vers Kubernetes, en assurant une montée en compétence durable sur les nouveaux standards d'infrastructure.
          </p>
        </div>
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-10">Le Parcours d'Accompagnement</h2>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 dark:bg-slate-800 text-blue-600 font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                1
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h4 className="font-bold text-lg mb-1">Initiation & Simplification</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Vulgarisation du fonctionnement interne de K8s. Présentation des bénéfices et définition de la roadmap de migration.
                </p>
              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 dark:bg-slate-800 text-blue-600 font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                2
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h4 className="font-bold text-lg mb-1">Audit & Identification</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Analyse des contraintes applicatives et définition de la nouvelle architecture d'infrastructure.
                </p>
              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-200 dark:bg-slate-800 text-blue-600 font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                3
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h4 className="font-bold text-lg mb-1">Support à la Migration</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Aide pratique au refactoring du code et à l'écriture des fichiers de configuration. Support approfondi sur les pipelines CI/CD.
                </p>
              </div>
            </div>

          </div>
        </section>
        <section className="mb-16 p-8 bg-emerald-50 dark:bg-emerald-900/10 rounded-3xl border border-emerald-100 dark:border-emerald-900/30 text-left">
          <h2 className="text-2xl font-bold mb-4 text-emerald-800 dark:text-emerald-400">Vers l'autonomie (Run & Operate)</h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
            La migration n'est pas qu'un changement de serveur, c'est un changement de culture. Mon rôle s'étend jusqu'à la phase d'assimilation :
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex gap-3 items-start">
              <div className="mt-1 bg-emerald-500 rounded-full p-1 text-white"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></div>
              <div><span className="font-bold">Observabilité :</span> Mise en place de Dashboards Grafana pour le monitoring.</div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="mt-1 bg-emerald-500 rounded-full p-1 text-white"><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg></div>
              <div><span className="font-bold">Troubleshooting :</span> Formation des équipes au debug d'applications conteneurisées.</div>
            </div>
          </div>
        </section>
        <section className="mt-24 py-16 px-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl transition-colors text-center">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
            Ce projet vous interresse ?
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 mx-auto leading-relaxed text-center">
            Si vous souhaitez en discuter davantage, n'hésitez pas à me contacter.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-5">
            <a
              href="mailto:b.amand.ecole@gmail.com"
              className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              Me contacter par Email
            </a>

            <a
              href="https://www.linkedin.com/in/benjamin-amand/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 rounded-xl font-medium hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              Profil LinkedIn
            </a>
          </div>
          <p className="mt-8 text-blue-100/70 text-sm italic">
            Ouvert aux échanges techniques et aux opportunités Fullstack/Back-end.
          </p>
        </section>

      </div>
    </div>
  );
}

export default AccompagnementKubernetes;