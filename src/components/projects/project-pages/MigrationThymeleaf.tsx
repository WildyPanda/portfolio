import { SkillsSmall } from "../../skills/Skills";

function MigrationThymeleaf() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-16 transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Migration JSP vers Thymeleaf
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light leading-relaxed">
            Mise en place d'un protocole et de macros de migrations afin de faciliter et guider la modernisation du parc applicatif Spring Boot pour permettre la conteneurisation et le déploiement sur <span className="text-blue-600 font-semibold">Kubernetes</span>.
          </p>
          <div className="mt-8 border-y border-slate-200 dark:border-slate-800 py-4">
            <SkillsSmall techArr={[1, 2, 3, 7, 13]} />
          </div>
        </header>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <img className="w-8 h-8" src="https://img.icons8.com/color/48/info.png" alt="situation" />
              Situation Initiale
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              De nombreuses applications de l'entreprise utilisaient une architecture <strong>Back-for-Front (BFF)</strong> basée sur Spring Boot et des vues JSP, packagées en format <strong>WAR</strong>.
            </p>
          </div>
          <div className="space-y-4 p-6 bg-amber-50 dark:bg-amber-900/10 rounded-3xl border border-amber-100 dark:border-amber-900/20">
            <h3 className="text-xl font-bold flex items-center gap-3 text-amber-700 dark:text-amber-500">
              <img className="w-6 h-6" src="https://img.icons8.com/color/48/warning-shield.png" alt="problem" />
              Le Point de Blocage
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              La stratégie de migration vers <strong>Kubernetes</strong> recommandait un packaging en <strong>JAR</strong> autonome.<br />
              Cependant, le moteur de rendu JSP est techniquement incompatible avec l'exécution depuis un JAR exécutable.
            </p>
          </div>
        </div>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
            Identification de la Solution
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 opacity-60">
              <h4 className="font-bold text-slate-500 mb-3">Option A : Refactorisation React</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                Séparation stricte du Back (API) et du Front (React).<br /><br />
                Présence d'applications sous ce format dans le parc et idéal pour la scalabilité.<br />
                Représente cependant une charge de travail tres lourde et une refactorisation complète du code métier front-end.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border-2 border-blue-600 shadow-lg shadow-blue-500/10 relative">
              <div className="absolute -top-3 right-4 bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded">RECOMMANDÉ</div>
              <h4 className="font-bold text-blue-600 mb-3">Option B : Conversion Thymeleaf</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Successeur naturel de JSP pour Spring Boot.<br />
                Permet de conserver l'architecture BFF et la logique serveur existante tout en supportant parfaitement le format <strong>JAR</strong>.<br />
                Aucune application sous ce format dans le parc et connaissances du language inhexistantes dans les équipes.
              </p>
            </div>
          </div>

          <p className="mt-6 text-slate-600 dark:text-slate-400 text-center pt-2">
            Le choix de thymeleaf à été validé car le cout de l'apprentissage et de la migration était nettement inférieur au coût d'une refonte en React pour un parc applicatif de cette taille.
          </p>
        </section>

        <section className="mb-16 p-8 bg-blue-50 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-900/30">
          <h2 className="text-2xl font-bold mb-6">Stratégie de Migration</h2>
          <p className="leading-relaxed text-slate-600 dark:text-slate-400">
            Ma mission a consisté à créer une "Autoroute de migration" pour les autres équipes.<br />
            Pour cela, j'ai procédé par itérations progressives.
          </p>
          <div className="bg-white/60 dark:bg-slate-900/40 p-5 my-5 rounded-xl border border-white dark:border-slate-800 shadow-sm">
            <h4 className="font-bold text-blue-600 mb-2">Phase 1 : Application Témoin Simple</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Migration d'une application stable, isolée et très peu complexe.<br />
              Objectif : Verifier la faisabilité et le temps necessaire de la migration et commencer à identifier les étapes de la migrations.
            </p>
          </div>
          <div className="bg-white/60 dark:bg-slate-900/40 p-5 my-5 rounded-xl border border-white dark:border-slate-800 shadow-sm">
            <h4 className="font-bold text-blue-600 mb-2">Phase 2 : Application Témoin Complexe</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Migration d'une application stable et isolée ayant une grande variété de contenu JSP.<br />
              Objectif : Tester l'ébauche de <strong>Protocole de Migration</strong> et l'améliorer au maximum.
            </p>
          </div>
          <div className="bg-white/60 dark:bg-slate-900/40 p-5 mt-5 rounded-xl border border-white dark:border-slate-800 shadow-sm">
            <h4 className="font-bold text-blue-600 mb-2">Phase 3 : Industrialisation</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Création d'un <strong>Protocole de Migration</strong> normé et évolutif : <br />
              une documentation pas-à-pas incluant des macros de conversion et des configurations types pour Spring Boot.
              ce protocole doit rester vivant dû à la grande complexité du language JSP.
            </p>
          </div>
        </section>
        <section className="py-12 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-3xl font-bold mb-8">Résultats & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">Migration réussi</div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">Passage réussi au format JAR pour Kubernetes.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">Protocole efficace</div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">Réduction drastique du temps de migration pour les équipes suivantes.</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">Audit</div>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">Suppression de technologies obsolètes (WAR/JSP).</p>
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

export default MigrationThymeleaf;