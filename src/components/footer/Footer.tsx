function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <p className="text-lg font-bold bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                            Benjamin AMAND
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                            © {currentYear} — Conçu avec React & Tailwind CSS
                        </p>
                    </div>
                    <div className="flex gap-6">
                        <a href="https://www.linkedin.com/in/benjamin-amand/" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            LinkedIn
                        </a>
                        <a href="mailto:b.amand.ecole@gmail.com" className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            Contact
                        </a>
                    </div>
                    <div className="text-center md:text-right">
                        <p className="text-xs text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                            Crédits
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Icons by <a
                                href="https://icons8.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium hover:text-blue-600 underline decoration-blue-500/30 underline-offset-4"
                            >
                                Icons8
                            </a>
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Style assisté par Gemini
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;