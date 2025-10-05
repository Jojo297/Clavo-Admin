import { Button } from '@/components/ui/button';

import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
export function FeaturesSection() {
    return (
        <section className="px-4 py-20">
            <div className="mx-auto max-w-7xl">
                <div className="grid items-center gap-16 lg:grid-cols-2">
                    <div className="space-y-8">
                        <div>
                            <h2 className="mb-6 text-4xl font-bold text-foreground">Stay Focused On Your Plant Detection Goals</h2>
                            <p className="text-lg text-muted-foreground">
                                Advanced AI technology helps you identify plants, spices, and herbs with incredible accuracy. Perfect for botanists,
                                farmers, and plant enthusiasts.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                                    <span className="text-sm font-semibold text-primary">01</span>
                                </div>
                                <div>
                                    <h3 className="mb-2 font-semibold text-foreground">Easy Installation Process</h3>
                                    <p className="text-muted-foreground">
                                        Quick setup and intuitive interface for immediate plant detection capabilities.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                                    <span className="text-sm font-semibold text-primary">02</span>
                                </div>
                                <div>
                                    <h3 className="mb-2 font-semibold text-foreground">Weekly Updated Database</h3>
                                    <p className="text-muted-foreground">
                                        Constantly expanding plant database with new species and improved accuracy.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                                    <span className="text-sm font-semibold text-primary">03</span>
                                </div>
                                <div>
                                    <h3 className="mb-2 font-semibold text-foreground">Offline Detection Mode</h3>
                                    <p className="text-muted-foreground">
                                        Works without internet connection for field research and remote locations.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Learn More About</Button>
                    </div>

                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="rounded-2xl p-6"></div>
                                <Card className="max-w-sm border-0 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-1 hover:shadow-lg">
                                    <CardHeader className="flex items-stretch gap-3">
                                        <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                            />
                                        </svg>
                                        <h4 className="mb-2 self-center font-semibold text-foreground">Modern Design</h4>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>
                                            <p className="text-sm text-muted-foreground">Clean and intuitive interface for better user experience.</p>
                                        </CardDescription>
                                    </CardContent>
                                    <CardFooter className="gap-2"></CardFooter>
                                </Card>

                                <Card className="max-w-sm border-0 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-1 hover:shadow-lg">
                                    <CardHeader className="flex items-stretch gap-3">
                                        <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                            />
                                        </svg>
                                        <h4 className="mb-2 font-semibold text-foreground">Weekly Update</h4>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>
                                            <p className="text-sm text-muted-foreground">Regular updates with new features and plant species.</p>
                                        </CardDescription>
                                    </CardContent>
                                    <CardFooter className="gap-2"></CardFooter>
                                </Card>
                            </div>

                            <div className="mt-8 space-y-4">
                                <Card className="max-w-sm border-0 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-1 hover:shadow-lg">
                                    <CardHeader className="flex items-stretch gap-3">
                                        <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        <h4 className="mb-2 font-semibold text-foreground">Easy Installation</h4>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>
                                            <p className="text-sm text-muted-foreground">Simple setup process with guided installation.</p>{' '}
                                        </CardDescription>
                                    </CardContent>
                                    <CardFooter className="gap-2"></CardFooter>
                                </Card>

                                <Card className="max-w-sm border-0 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-1 hover:shadow-lg">
                                    <CardHeader className="flex items-stretch gap-3">
                                        <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z"
                                            />
                                        </svg>
                                        <h4 className="mb-2 font-semibold text-foreground">24/7 Support</h4>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>
                                            <p className="text-sm text-muted-foreground">Round-the-clock customer support for all users.</p>{' '}
                                        </CardDescription>
                                    </CardContent>
                                    <CardFooter className="gap-2"></CardFooter>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
