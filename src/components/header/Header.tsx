import { Link } from "react-router-dom";
import { menuItems } from "../projects/Projects";

function Header() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-slate-200/50 dark:border-slate-800/50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link to="/" className="text-xl font-bold bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                    BA.
                </Link>
                <div className="flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
                    <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Accueil
                    </Link>
                    <div className="group relative py-4">
                        <button className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            Projets
                            <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top scale-95 group-hover:scale-100">
                            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden p-2">
                                {menuItems.map((projet) => (
                                    <Link
                                        key={projet.id}
                                        to={projet.link}
                                        className="block px-4 py-3 rounded-xl text-sm hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        <span className="font-semibold">{projet.shortName}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <Link
                        to="/CV"
                        className="px-5 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full text-sm font-bold hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white transition-all shadow-md active:scale-95"
                    >
                        Mon CV
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Header;