'use client'

import { useState } from 'react'

export default function VenturesPage() {
  const [hoveredVenture, setHoveredVenture] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  return (
    <>
      {/* Hero Section - Enhanced */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0 bg-radial-gradient" />
        
        {/* Animated network visualization */}
        <div className="absolute inset-0 opacity-30">
          <svg className="w-full h-full">
            <line x1="20%" y1="30%" x2="40%" y2="50%" stroke="white" strokeWidth="0.5" className="animate-pulse" />
            <line x1="40%" y1="50%" x2="60%" y2="40%" stroke="white" strokeWidth="0.5" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <line x1="60%" y1="40%" x2="80%" y2="60%" stroke="white" strokeWidth="0.5" className="animate-pulse" style={{ animationDelay: '1s' }} />
            <line x1="40%" y1="50%" x2="50%" y2="70%" stroke="white" strokeWidth="0.5" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
            <circle cx="20%" cy="30%" r="3" fill="white" className="animate-pulse" />
            <circle cx="40%" cy="50%" r="3" fill="white" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            <circle cx="60%" cy="40%" r="3" fill="white" className="animate-pulse" style={{ animationDelay: '1s' }} />
            <circle cx="80%" cy="60%" r="3" fill="white" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
            <circle cx="50%" cy="70%" r="3" fill="white" className="animate-pulse" style={{ animationDelay: '2s' }} />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-extralight mb-8 animate-in">
              Market-Disrupting
              <span className="block text-gradient text-5xl md:text-7xl mt-2">Ventures</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed animate-in" style={{ animationDelay: '0.2s' }}>
              The Dravidor Foundry operates as the R&D powerhouse behind breakthrough businesses. 
              Each venture emerges from deep research, systematic development, and relentless execution.
            </p>
            <div className="mt-12 flex items-center gap-4 animate-in" style={{ animationDelay: '0.4s' }}>
              <div className="px-6 py-3 border border-gray-800 hover:border-gray-600 transition-colors cursor-pointer">
                <span className="text-sm text-gray-500">6 Active Ventures</span>
              </div>
              <div className="px-6 py-3 border border-gray-800 hover:border-gray-600 transition-colors cursor-pointer">
                <span className="text-sm text-gray-500">Compound Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Active Portfolio - Enhanced */}
      <section className="py-24 border-t border-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight mb-4">
              Active <span className="text-gradient">Portfolio</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Each venture in our ecosystem contributes to collective intelligence
            </p>
            
            {/* Category filters */}
            <div className="flex justify-center gap-4 flex-wrap">
              {['all', 'AI', 'Infrastructure', 'Biology', 'Intelligence'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-sm border transition-all duration-300 ${
                    selectedCategory === cat 
                      ? 'border-white/40 text-white bg-white/5' 
                      : 'border-gray-800 text-gray-600 hover:border-gray-700'
                  }`}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div 
              className="group relative"
              onMouseEnter={() => setHoveredVenture('XanderAI')}
              onMouseLeave={() => setHoveredVenture(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg" />
              <div className="relative p-8 border border-gray-900 hover:border-gray-700 transition-all h-full backdrop-blur-sm hover:transform hover:scale-105 duration-300">
                <div className="absolute top-4 right-4">
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    hoveredVenture === 'XanderAI' ? 'bg-white animate-pulse' : 'bg-gray-700'
                  }`} />
                </div>
                <h3 className="text-2xl font-light mb-3 group-hover:text-gradient transition-all">XanderAI</h3>
                <div className="text-xs text-gray-600 uppercase tracking-wider mb-4 group-hover:text-gray-500 transition-colors">
                  Artificial Intelligence
                </div>
                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                  Advanced AI systems transforming enterprise operations through cognitive automation, 
                  intelligent decision support, and adaptive learning architectures that evolve with 
                  organizational needs.
                </p>
                <div className="mt-6 pt-4 border-t border-gray-900 group-hover:border-gray-800 transition-colors">
                  <div className="flex items-center justify-between text-xs text-gray-700">
                    <span>Status: Active</span>
                    <span className="text-gradient opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div 
              className="group relative"
              onMouseEnter={() => setHoveredVenture('InitDev')}
              onMouseLeave={() => setHoveredVenture(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg" />
              <div className="relative p-8 border border-gray-900 hover:border-gray-700 transition-all h-full backdrop-blur-sm hover:transform hover:scale-105 duration-300">
                <div className="absolute top-4 right-4">
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    hoveredVenture === 'InitDev' ? 'bg-white animate-pulse' : 'bg-gray-700'
                  }`} />
                </div>
                <h3 className="text-2xl font-light mb-3 group-hover:text-gradient transition-all">InitDev</h3>
                <div className="text-xs text-gray-600 uppercase tracking-wider mb-4 group-hover:text-gray-500 transition-colors">
                  Development Platform
                </div>
                <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                  Next-generation development platforms accelerating software creation through AI-powered 
                  code generation, automated architecture design, and intelligent debugging systems.
                </p>
                <div className="mt-6 pt-4 border-t border-gray-900 group-hover:border-gray-800 transition-colors">
                  <div className="flex items-center justify-between text-xs text-gray-700">
                    <span>Status: Active</span>
                    <span className="text-gradient opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </div>
                </div>
              </div>
            </div>
            
            {[
              { name: 'Systema', category: 'Infrastructure', subtitle: 'Infrastructure Automation', desc: 'Infrastructure automation and system orchestration at planetary scale, enabling autonomous operations across distributed networks with self-healing capabilities.' },
              { name: 'Animalia', category: 'Biology', subtitle: 'Bio-Inspired Computing', desc: 'Bio-inspired computing architectures leveraging evolutionary algorithms, swarm intelligence, and genetic programming for complex optimization problems.' },
              { name: 'XerxesAGI', category: 'Intelligence', subtitle: 'General Intelligence', desc: 'Pursuing artificial general intelligence through novel architectures that combine symbolic reasoning, neural approaches, and cognitive architectures.' },
              { name: 'Inflio', category: 'Intelligence', subtitle: 'Knowledge Systems', desc: 'Information flow optimization and knowledge management systems transforming how organizations capture, process, and leverage intelligence at scale.' }
            ].map((venture, index) => (
              <div 
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredVenture(venture.name)}
                onMouseLeave={() => setHoveredVenture(null)}
                style={{ 
                  display: selectedCategory === 'all' || selectedCategory === venture.category ? 'block' : 'none',
                  animation: 'fadeIn 0.5s ease-out'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg" />
                <div className="relative p-8 border border-gray-900 hover:border-gray-700 transition-all h-full backdrop-blur-sm hover:transform hover:scale-105 duration-300">
                  <div className="absolute top-4 right-4">
                    <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      hoveredVenture === venture.name ? 'bg-white animate-pulse' : 'bg-gray-700'
                    }`} />
                  </div>
                  <h3 className="text-2xl font-light mb-3 group-hover:text-gradient transition-all">{venture.name}</h3>
                  <div className="text-xs text-gray-600 uppercase tracking-wider mb-4 group-hover:text-gray-500 transition-colors">
                    {venture.subtitle}
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                    {venture.desc}
                  </p>
                  <div className="mt-6 pt-4 border-t border-gray-900 group-hover:border-gray-800 transition-colors">
                    <div className="flex items-center justify-between text-xs text-gray-700">
                      <span>Status: Active</span>
                      <span className="text-gradient opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Venture Creation Methodology - Enhanced */}
      <section className="py-24 border-t border-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extralight mb-4">
                The Genesis <span className="text-gradient">Process</span>
              </h2>
              <p className="text-gray-500 max-w-3xl mx-auto">
                We don&apos;t acquire companies; we architect them. Each venture emerges from a 
                systematic genesis process that transforms theoretical possibility into commercial reality.
              </p>
            </div>
            <div className="relative">
              {/* Timeline connector */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-800 to-transparent" />
              
              <div className="space-y-16">
              {[
                {
                  phase: "01",
                  title: "Opportunity Identification",
                  description: "Using our anticipatory research framework to identify ventures before market consensus forms"
                },
                {
                  phase: "02",
                  title: "Foundation Architecture",
                  description: "Designing the fundamental structure: team, technology, market strategy before incorporation"
                },
                {
                  phase: "03",
                  title: "Resource Orchestration",
                  description: "Assembling resources: capital, talent, technology, partnerships in optimal configuration"
                },
                {
                  phase: "04",
                  title: "Acceleration Protocol",
                  description: "Leveraging institutional resources and proven methodologies from our existing portfolio"
                },
                {
                  phase: "05",
                  title: "Strategic Evolution",
                  description: "Continuous strategic refinement based on market feedback and technological advancement"
                }
              ].map((step, index) => (
                <div key={index} className={`relative flex items-center gap-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-xl font-light mb-2 hover:text-gradient transition-colors duration-300 cursor-pointer">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-full bg-black border-2 border-gray-800 flex items-center justify-center hover:border-gray-600 transition-colors duration-300 group">
                      <span className="text-2xl font-extralight text-gradient group-hover:scale-110 transition-transform">
                        {step.phase}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-1" />
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Creation */}
      <section className="py-20 border-t border-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light mb-12">Value Creation Architecture</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl">
            <div>
              <h3 className="text-xl font-light mb-4 text-gradient">Network Effects</h3>
              <ul className="space-y-3 text-gray-500">
                <li className="flex items-start">
                  <span className="mr-3 text-gray-700">◆</span>
                  <span>Technology Network Effects: Shared R&D accelerates all ventures</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-700">◆</span>
                  <span>Talent Network Effects: Movement between ventures spreads expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-700">◆</span>
                  <span>Market Network Effects: Success in one domain opens adjacent opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-700">◆</span>
                  <span>Capital Network Effects: Successful exits fund future ventures</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-light mb-4 text-gradient">Strategic Advantages</h3>
              <ul className="space-y-3 text-gray-500">
                <li className="flex items-start">
                  <span className="mr-3 text-gray-700">◆</span>
                  <span>Institutional Memory: Lessons compound across ventures</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-700">◆</span>
                  <span>Resource Sovereignty: Optimal allocation without external constraints</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-700">◆</span>
                  <span>Market Making: Collectively define industry standards</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-gray-700">◆</span>
                  <span>Exit Optionality: Strategic timing independent of fund cycles</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Philosophy - Enhanced */}
      <section className="py-24 border-t border-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-white/[0.02] to-transparent" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extralight mb-12">
              Portfolio <span className="text-gradient">Philosophy</span>
            </h2>
            <div className="space-y-8 text-gray-400 leading-relaxed">
              <p className="text-xl">
                Each venture in our portfolio represents a deliberate bet on a specific technological 
                convergence. XanderAI explores the limits of narrow AI. XerxesAGI pushes toward general 
                intelligence. Systema builds the infrastructure for autonomous operations. Animalia 
                leverages biological principles for computation.
              </p>
              
              <div className="flex justify-center my-12">
                <div className="flex items-center gap-4">
                  <div className="w-24 h-px bg-gradient-to-r from-transparent to-white/20" />
                  <div className="w-3 h-3 bg-white/20 rounded-full animate-pulse" />
                  <div className="w-24 h-px bg-gradient-to-l from-transparent to-white/20" />
                </div>
              </div>
              
              <p className="text-lg">
                Together, they form a coherent vision of the future: a world where intelligence is 
                abundant, systems are self-organizing, and the boundary between biological and digital 
                dissolves. Each venture advances this vision while generating immediate commercial value.
              </p>
              
              <div className="mt-16 pt-16 border-t border-gray-900">
                <p className="text-2xl font-extralight text-gray-300">
                  This is how we build the future:
                  <span className="block text-gradient text-3xl mt-2">one breakthrough business at a time.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}