import Clavologo from './../../../public/CLAVO-bgremove.png';

type SectionName = 'Hero' | 'Feature' | 'AppShowcase';

interface NavbarProps {
    onScroll: (sectionName: SectionName) => void;
}

export function Header({ onScroll }: NavbarProps) {
    const handleClick = (e: React.MouseEvent, sectionName: SectionName) => {
        e.preventDefault();
        onScroll(sectionName);
    };

    return (
        <header className="sticky top-0 z-50 rounded-b-lg bg-orange-400 px-4 py-6 dark:bg-zinc-950">
            <div className="mx-auto max-w-7xl">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                            <span className="text-lg font-bold text-primary-foreground">
                                <img src={Clavologo} alt="" />
                            </span>
                        </div>
                        <span className="text-xl font-bold text-foreground">Clavo</span>
                    </div>

                    <div className="hidden items-center space-x-8 md:flex">
                        <a
                            href="#"
                            onClick={(e) => handleClick(e, 'Hero')}
                            className="text-sm font-medium text-muted-foreground transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-white"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            onClick={(e) => handleClick(e, 'Feature')}
                            className="text-sm font-medium text-muted-foreground transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-white"
                        >
                            Features
                        </a>
                        <a
                            href="#"
                            onClick={(e) => handleClick(e, 'AppShowcase')}
                            className="text-sm font-medium text-muted-foreground transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-white"
                        >
                            Mobile App
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}
