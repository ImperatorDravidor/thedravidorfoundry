export default function CapabilitiesPage() {

  return (
    <>
      {/* Hero Section - Enhanced */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0 bg-radial-gradient" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-white/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-extralight mb-8 animate-in">
              Core <span className="text-gradient">Capabilities</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed animate-in" style={{ animationDelay: '0.1s' }}>
              The Dravidor Foundry&apos;s capabilities transcend traditional boundaries. 
              We architect entire commercial ecosystems around breakthrough innovations, 
              combining deep technical expertise with systematic commercialization.
            </p>
            <div className="mt-8 flex items-center gap-2 animate-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.15s' }} />
              <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/40 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Core Capabilities Grid - Enhanced */}
      <section className="py-24 border-t border-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />
        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="group relative p-8 border border-gray-900 hover:border-gray-700 transition-all duration-500 hover:shadow-2xl hover:shadow-white/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <div className="text-4xl font-extralight text-gradient opacity-20 mb-4">01</div>
                <h2 className="text-2xl font-light mb-6 group-hover:text-gradient transition-all duration-300">Technology Commercialization</h2>
                <p className="text-gray-500 mb-6 leading-relaxed group-hover:text-gray-400 transition-colors">
                  We don&apos;t merely license patents or spin out startups. We architect entire 
                  commercial ecosystems around breakthrough innovations.
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start hover:text-gray-500 transition-colors">
                    <span className="mr-3 text-gray-700">→</span>
                    <span>Deep technical due diligence beyond surface evaluation</span>
                  </li>
                  <li className="flex items-start hover:text-gray-500 transition-colors">
                    <span className="mr-3 text-gray-700">→</span>
                    <span>Market creation around technological capabilities</span>
                  </li>
                  <li className="flex items-start hover:text-gray-500 transition-colors">
                    <span className="mr-3 text-gray-700">→</span>
                    <span>Systematic value chain architecture</span>
                  </li>
                  <li className="flex items-start hover:text-gray-500 transition-colors">
                    <span className="mr-3 text-gray-700">→</span>
                    <span>Preemptive regulatory navigation</span>
                  </li>
                  <li className="flex items-start hover:text-gray-500 transition-colors">
                    <span className="mr-3 text-gray-700">→</span>
                    <span>Strategic timing based on market readiness</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="group relative p-8 border border-gray-900 hover:border-gray-700 transition-all duration-500 hover:shadow-2xl hover:shadow-white/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <div className="text-4xl font-extralight text-gradient opacity-20 mb-4">02</div>
                <h2 className="text-2xl font-light mb-6 group-hover:text-gradient transition-all duration-300">AI Implementation</h2>
                <p className="text-gray-500 mb-6 leading-relaxed group-hover:text-gray-400 transition-colors">
                  While others implement AI as a feature, we architect AI as foundational 
                  infrastructure, reimagining entire business processes.
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start hover:text-gray-500 transition-colors">
                    <span className="mr-3 text-gray-700">→</span>
                    <span>Systemic integration as core architectural element</span>
                  </li>
                  <li className="flex items-start hover:text-gray-500 transition-colors">
                    <span className="mr-3 text-gray-700">→</span>
                    <span>Building compound intelligence systems</span>
                  </li>
                  <li className="flex items-start hover:text-gray-500 transition-colors">
                    <span className="mr-3 text-gray-700">→</span>
                    <span>Optimizing unit economics of AI at scale</span>
                  </li>
                  <li className="flex items-start hover:text-gray-500 transition-colors">
                    <span className="mr-3 text-gray-700">→</span>
                    <span>Embedding ethical principles at system level</span>
                  </li>
                  <li className="flex items-start hover:text-gray-500 transition-colors">
                    <span className="mr-3 text-gray-700">→</span>
                    <span>Working at edge of theoretical possibility</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="group relative p-8 border border-gray-900 hover:border-gray-700 transition-all duration-500 hover:shadow-2xl hover:shadow-white/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <div className="text-4xl font-extralight text-gradient opacity-20 mb-4">03</div>
                <h2 className="text-2xl font-light mb-6 group-hover:text-gradient transition-all duration-300">Startup Leadership</h2>
                <p className="text-gray-500 mb-6 leading-relaxed group-hover:text-gray-400 transition-colors">
                  We don&apos;t just advise startups. We architect and operate them, combining 
                  startup agility with institutional thinking.
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start hover:text-gray-500 transition-colors">
                    <span className="mr-3 text-gray-700">→</span>
                    <span>Venture architecture from first principles</span>
                  </li>
                  <li className="flex items-start hover:text-gray-500 transition-colors">
                    <span className="mr-3 text-gray-700">→</span>
                    <span>Strategic velocity through systematic de-risking</span>
                  </li>
                  <li className="flex items-start hover:text-gray-500 transition-colors">
                    <span className="mr-3 text-gray-700">→</span>
                    <span>Leveraging institutional resources with agility</span>
                  </li>
                  <li className="flex items-start hover:text-gray-500 transition-colors">
                    <span className="mr-3 text-gray-700">→</span>
                    <span>Pre-consensus market positioning</span>
                  </li>
                  <li className="flex items-start hover:text-gray-500 transition-colors">
                    <span className="mr-3 text-gray-700">→</span>
                    <span>Exit engineering from inception</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="group relative p-8 border border-gray-900 hover:border-gray-700 transition-all duration-500 hover:shadow-2xl hover:shadow-white/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <div className="text-4xl font-extralight text-gradient opacity-20 mb-4">04</div>
                <h2 className="text-2xl font-light mb-6 group-hover:text-gradient transition-all duration-300">Team Building</h2>
                <p className="text-gray-500 mb-6 leading-relaxed group-hover:text-gray-400 transition-colors">
                  We aggregate co-conspirators who operate at the intersection of technical 
                  brilliance and commercial acumen.
                </p>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start hover:text-gray-500 transition-colors">
                    <span className="mr-3 text-gray-700">→</span>
                    <span>Assembling cognitively diverse teams</span>
                  </li>
                  <li className="flex items-start hover:text-gray-500 transition-colors">
                    <span className="mr-3 text-gray-700">→</span>
                    <span>Bringing together experts from disparate fields</span>
                  </li>
                  <li className="flex items-start hover:text-gray-500 transition-colors">
                    <span className="mr-3 text-gray-700">→</span>
                    <span>Creating performance amplification systems</span>
                  </li>
                  <li className="flex items-start hover:text-gray-500 transition-colors">
                    <span className="mr-3 text-gray-700">→</span>
                    <span>Engineering cultures for specific outcomes</span>
                  </li>
                  <li className="flex items-start hover:text-gray-500 transition-colors">
                    <span className="mr-3 text-gray-700">→</span>
                    <span>Building collective capability multiplication</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Depth - Enhanced */}
      <section className="py-24 border-t border-gray-900 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl" />
          <div className="absolute bottom-1/2 right-1/3 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight mb-4">Technical <span className="text-gradient">Depth</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Mastery across frontier technologies enables breakthrough innovation</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Quantum Computing",
                subtitle: "Computational Supremacy",
                capabilities: [
                  "Portfolio optimization via quantum annealing",
                  "Quantum Monte Carlo for risk assessment",
                  "Post-quantum cryptographic systems",
                  "Quantum amplitude estimation"
                ]
              },
              {
                title: "Energy Systems",
                subtitle: "Thermodynamic Computing",
                capabilities: [
                  "Reversible computing architectures",
                  "Entropy gradient computation",
                  "Ambient energy harvesting",
                  "AI-driven grid optimization"
                ]
              },
              {
                title: "Biological Computing",
                subtitle: "Living Systems",
                capabilities: [
                  "DNA storage at exabyte scale",
                  "Metabolic computing networks",
                  "Neural interface development",
                  "Programmable biological systems"
                ]
              },
              {
                title: "Commerce Infrastructure",
                subtitle: "Autonomous Economy",
                capabilities: [
                  "AI agent marketplaces",
                  "Self-organizing supply chains",
                  "Programmable money systems",
                  "Decentralized commerce protocols"
                ]
              },
              {
                title: "Advanced Materials",
                subtitle: "Programmable Matter",
                capabilities: [
                  "Materials with dynamic properties",
                  "Topological quantum states",
                  "Self-assembling systems",
                  "Engineered metamaterials"
                ]
              },
              {
                title: "Neuromorphic Systems",
                subtitle: "Silicon Consciousness",
                capabilities: [
                  "Spiking neural networks",
                  "Memristive architectures",
                  "Neuroplasticity simulation",
                  "Cognitive computing frameworks"
                ]
              }
            ].map((tech, index) => (
              <div 
                key={index} 
                className="group relative"

              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-xl" />
                <div className="relative p-6 border border-gray-900 hover:border-gray-700 transition-all h-full bg-black/50 backdrop-blur-sm hover:transform hover:scale-105 duration-300">
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300" />
                  <h3 className="text-xl font-light mb-2 group-hover:text-gradient transition-all duration-300">{tech.title}</h3>
                  <p className="text-xs text-gray-600 uppercase tracking-wider mb-4 group-hover:text-gray-500 transition-colors">{tech.subtitle}</p>
                  <ul className="space-y-2">
                    {tech.capabilities.map((cap, i) => (
                      <li key={i} className="text-sm text-gray-500 flex items-start group-hover:text-gray-400 transition-colors duration-300" style={{ transitionDelay: `${i * 50}ms` }}>
                        <span className="mr-2 text-gray-700 group-hover:text-white/30 transition-colors">•</span>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Synthesis - Enhanced */}
      <section className="py-24 border-t border-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-white/[0.02] to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extralight mb-12">
              The <span className="text-gradient">Compound</span> Effect
            </h2>
            <div className="space-y-8">
              <p className="text-xl text-gray-400 leading-relaxed">
                These capabilities do not operate in isolation. Technology commercialization 
                informs our AI implementation. Team building enables startup leadership. 
                Venture relations accelerate product-market fit.
              </p>
              <div className="flex justify-center items-center gap-4">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse" />
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>
              <p className="text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto">
                Each capability amplifies the others, creating compound advantages that 
                transcend linear combination. This synthesis, the ability to orchestrate 
                multiple capabilities toward singular objectives, defines The Dravidor 
                Foundry&apos;s institutional advantage.
              </p>
            </div>
            
            {/* Visual representation of compound effect */}
            <div className="mt-16 flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-full border border-gray-800 animate-pulse" />
                <div className="absolute inset-4 rounded-full border border-gray-700 animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="absolute inset-8 rounded-full border border-gray-600 animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute inset-12 rounded-full border border-gray-500 animate-pulse" style={{ animationDelay: '1.5s' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm text-gray-600 uppercase tracking-widest">Synthesis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
