import React from 'react';
import SectionWithMockup from "@/components/ui/section-with-mockup";

// Example data for multiple sections showcasing different use cases
const sections = [
    {
        title: (
            <>
                Intelligence,
                <br />
                delivered to you.
            </>
        ),
        description: (
            <>
                Get a tailored Monday morning brief directly in
                <br />
                your inbox, crafted by your virtual personal
                <br />
                analyst, spotlighting essential watchlist stories
                <br />
                and earnings for the week ahead.
            </>
        ),
        // Using the exact images from the provided example
        primaryImageSrc: 'https://www.fey.com/marketing/_next/static/media/newsletter-desktop-2_4x.e594b737.png',
        secondaryImageSrc: 'https://www.fey.com/marketing/_next/static/media/newsletter-desktop-1_4x.9cc114e6.png',
        reverseLayout: false
    },
    {
        title: (
            <>
                Research synthesis,
                <br />
                visualized.
            </>
        ),
        description: (
            <>
                Transform complex research data into intuitive
                <br />
                visual narratives. Our platform synthesizes
                <br />
                multi-dimensional insights into actionable
                <br />
                intelligence you can understand at a glance.
            </>
        ),
        // You can replace these with your own dashboard/analytics mockups
        primaryImageSrc: 'https://www.fey.com/marketing/_next/static/media/newsletter-desktop-2_4x.e594b737.png',
        secondaryImageSrc: 'https://www.fey.com/marketing/_next/static/media/newsletter-desktop-1_4x.9cc114e6.png',
        reverseLayout: true
    },
    {
        title: (
            <>
                Paradigm shifts,
                <br />
                decoded.
            </>
        ),
        description: (
            <>
                Access cutting-edge research translated into
                <br />
                practical applications. We bridge the gap
                <br />
                between theoretical brilliance and real-world
                <br />
                implementation strategies.
            </>
        ),
        // You can replace these with your own technology/research mockups
        primaryImageSrc: 'https://www.fey.com/marketing/_next/static/media/newsletter-desktop-2_4x.e594b737.png',
        secondaryImageSrc: 'https://www.fey.com/marketing/_next/static/media/newsletter-desktop-1_4x.9cc114e6.png',
        reverseLayout: false
    }
];

export default function SectionMockupDemoPage() {
    return (
        <div className="bg-black min-h-screen">
            {/* Header */}
            <div className="container mx-auto px-6 pt-24 pb-12 text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                    Section Mockup Component Demo
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    This page demonstrates the versatility of the SectionWithMockup component
                    with different content types and layout variations.
                </p>
            </div>

            {/* Render all sections */}
            {sections.map((section, index) => (
                <SectionWithMockup
                    key={index}
                    title={section.title}
                    description={section.description}
                    primaryImageSrc={section.primaryImageSrc}
                    secondaryImageSrc={section.secondaryImageSrc}
                    reverseLayout={section.reverseLayout}
                />
            ))}

            {/* Additional Information */}
            <div className="container mx-auto px-6 py-24">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-semibold text-white mb-8">Component Features</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                            <h3 className="text-xl font-medium text-white mb-3">Props</h3>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li>• <code className="text-gray-300">title</code>: String or React Node for the section title</li>
                                <li>• <code className="text-gray-300">description</code>: String or React Node for description text</li>
                                <li>• <code className="text-gray-300">primaryImageSrc</code>: Main mockup image URL</li>
                                <li>• <code className="text-gray-300">secondaryImageSrc</code>: Background accent image URL</li>
                                <li>• <code className="text-gray-300">reverseLayout</code>: Boolean to flip the layout</li>
                            </ul>
                        </div>
                        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                            <h3 className="text-xl font-medium text-white mb-3">Features</h3>
                            <ul className="space-y-2 text-gray-400 text-sm">
                                <li>• Smooth scroll-triggered animations via Framer Motion</li>
                                <li>• Responsive design with mobile-first approach</li>
                                <li>• Glassmorphism effects with backdrop blur</li>
                                <li>• Parallax-style image movements</li>
                                <li>• Flexible layout with reverse option</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
