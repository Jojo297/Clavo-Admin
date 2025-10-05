import Clavologo from './../../../public/CLAVO-bgremove.png';

export function Footer() {
    return (
        <footer className="px-4 py-12">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                                <span className="text-lg font-bold text-primary-foreground">
                                    <img src={Clavologo} alt="" />
                                </span>
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
                                <a href="#" className="">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="">
                                    API
                                </a>
                            </li>
                            <li>
                                <a href="#" className="">
                                    Documentation
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 font-semibold">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 font-semibold">Support</h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a href="#" className="">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="">
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
