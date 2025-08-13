import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Bring Your Plant Detection
                <br />
                <span className="text-primary">Next Level With</span>
                <br />
                Clavo Mobile App
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                The complete AI-powered plant detection solution. Identify spices, herbs, and plants with advanced
                computer vision technology.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </Button>
              <Button size="lg" variant="outline">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Google Play
              </Button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                <div className="w-8 h-8 rounded-full bg-green-500"></div>
                <div className="w-8 h-8 rounded-full bg-purple-500"></div>
                <div className="w-8 h-8 rounded-full bg-orange-500"></div>
                <div className="w-8 h-8 rounded-full bg-red-500"></div>
              </div>
              <span className="text-sm text-muted-foreground">500+ Users downloaded our app</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto w-80 h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-[3rem] transform rotate-6"></div>
              <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] h-full overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pp.jpg-A2MjvqQQ71V5Toa7ZEBcF5PLLRbPsD.jpeg"
                    alt="Clavo App Interface"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
