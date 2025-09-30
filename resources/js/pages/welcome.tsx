import { AppShowcaseSection } from '@/components/app-showcase-section';
import { FeaturesSection } from '@/components/features-section';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { StatsSection } from '@/components/stats-section';
import { type SharedData } from '@/types';
import { usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <div className="min-h-screen">
                <Header />
                <main>
                    <HeroSection />
                    <StatsSection />
                    <FeaturesSection />
                    <AppShowcaseSection />
                </main>
                <Footer />
            </div>
        </>
    );
}
