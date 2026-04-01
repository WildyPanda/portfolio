interface SkillItem {
    id: number;
    imageUrl: string;
    label: string;
}

const menuItems: SkillItem[] = [
    { id: 1, imageUrl: "https://img.icons8.com/color/240/java-coffee-cup-logo--v1.png", label: "Java 1.8 -> 25", },
    { id: 2, imageUrl: "https://img.icons8.com/color/240/spring-logo.png", label: "Spring 3 -> 6", },
    { id: 3, imageUrl: "https://img.icons8.com/officel/80/spring-logo.png", label: "Spring boot 1.5 -> 3.5", },
    { id: 4, imageUrl: "https://img.icons8.com/fluency/96/docker.png", label: "Docker", },
    { id: 5, imageUrl: "https://img.icons8.com/color/240/kubernetes.png", label: "Kubernetes", },
    { id: 6, imageUrl: "https://img.icons8.com/color/240/postgreesql.png", label: "Postgresql", },
    { id: 7, imageUrl: "https://img.icons8.com/color/240/thymeleaf.png", label: "Thymeleaf", },
    { id: 8, imageUrl: "https://img.icons8.com/color/240/react-native.png", label: "React", },
    { id: 9, imageUrl: "https://img.icons8.com/color/240/angularjs.png", label: "Angular", },
    { id: 10, imageUrl: "https://img.icons8.com/color/240/grafana.png", label: "Grafana", },
    { id: 11, imageUrl: "https://img.icons8.com/color/240/python--v1.png", label: "Python", },
    { id: 12, imageUrl: "https://img.icons8.com/color/240/c-sharp-logo.png", label: "C#", },
    { id: 13, imageUrl: "https://img.icons8.com/officel/80/regex.png", label: "Regex", },
];

interface Input {
    techArr?: Array<number>;
}

export function SkillsSmall({ techArr }: Input) {
    var items: SkillItem[] = techArr && techArr?.length != 0 ? techArr.map(id => menuItems.find(item => item.id == id)).filter(elt => elt != null) : menuItems;
    return (
        <div className="flex flex-col p-8">
            <div className="flex justify-center overflow-x-auto p-5 pt-16 gap-6">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="group relative shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-50"
                    >
                        <img
                            src={item.imageUrl}
                            alt={item.label}
                            className="w-16 h-16 object-cover rounded-2xl shadow-xl border-2 border-transparent group-hover:border-blue-400"
                        />
                        <div
                            className="absolute -top-12 left-1/2 -translate-x-1/2 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300
                            bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium
                            pointer-events-none shadow-lg w-3/1"
                        >
                            {item.label}
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-500 rotate-45"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Skills({ techArr }: Input) {
    // Determine if we are in "filter mode"
    const isFiltering = techArr && techArr.length > 0;

    return (
        <div className="py-8">
            <h3 className="text-3xl font-bold mb-10 flex items-center gap-3">
                <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                Compétences
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-8">
                {menuItems.map((item) => {
                    const isActive = !isFiltering || techArr?.includes(item.id);
                    return (
                        <div
                            key={item.id}
                            className={`group relative transition-all duration-500 hover:z-50 ${
                                isActive ? "opacity-100 scale-100" : "opacity-20 scale-90 grayscale"
                            }`}
                        >
                            <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 group-hover:border-blue-500 transition-colors">
                                <img src={item.imageUrl} alt={item.label} className="w-12 h-12 md:w-14 md:h-14 object-contain" />
                            </div>
                            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-60">
                                <span className="bg-slate-900 dark:bg-blue-600 text-white text-xs py-1 px-3 rounded-full whitespace-nowrap shadow-xl">
                                    {item.label}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Skills;
