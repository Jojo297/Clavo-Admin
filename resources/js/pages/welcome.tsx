import { AppShowcaseSection } from '@/components/app-showcase-section';
import { FeaturesSection } from '@/components/features-section';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { StatsSection } from '@/components/stats-section';
import { useCallback, useRef } from 'react';

type SectionName = 'Hero' | 'Feature' | 'AppShowcase';

// type SectionRefs = Record<SectionName, RefObject<HTMLElement>>;

export default function Welcome() {
    // const { auth } = usePage<SharedData>().props;

    const HeroPage = useRef<HTMLElement>(null);
    const FeaturesPage = useRef<HTMLElement>(null);
    const AppShowcasePage = useRef<HTMLElement>(null);

    const sectionRefs = {
        Hero: HeroPage,
        Feature: FeaturesPage,
        AppShowcase: AppShowcasePage,
    };

    const handleScrollToSection = useCallback(
        (sectionName: SectionName) => {
            const ref = sectionRefs[sectionName];
            if (ref && ref.current) {
                ref.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        },
        [sectionRefs],
    );

    return (
        <>
            <div className="min-h-screen">
                <Header onScroll={handleScrollToSection} />
                <main>
                    <section ref={HeroPage}>
                        <HeroSection />
                    </section>
                    <StatsSection />
                    <section ref={FeaturesPage}>
                        <FeaturesSection />
                    </section>
                    <section ref={AppShowcasePage}>
                        <AppShowcaseSection />
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
}
