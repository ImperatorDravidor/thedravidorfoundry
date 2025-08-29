'use client';

import React from "react";
import SectionWithMockup from "@/components/ui/section-with-mockup";

const NewsletterSection: React.FC = () => {
    const title = (
        <>
            Intelligence,
            <br />
            delivered to you.
        </>
    );

    const description = (
        <>
            Get a tailored Monday morning brief directly in
            <br />
            your inbox, crafted by our research collective,
            <br />
            spotlighting breakthrough discoveries, emerging
            <br />
            paradigms, and the week&apos;s critical developments.
            <br />
            <br />
            We do this freely—for the benefit of all. Our extensive
            <br />
            research yields tremendous value, and while we build
            <br />
            the infrastructure to scale globally, we share what we
            <br />
            can. This is our contribution to human progress.
        </>
    );

    // Using the exact images from the provided example
    const primaryImageSrc = 'https://www.fey.com/marketing/_next/static/media/newsletter-desktop-2_4x.e594b737.png';
    const secondaryImageSrc = 'https://www.fey.com/marketing/_next/static/media/newsletter-desktop-1_4x.9cc114e6.png';

    return (
        <div className="relative">
            {/* Newsletter Mockup Section */}
            <SectionWithMockup
                title={title}
                description={description}
                primaryImageSrc={primaryImageSrc}
                secondaryImageSrc={secondaryImageSrc}
                reverseLayout={false}
            />

            {/* CTA Section - Refined to match site aesthetic */}
            <div className="container mx-auto px-6 pb-32 -mt-24">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="mb-12">
                        <p className="text-2xl font-extralight text-gray-300 mb-4">
                            For the collective good.
                        </p>
                        <p className="text-sm text-gray-500">
                            No paywalls. No agenda. Just human progress.
                        </p>
                    </div>
                    
                    <form className="max-w-md mx-auto">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="flex-1 px-4 py-3 bg-transparent border border-gray-800 text-white placeholder-gray-600 focus:border-gray-600 focus:outline-none transition-all"
                                required
                            />
                            <button
                                type="submit"
                                className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
                            >
                                Get Weekly Brief
                            </button>
                        </div>
                        <p className="text-xs text-gray-700 mt-4">
                            Every Monday. Unsubscribe anytime. We never share your data.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewsletterSection;