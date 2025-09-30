import Clavologo from './../../../public/CLAVO-bgremove.png';

export function Header() {
    return (
        <header className="sticky top-0 z-50 rounded-b-lg bg-black px-4 py-6">
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
                        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                            Home
                        </a>
                        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                            Features
                        </a>
                        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                            Mobile App
                        </a>
                        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                            Pages
                        </a>
                        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                            Blog
                        </a>
                        <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                            Contact
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
}
