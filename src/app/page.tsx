"use client";

import AnimatedShaderBackground from "@/components/ui/animated-shader-background";

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Enhanced with Animated Shader Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Shader Background */}
        <div className="absolute inset-0 w-full h-full">
          <AnimatedShaderBackground />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-7xl md:text-9xl font-extralight tracking-tight mb-8 animate-in">
              The Dravidor
              <span className="block text-gradient">Foundry</span>
            </h1>
            <p className="text-2xl md:text-3xl font-light text-gray-300 mb-12 animate-in" style={{ animationDelay: '0.1s' }}>
              The R&D Powerhouse Behind Market-Disrupting Businesses
            </p>
            <p className="text-lg md:text-xl text-gray-500 max-w-4xl mx-auto leading-relaxed animate-in" style={{ animationDelay: '0.2s' }}>
              We architect possibility at the intersection where theoretical brilliance 
              meets practical application. From quantum algorithms to biological computing, 
              we transform frontier research into category-defining ventures.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/40 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Our Ventures - Clean Display */}
      <section className="py-32 relative border-t border-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-extralight mb-8">
                Our <span className="text-gradient">Ventures</span>
              </h2>
              <p className="text-gray-500 text-lg max-w-3xl mx-auto">
                Building breakthrough businesses that define new markets
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
              {[
                "XanderAI",
                "InitDev",
                "Systema",
                "Animalia",
                "XerxesAGI",
                "Inflio"
              ].map((venture, index) => (
                <div key={index} className="group text-center">
                  <h3 className="text-2xl md:text-3xl font-extralight group-hover:text-gradient transition-all duration-300 cursor-pointer">
                    {venture}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Thesis - Restored */}
      <section className="py-32 relative border-t border-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extralight mb-12">
              The <span className="text-gradient">Thesis</span>
            </h2>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p className="text-lg">
                Humanity stands at an inflection point. The convergence of artificial intelligence, 
                quantum computing, biological engineering, and energy systems presents unprecedented 
                opportunity to address civilization&apos;s grand challenges.
              </p>
              <p>
                We recognize that the most profound opportunities exist not in the technologies 
                themselves, but in their convergence. The intersection of quantum computing with 
                financial modeling, the merger of synthetic biology with materials science, the 
                synthesis of neuromorphic computing with economic theory. These represent the 
                topology of future value creation.
              </p>
              <p className="text-sm text-gray-600">
                Our approach is grounded in rigorous scientific methodology. We apply principles 
                from complexity science, systems theory, and emergence to identify phase transitions 
                in technological capability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do - Comprehensive */}
      <section className="py-32 relative border-t border-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-extralight text-center mb-20">
              What We <span className="text-gradient">Do</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-16">
              <div className="text-center">
                <div className="text-5xl font-extralight mb-6 text-gradient opacity-60">Research</div>
                <p className="text-gray-500 leading-relaxed">
                  Anticipatory research at the frontiers of science. Quantum computing, synthetic biology, 
                  neuromorphic systems, and beyond.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-extralight mb-6 text-gradient opacity-60">Build</div>
                <p className="text-gray-500 leading-relaxed">
                  Transform breakthrough research into market-defining ventures. From concept to scale, 
                  we architect companies that shape industries.
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-extralight mb-6 text-gradient opacity-60">Scale</div>
                <p className="text-gray-500 leading-relaxed">
                  Deploy ventures that compound knowledge and create emergent capabilities across 
                  our entire portfolio ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Research Vectors - Expanded and Restored */}
      <section className="py-32 border-t border-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extralight text-center mb-20">
            Research <span className="text-gradient">Vectors</span>
          </h2>
          
          <div className="max-w-7xl mx-auto space-y-16">
            {[
              {
                title: "Quantum-Classical Hybrid Systems",
                domain: "COMPUTATIONAL SUPREMACY",
                description: "While others wait for quantum supremacy, we engineer hybrid systems that leverage quantum capabilities within classical frameworks.",
                details: [
                  "Portfolio optimization via quantum annealing for NP-hard problems",
                  "Quantum Monte Carlo methods for tail risk assessment",
                  "Post-quantum cryptographic systems for financial infrastructure",
                  "Quantum amplitude estimation for complex derivative structures"
                ],
                formula: "⟨ψ|H|ψ⟩ = E₀"
              },
              {
                title: "Synthetic Biology Interfaces",
                domain: "BIO-DIGITAL CONVERGENCE",
                description: "The boundary between biological and digital systems is dissolving. Our research explores the commercial implications of this convergence.",
                details: [
                  "DNA storage systems at exabyte scale",
                  "Metabolic computing leveraging cellular processes",
                  "Programmable biological systems for manufacturing",
                  "Bio-digital hybrid architectures"
                ],
                formula: "dN/dt = rN(1 - N/K)"
              },
              {
                title: "Neuromorphic Computing",
                domain: "SILICON CONSCIOUSNESS",
                description: "Computing architectures that mirror biological neural networks, creating systems that learn, adapt, and potentially exhibit emergent consciousness.",
                details: [
                  "Spiking neural networks at scale",
                  "Memristive computing architectures",
                  "Neuroplasticity in silicon substrates",
                  "Consciousness metrics and measurement"
                ],
                formula: "τ dV/dt = -V + RI(t)"
              },
              {
                title: "Post-Scarcity Economics",
                domain: "ABUNDANCE FRAMEWORKS",
                description: "As technology drives marginal costs toward zero, we develop economic frameworks for abundance-based scenarios.",
                details: [
                  "Universal basic asset models",
                  "Reputation-based economic systems",
                  "Attention economics at planetary scale",
                  "Creative commons optimization"
                ],
                formula: "MC → 0 as Q → ∞"
              }
            ].map((item, index) => (
              <div key={index} className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="text-xs text-gray-600 uppercase tracking-wider mb-2">{item.domain}</div>
                  <h3 className="text-2xl font-light mb-4">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-6">{item.description}</p>
                  <ul className="space-y-2">
                    {item.details.map((detail, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start">
                        <span className="mr-2 text-gray-700">→</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <code className="text-xl text-gray-700 font-mono">{item.formula}</code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy - Simplified */}
      <section className="py-32 border-t border-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-extralight mb-16 text-center">
              Our <span className="text-gradient">Philosophy</span>
            </h2>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-light mb-4">Antifragile by Design</h3>
                <p className="text-gray-500 leading-relaxed">
                  We build systems that benefit from volatility. Failed experiments provide valuable 
                  information. Unexpected discoveries open new vectors. Market turbulence reveals opportunities.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-light mb-4">Beyond Equilibrium</h3>
                <p className="text-gray-500 leading-relaxed">
                  Markets are dynamic systems far from equilibrium. We model phase transitions, 
                  bifurcations, and strange attractors to identify breakthrough opportunities.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-light mb-4">Compound Innovation</h3>
                <p className="text-gray-500 leading-relaxed">
                  Each venture contributes to collective intelligence. Insights cascade across 
                  portfolio. Technologies developed for one challenge illuminate solutions to others.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Method */}
      <section className="py-32 border-t border-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extralight mb-12">
              The <span className="text-gradient">Method</span>
            </h2>
            <p className="text-gray-500 max-w-3xl mx-auto mb-16 leading-relaxed">
              Our approach cycles from theory to practice and back, creating new knowledge 
              at the intersection of domains.
            </p>
            <div className="grid md:grid-cols-5 gap-8">
              {[
                { num: "01", title: "Abstract", desc: "Theoretical principles" },
                { num: "02", title: "Application", desc: "Real systems" },
                { num: "03", title: "Validation", desc: "Testing reality" },
                { num: "04", title: "Refinement", desc: "Model updates" },
                { num: "05", title: "Scale", desc: "Commercial deployment" }
              ].map((step, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-extralight text-gradient mb-4">{step.num}</div>
                  <h3 className="text-sm font-light mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-32 border-t border-gray-900">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <p className="text-3xl md:text-4xl font-extralight text-gray-300 leading-relaxed mb-12">
              We build the companies that build the future.
            </p>
            <p className="text-lg text-gray-500">
              From frontier research to market dominance. From theoretical possibility to commercial reality.
            </p>
            <div className="mt-16">
              <p className="text-sm text-gray-700 uppercase tracking-widest">
                The Dravidor Foundry
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}