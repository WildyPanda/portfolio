import { SkillsSmall } from "../../skills/Skills";

function ChiffrageHibernate() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-16 transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Framework d'Encryptage Hibernate
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light leading-relaxed">
            Une solution d'automatisation du chiffrement pour architectures Java, conçue pour une migration à <span className="text-blue-600 font-semibold">zéro downtime</span>.
          </p>
          <div className="mt-8 border-y border-slate-200 dark:border-slate-800 py-4">
            <SkillsSmall techArr={[1, 2, 3, 6]} />
          </div>
        </header>
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <img className="w-8 h-8" src="https://img.icons8.com/color/48/goal--v1.png" alt="goal" />
              L'Objectif
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Permettre aux équipes de développement de chiffrer des champs ou des tables Hibernate avec un effort d'implémentation quasi nul (approche "Plug & Play").
            </p>
          </div>
          <div className="space-y-4 p-6 bg-blue-50 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-900/20">
            <h3 className="text-xl font-bold flex items-center gap-3">
              <img className="w-6 h-6" src="https://img.icons8.com/color/48/shield.png" alt="security" />
              Sécurité des Clés
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Utilisation d'une clé composée (Secret Entreprise + Secret Application) avec un <strong>sel unique par ligne</strong> pour garantir une robustesse maximale face aux attaques par dictionnaire.
            </p>
          </div>
        </div>
        <section className="mb-16">
          <h3 className="text-2xl font-bold mb-6 italic text-slate-500">Les Défis majeurs</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-5 border border-slate-200 dark:border-slate-800 rounded-2xl duration-500 hover:scale-105">
              <span className="font-bold text-blue-600">Hétérogénéité</span>
              <p className="text-sm mt-2">Compatibilité totale de Java 8 à Java 25.</p>
            </div>
            <div className="p-5 border border-slate-200 dark:border-slate-800 rounded-2xl duration-500 hover:scale-105">
              <span className="font-bold text-blue-600">Disponibilité</span>
              <p className="text-sm mt-2">Migration en production avec un down-time minimum.</p>
            </div>
            <div className="p-5 border border-slate-200 dark:border-slate-800 rounded-2xl duration-500 hover:scale-105">
              <span className="font-bold text-blue-600">Intégrité</span>
              <p className="text-sm mt-2">Changement de types en DB sans casser la logique métier.</p>
            </div>
          </div>
        </section>
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
            La Solution : Annotation Processing
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Pour automatiser le processus sans alourdir le code métier, j'ai utilisé l'<strong>Annotation Processing</strong>. Cela permet d'intervenir à la compilation pour générer le code nécessaire au chiffrement.
          </p>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Pour résoudre le probleme de compatibilité entre les differentes version de Java, on ajoute un parametre permettant d'indiquer si l'application utilise une ancienne version du package <b>persistence</b>.
          </p>
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-600/20 to-cyan-600/20 rounded-2xl blur-lg group-hover:opacity-100 transition duration-1000 opacity-70"></div>
            <div className="relative bg-slate-950 rounded-2xl shadow-2xl border border-slate-800 overflow-hidden">
              <pre className="p-6 text-sm md:text-base font-mono leading-relaxed overflow-x-auto whitespace-pre">
                <code className="text-slate-300 flex flex-col text-left">
                  <div><span className="text-blue-400">@EncryptedEntity</span>(<span className="text-cyan-400">isLegacyJava</span> = <span className="text-amber-400">true</span>)</div><div className="pl-4 text-slate-500 italic">// Gère automatiquement le package persistence</div>
                  <div><span className="text-purple-400">public class</span> <span className="text-yellow-200">UserAccount</span> {"{"}</div>
                  <div className="pl-4 text-slate-500 italic">// Annotation déclenchant l'Annotation Processing</div>
                  <div className="pl-4"><span className="text-blue-400">@EncryptField</span></div>
                  <div className="pl-4"><span className="text-purple-400">private</span> <span className="text-cyan-400">String</span> <span className="text-slate-200">socialSecurityNumber</span>;</div>
                  <div>{"}"}</div>
                </code>
              </pre>
              <p className="mt-2 text-center text-xs italic text-slate-500 uppercase tracking-widest">Exemple d'implémentation sur une entité</p>
            </div>
          </div>
        </section>
        <section className="mb-16 p-8 bg-blue-50 dark:bg-blue-900/10 rounded-3xl border border-blue-100 dark:border-blue-900/30">
          <h2 className="text-2xl font-bold mb-4">Architecture de Transition</h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            Le type des données chiffrées étant toujours un string, il fallait trouver une solution pour lier les données à la logique métier. <br />
            Pour cela, j'ai implémenté un système de <strong>DTO/Entity Generator</strong> pour résoudre le conflit de types :
          </p>
          <div className="grid gap-4 md:grid-cols-3 text-sm">
            <div className="bg-white/50 dark:bg-white/5 p-4 rounded-xl border border-white">
              <p className="font-bold mb-1">1. Logique DTO</p>
              L'entité originale est utilisée sous la forme d'un DTO dans la logique métier.
            </div>
            <div className="bg-white/50 dark:bg-white/5 p-4 rounded-xl border border-white">
              <p className="font-bold mb-1">2. Entity généré</p>
              L'entité communiquant avec la base de données est générée à partir de l'entité originale et des annotations.
            </div>
            <div className="bg-white/50 dark:bg-white/5 p-4 rounded-xl border border-white">
              <p className="font-bold mb-1">3. Builder automatique</p>
              Un builder est généré afin de permettre une transition simplifiée entre l'entité originale et l'entité généré.
            </div>
          </div>
        </section>
        <section className="py-12 border-t border-slate-200 dark:border-slate-800">
          <h2 className="text-3xl font-bold mb-8">Protocole de Migration "Zero-Downtime"</h2>
          <div className="space-y-12">

            <div className="relative pl-8 border-l-2 border-blue-600">
              <div className="absolute -left-2.25 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
              <h4 className="text-xl font-bold mb-3">Phase 1 : Coexistence et chiffrement en arriere-plan</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                Plutôt que des tables temporaires coûteuses, j'ai implémenté le <strong>doublage de colonnes</strong>.<br />
                Les colonnes à chiffrer seront en deux exemplaires dans la base, une version brute et une version chiffré.<br /><br />
                Pour maintenir le fonctionnement de l'application en chiffrant les données au fur et à mesure, j'ai implémenté un systeme de <b>lecture/écriture asymétrique</b> :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl">
                  <p className="font-bold text-xs uppercase text-blue-500 mb-2">Lecture</p>
                  Priorité à la donnée chiffrée car les données brutes ne sont plus actualisées.<br />
                  Si elle est absente, utilisation de la donnée brute.
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl">
                  <p className="font-bold text-xs uppercase text-blue-500 mb-2">Écriture</p>
                  Chiffrement immédiat des nouvelles données sans stockage de la valeur brute.<br />
                  Aucune sauvegarde sur les données brutes pour éviter les pertes de données.
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-4 pt-3">
                Pour <b>convertir les données en arrière-plan</b>, j'ai mis en place un <b>systeme de tache Spring Boot</b> qui chiffrent les données lignes par lignes ce qui permets de laisser la priorités aux actions utilisateurs :
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl">
                  <p className="font-bold text-xs uppercase text-blue-500 mb-2">Identification de la ligne à convertire</p>
                  Par défaut, cherche la premiere lignes ayant des colonnes chiffré vides.<br />
                  Possibilité aux developpeur de personnaliser la requête d'identification.
                </div>
                <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-xl">
                  <p className="font-bold text-xs uppercase text-blue-500 mb-2">Conversion de plusieurs tables simultanées</p>
                  Ce chiffrement n'impacte pas les autres tables, il est donc possible de chiffrer plusieurs tables simultanément.
                </div>
              </div>
            </div>

            <div className="relative pl-8 border-l-2 border-slate-300 dark:border-slate-700">
              <div className="absolute -left-2.25 top-0 w-4 h-4 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
              <h4 className="text-xl font-bold mb-3">Phase 2 : Finalisation</h4>
              <p className="text-slate-600 dark:text-slate-400">
                Une fois la conversion d'arrière-plan terminée, l'application bascule en mode exclusif, seules les données chiffrés sont utilisés.<br />
                Les colonnes originales sont supprimées, libérant l'espace disque et finalisant la sécurisation.
              </p>
            </div>

          </div>
        </section>

        <section className="mt-24 py-16 px-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl transition-colors text-center">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
            Ce projet vous interresse ?
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 mx-auto leading-relaxed text-center">
            Ce projet a soulevé des problématiques passionnantes sur la sécurité des données et l'automatisation Java.<br />
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

export default ChiffrageHibernate;