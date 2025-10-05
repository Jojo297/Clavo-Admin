import { Button } from '@/components/ui/button';
export function AppShowcaseSection() {
    return (
        <section className="bg-gradient-to-r from-primary/5 to-purple-500/5 px-4 py-20">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16 text-center">
                    <p className="mb-4 font-medium text-primary">Why You Choose Our App</p>
                    <h2 className="mb-6 text-4xl font-bold text-foreground">Most Powerful Application for Your Plant Detection Projects</h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground">
                        Experience the future of plant identification with our advanced AI technology. From spices to rare plants, get accurate
                        results instantly.
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 -rotate-2 transform rounded-3xl bg-gradient-to-br from-primary/20 to-purple-500/20"></div>
                    <div className="relative rounded-3xl p-8 shadow-2xl">
                        <div className="grid items-center gap-8 md:grid-cols-3">
                            <div className="space-y-6">
                                <div className="flex items-center space-x-3">
                                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                    <span className="text-sm text-muted-foreground">Real Time Detection</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                    <span className="text-sm text-muted-foreground">Offline Detection Mode</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                    <span className="text-sm text-muted-foreground">Easy Installation Process</span>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <div className="relative h-[500px] w-64">
                                    <div className="rounded-[2.5rem] bg-black p-2 shadow-xl">
                                        <div className="h-full overflow-hidden rounded-[2rem] bg-white">
                                            <img
                                                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pp.jpg-A2MjvqQQ71V5Toa7ZEBcF5PLLRbPsD.jpeg"
                                                alt="Clavo App Detection"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Download App</Button>
                                <div className="flex items-center space-x-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
