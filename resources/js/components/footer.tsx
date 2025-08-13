export function Footer() {
    return (
        <footer className="px-4 py-12">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                                <span className="text-sm font-bold text-primary-foreground">C</span>
                            </div>
                            <span className="text-lg font-bold">Clavo</span>
                        </div>
                        <p className="text-sm">
                            Advanced AI-powered plant detection for everyone. Identify plants, spices, and herbs with incredible accuracy.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-4 font-semibold">Product</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-background">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-background">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-background">
                                    API
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-background">
                                    Documentation
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 font-semibold">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-background">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-background">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-background">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-background">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 font-semibold">Support</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="hover:text-background">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-background">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-background">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-background">
                                    Status
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t pt-8 text-center">
                    <p className="text-sm">© 2024 Clavo. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
