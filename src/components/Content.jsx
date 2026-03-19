'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Content1() {
    const [isVisible, setIsVisible] = useState(false);
    const headingRef = useRef(null);

    const headingLines = [
        "SKSSF (Samastha Kerala Sunni Students Federation) എന്നത് സമസ്ത കേരള ജംഇയ്യത്തുൽ ഉലമയുടെ വിദ്യാർത്ഥി സംഘടനയാണ്."
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.2,
                rootMargin: '0px'
            }
        );

        if (headingRef.current) {
            observer.observe(headingRef.current);
        }

        return () => {
            if (headingRef.current) {
                observer.unobserve(headingRef.current);
            }
        };
    }, []);

    return (
        <section className="w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8">
            <div className="text-left pl-4 sm:pl-8 md:pl-12">
                {/* Main Heading */}
                <h2
                    ref={headingRef}
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight mb-4 sm:mb-6 font-[family-name:var(--font-outfit)]"
                    style={{ color: '#05004c', letterSpacing: '-0.03em' }}
                >
                    {headingLines.map((line, lineIndex) => (
                        <span key={lineIndex} className="block">
                            {line.split(' ').map((word, wordIndex) => {
                                const totalWordsBeforeLine = headingLines
                                    .slice(0, lineIndex)
                                    .reduce((acc, l) => acc + l.split(' ').length, 0);
                                const globalWordIndex = totalWordsBeforeLine + wordIndex;

                                return (
                                    <span
                                        key={wordIndex}
                                        className={`inline-block transition-all duration-700 ease-out ${isVisible
                                            ? 'opacity-100 blur-0 translate-y-0'
                                            : 'opacity-0 blur-sm translate-y-4'
                                            }`}
                                        style={{
                                            transitionDelay: `${globalWordIndex * 80}ms`,
                                            marginRight: wordIndex < line.split(' ').length - 1 ? '0.3em' : '0'
                                        }}
                                    >
                                        {word}
                                    </span>
                                );
                            })}
                        </span>
                    ))}
                </h2>

                {/* Subtitle */}
                <p
                    className="text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed mb-6 sm:mb-8 font-[family-name:var(--font-outfit)] px-2 sm:px-4"
                    style={{ color: 'black', letterSpacing: '-0.015em' }}
                >
                 
                 
                 
                   സമസ്ത കേരള ജംഇയ്യത്തുൽ ഉലമയുടെ മാർഗ്ഗനിർദ്ദേശത്തിൽ രൂപം കൊണ്ട SKSSF, വിദ്യാർത്ഥികളുടെ മതപരവും ഭൗതികവുമായ വളർച്ച ലക്ഷ്യമാക്കി പ്രവർത്തിക്കുന്ന ഒരു പ്രബല സംഘടനയാണ്. ഐക്യവും മൂല്യബോധവും മുൻനിർത്തി, സമൂഹത്തിൽ മാറ്റം സൃഷ്ടിക്കുന്ന തലമുറയെ വളർത്തുകയാണ് ഞങ്ങളുടെ ദൗത്യം.
                </p>
            </div>
        </section>
    );
}
