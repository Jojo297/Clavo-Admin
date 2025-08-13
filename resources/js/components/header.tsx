import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="relative z-50 px-4 py-6">
      <div className="mx-auto max-w-7xl">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <span className="text-lg font-bold text-primary-foreground">C</span>
            </div>
            <span className="text-xl font-bold text-foreground">Clavo</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
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

          <div className="flex items-center space-x-4">
            <select className="text-sm bg-transparent border-none">
              <option>English</option>
            </select>
            <Button variant="outline" size="sm">
              Login
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
