'use client'

export default function ResearchPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-extralight mb-8">
              Research <span className="text-gradient">Methodologies</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              The Dravidor Foundry operates on a fundamentally different research paradigm. 
              While traditional R&D responds to market needs, we anticipate market evolution 
              before needs crystallize.
            </p>
          </div>
        </div>
      </section>

      {/* Methodological Framework */}
      <section className="py-20 border-t border-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light mb-12">Anticipatory Research Architecture</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
            <div className="p-6 border border-gray-900">
              <h3 className="text-xl font-light mb-4 text-gradient">Convergence Mapping</h3>
              <p className="text-gray-500 leading-relaxed">
                We systematically map intersection points of emerging technologies, identifying 
                convergence zones where breakthrough innovations emerge. These aren&apos;t linear 
                extrapolations but non-obvious combinations.
              </p>
            </div>
            <div className="p-6 border border-gray-900">
              <h3 className="text-xl font-light mb-4 text-gradient">Phase Transition Detection</h3>
              <p className="text-gray-500 leading-relaxed">
                We identify phase transitions in technological capability: moments when quantitative 
                improvements become qualitative transformations. These discontinuities represent 
                primary opportunities for value creation.
              </p>
            </div>
            <div className="p-6 border border-gray-900">
              <h3 className="text-xl font-light mb-4 text-gradient">Systematic Serendipity</h3>
              <p className="text-gray-500 leading-relaxed">
                While serendipity cannot be commanded, it can be systematically encouraged. 
                Our research architecture creates collision spaces where disparate ideas intersect, 
                increasing breakthrough probability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Research Vectors */}
      <section className="py-20 border-t border-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light mb-12">Current Research Vectors</h2>
          <div className="space-y-12 max-w-6xl">
            {[
              {
                title: "Intelligence Architecture",
                subtitle: "The Post-AI Enterprise",
                description: "Moving beyond AI implementation toward intelligence architecture. Designing organizations where human and artificial intelligence create compound capabilities. This isn't about automation but augmentation at the organizational level."
              },
              {
                title: "Computational Economics",
                subtitle: "Markets as Computational Systems",
                description: "Traditional economic models fail at the speed and complexity of modern markets. We're developing computational frameworks that treat markets as complex adaptive systems, enabling prediction and intervention at previously impossible scales."
              },
              {
                title: "Synthetic Biology Interfaces",
                subtitle: "The Biological-Digital Convergence",
                description: "The boundary between biological and digital systems is dissolving. Our research explores the commercial implications of this convergence, from bio-computational systems to living materials."
              },
              {
                title: "Quantum-Classical Hybrid Systems",
                subtitle: "Practical Quantum Advantage",
                description: "While others wait for quantum supremacy, we're engineering hybrid systems that leverage quantum capabilities within classical frameworks, achieving practical advantages today."
              },
              {
                title: "Autonomous Coordination Systems",
                subtitle: "Beyond Automation",
                description: "Automation is primitive compared to autonomous coordination. We're developing systems where multiple autonomous agents coordinate without central control, creating emergent capabilities."
              },
              {
                title: "Post-Scarcity Economics",
                subtitle: "Abundance Frameworks",
                description: "As technology drives marginal costs toward zero in multiple domains, we develop economic frameworks for post-scarcity scenarios, including universal basic asset models and attention economics."
              }
            ].map((research, index) => (
              <div 
                key={index} 
                className="group relative p-8 border border-gray-900 hover:border-gray-700 transition-all duration-500 cursor-pointer"
                onClick={() => {}}
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-3xl font-extralight text-gradient opacity-30">{String(index + 1).padStart(2, '0')}</span>
                      <h3 className="text-2xl font-light group-hover:text-gradient transition-colors duration-300">{research.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 uppercase tracking-wider mb-4 ml-14">{research.subtitle}</p>
                    <p className="text-gray-500 leading-relaxed ml-14 group-hover:text-gray-400 transition-colors">{research.description}</p>
                  </div>
                  <div className="ml-4">
                    <div className="w-6 h-6 border border-gray-700 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-white/10">
                      <div className="w-2 h-2 bg-white rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100" />
                    </div>
                  </div>
                </div>
                
                {false && (
                  <div className="mt-6 pt-6 border-t border-gray-800 ml-14 animate-in">
                    <p className="text-sm text-gray-600 italic">
                      This research vector is actively being pursued across multiple ventures in our portfolio, 
                      creating compound insights that accelerate breakthrough discovery.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mathematical Foundations */}
      <section className="py-20 border-t border-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light mb-12">Mathematical Rigor</h2>
          <div className="max-w-4xl">
            <p className="text-gray-400 mb-8 leading-relaxed">
              Our research is grounded in mathematical formalism. This foundation ensures 
              our insights are rigorous rather than rhetorical.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border border-gray-900">
                <h3 className="text-lg font-light mb-3 text-gradient">Category Theory</h3>
                <p className="text-sm text-gray-600">Understanding morphisms between domains</p>
              </div>
              <div className="p-6 border border-gray-900">
                <h3 className="text-lg font-light mb-3 text-gradient">Topology</h3>
                <p className="text-sm text-gray-600">Mapping solution spaces and identifying invariants</p>
              </div>
              <div className="p-6 border border-gray-900">
                <h3 className="text-lg font-light mb-3 text-gradient">Information Theory</h3>
                <p className="text-sm text-gray-600">Quantifying knowledge and uncertainty</p>
              </div>
              <div className="p-6 border border-gray-900">
                <h3 className="text-lg font-light mb-3 text-gradient">Game Theory</h3>
                <p className="text-sm text-gray-600">Strategic analysis of multi-agent systems</p>
              </div>
              <div className="p-6 border border-gray-900">
                <h3 className="text-lg font-light mb-3 text-gradient">Complexity Theory</h3>
                <p className="text-sm text-gray-600">Understanding emergent phenomena</p>
              </div>
              <div className="p-6 border border-gray-900">
                <h3 className="text-lg font-light mb-3 text-gradient">Bayesian Inference</h3>
                <p className="text-sm text-gray-600">Updating beliefs with empirical evidence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Foundry Process */}
      <section className="py-20 border-t border-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light mb-12">The Foundry Process</h2>
          <div className="max-w-4xl">
            <p className="text-gray-400 mb-12 leading-relaxed">
              Our research methodology transforms raw technological potential into commercial 
              reality through systematic stages.
            </p>
            <div className="space-y-6">
              {[
                "Horizon Scanning: Systematic identification of emerging capabilities",
                "Convergence Analysis: Deep investigation of technology combinations",
                "Commercial Architecture: Designing business models before technology development",
                "Rapid Prototyping: Moving from concept to functional prototype at exceptional speed",
                "Market Engineering: Creating conditions necessary for innovation adoption",
                "Scale Architecture: Designing for exponential growth from inception"
              ].map((step, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-2xl font-extralight text-gray-700 mr-4">{String(index + 1).padStart(2, '0')}</span>
                  <p className="text-gray-500 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
