import { Link } from "react-router-dom";

export interface ProjectItem {
	id: number;
	title: string;
	shortName: string;
	goal: string;
	techText: string;
	link: string;
	techArr: Array<number>;
}

export const menuItems: ProjectItem[] = [
	{
		id: 1,
		title: "Application de chiffrage Hibernate via Annotation Processing",
		shortName: "Framework de chiffrage Hibernate",
		goal: "Développer un système de chiffrement transparent avec protocole de migration sans downtime.",
		techText: "Java + Spring Boot + Hibernate + Postgresql",
		link: "/chiffrage_hibernate",
		techArr: [1, 2, 3, 6],
	},
	{
		id: 2,
		title: "Accompagnement des équipes Dev dans leur migration vers Kubernetes",
		shortName: "Accompagnement migration kubernetes",
		goal: "Piloter la transition applicative des équipes, de la stratégie d’infrastructure jusqu’à l'autonomie.",
		techText: "Kubernetes + Java + Spring Boot + JSP + Thymeleaf",
		link: "/accompagnement_kubernetes",
		techArr: [5, 4, 10, 1],
	},
	{
		id: 3,
		title: "Protocole et macros de migration JSP vers Thymeleaf",
		shortName: "Migration JSP vers Thymeleaf",
		goal: "Faciliter la migration entre JSP et Thymeleaf pour les équipes.",
		techText: "Java + Spring Boot + JSP + Thymeleaf",
		link: "/migration_thymeleaf",
		techArr: [1, 2, 3, 7, 13],
	},
];

interface Input {
	hoverProject: (techArr: Array<number>) => void,
	unhoverProject: () => void,
}

function Projects({ hoverProject, unhoverProject }: Input) {
    return (
        <div className="py-8">
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-3">
                <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                Projets Récents
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {menuItems.map((item) => (
                    <div 
                        key={item.id}
                        onMouseEnter={() => hoverProject(item.techArr)} 
                        onMouseLeave={() => unhoverProject()}
                        className="flex flex-col bg-white dark:bg-slate-900/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
                    >
                        <div className="mb-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Projet</span>
                            <h4 className="text-xl font-bold mt-1 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                        </div>
                        
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 grow">
                            {item.goal}
                        </p>
                        
                        <div className="mb-6">
                            <p className="text-xs font-semibold text-slate-400 mb-2">Stack Technique:</p>
                            <p className="text-xs italic text-slate-500">{item.techText}</p>
                        </div>

                        <Link to={item.link} className="inline-flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 group/link">
                            Voir les détails 
                            <svg className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
