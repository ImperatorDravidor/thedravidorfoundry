'use client'

import { useState } from 'react'

export default function EngagementPage() {
  const [activeFramework, setActiveFramework] = useState<number | null>(null)
  const [hoveredPrinciple, setHoveredPrinciple] = useState<string | null>(null)

  return (
    <>
      {/* Hero Section - Enhanced */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0 bg-radial-gradient" />
        
        {/* Animated collaboration lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse" />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-extralight mb-8 animate-in">
              Engagement
              <span className="block text-gradient text-5xl md:text-7xl mt-2">Philosophy</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed animate-in" style={{ animationDelay: '0.2s' }}>
              The Dravidor Foundry engages selectively with partners who share our vision 
              of technological transformation and possess the institutional courage to pursue 
              breakthrough innovation.
            </p>
            <div className="mt-12 animate-in" style={{ animationDelay: '0.4s' }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-gray-800">
                <div className="w-2 h-2 bg-white/40 rounded-full animate-pulse" />
                <span className="text-sm text-gray-600 uppercase tracking-wider">Strategic Partnerships Only</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Vendor Relationships */}
      <section className="py-20 border-t border-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-light mb-8">Beyond Vendor Relationships</h2>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                We don&apos;t have clients; we have partners. Our engagements are structured as 
                strategic collaborations where both parties contribute unique capabilities 
                toward shared objectives. This isn&apos;t semantics but a fundamental difference 
                in how we structure relationships, share risk, and distribute value.
              </p>
              <p>
                Our ideal partners engage with us before market consensus forms. They understand 
                that waiting for validation means missing the opportunity for market leadership. 
                These organizations possess strategic patience, understanding that breakthrough 
                innovation operates on different timescales than incremental improvement.
              </p>
              <p className="text-sm text-gray-600 italic">
                Every engagement must create value for both parties that exceeds what either 
                could achieve independently. This isn&apos;t about fee optimization but about 
                creating new categories of value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Principles - Enhanced */}
      <section className="py-24 border-t border-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight mb-4">
              Foundational <span className="text-gradient">Principles</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our engagement philosophy is built on mutual success and strategic alignment</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              { symbol: '∫', title: 'Mutual Value Creation', desc: 'Every engagement must create value for both parties that exceeds what either could achieve independently. We measure success not in billable hours but in breakthrough achievements and market transformations.' },
              { symbol: '∇', title: 'Intellectual Property Philosophy', desc: 'We believe in strategic IP sharing that accelerates innovation while protecting competitive advantages. Our frameworks ensure both parties benefit from created IP while maintaining incentives for continued innovation.' },
              { symbol: 'Δ', title: 'Risk Distribution', desc: 'We structure engagements to distribute risk appropriately based on capabilities and resources. Those best positioned to manage specific risks assume them, creating optimal risk-adjusted returns for all parties.' },
              { symbol: 'Ω', title: 'Transparency and Trust', desc: 'Our engagements operate on radical transparency. Partners have full visibility into our processes, progress, and challenges. This transparency enables true collaboration rather than vendor management.' }
            ].map((principle, index) => (
              <div 
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredPrinciple(principle.title)}
                onMouseLeave={() => setHoveredPrinciple(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg" />
                <div className="relative p-8 border border-gray-900 hover:border-gray-700 transition-all duration-500 h-full backdrop-blur-sm hover:transform hover:scale-105">
                  <div className="text-5xl font-extralight text-gradient opacity-20 mb-6 group-hover:opacity-40 transition-opacity">
                    {principle.symbol}
                  </div>
                  <h3 className="text-xl font-light mb-4 group-hover:text-gradient transition-colors duration-300">
                    {principle.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors">
                    {principle.desc}
                  </p>
                  {hoveredPrinciple === principle.title && (
                    <div className="absolute top-4 right-4">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Frameworks - Enhanced */}
      <section className="py-24 border-t border-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight mb-4">
              Engagement <span className="text-gradient">Architectures</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Structured frameworks for transformative partnerships</p>
          </div>
          <div className="space-y-12 max-w-7xl mx-auto">
            <div 
              className="group relative p-8 border border-gray-900 hover:border-gray-700 transition-all duration-500 cursor-pointer"
              onClick={() => setActiveFramework(activeFramework === 0 ? null : 0)}
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-2xl font-light mb-4 group-hover:text-gradient transition-colors duration-300">
                    Strategic Innovation Partnership
                  </h3>
                  <p className="text-sm text-gray-600 uppercase tracking-wider mb-4">3-7 YEAR HORIZONS</p>
                  <div className={`w-8 h-8 border border-gray-800 rounded-full flex items-center justify-center transition-all duration-300 ${activeFramework === 0 ? 'bg-white/10' : ''}`}>
                    <div className={`w-3 h-3 bg-white rounded-full transition-all duration-300 ${activeFramework === 0 ? 'opacity-100' : 'opacity-0'}`} />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-500 mb-6 leading-relaxed group-hover:text-gray-400 transition-colors">
                    For organizations seeking to fundamentally transform their industries through 
                    technological innovation. These partnerships involve deep technology transfer, 
                    capability building, and co-creation of new market categories.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="hover:text-gray-500 transition-colors">• Long-term strategic alignment</li>
                      <li className="hover:text-gray-500 transition-colors">• Shared risk and reward frameworks</li>
                      <li className="hover:text-gray-500 transition-colors">• Deep technology transfer</li>
                    </ul>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="hover:text-gray-500 transition-colors">• Market category co-creation</li>
                      <li className="hover:text-gray-500 transition-colors">• Executive-level coordination</li>
                      <li className="hover:text-gray-500 transition-colors">• Proprietary advantage development</li>
                    </ul>
                  </div>
                </div>
              </div>
              {activeFramework === 0 && (
                <div className="mt-6 pt-6 border-t border-gray-800 animate-in">
                  <p className="text-sm text-gray-600 italic">
                    These partnerships represent our deepest level of engagement, where we effectively become an extension of your innovation capability.
                  </p>
                </div>
              )}
            </div>
            
            {[
              { 
                title: 'Venture Co-Creation', 
                subtitle: 'EQUITY PARTNERSHIPS',
                desc: 'Joint venture structures where domain expertise meets technological capability. We architect ventures from first principles, combining our systematic approach with partner’s market knowledge.',
                features1: ['Joint venture architecture', 'Shared IP development', 'Resource orchestration'],
                features2: ['Accelerated market entry', 'Strategic exit planning', 'Portfolio synergy capture']
              },
              {
                title: 'Technology Commercialization',
                subtitle: 'LAB TO MARKET',
                desc: 'For research institutions or technology companies with breakthrough innovations seeking systematic commercialization. We apply our proven methodologies to transform research into revenue.',
                features1: ['Technical due diligence', 'Market category design', 'Capital orchestration'],
                features2: ['Team aggregation', 'Go-to-market acceleration', 'Strategic positioning']
              },
              {
                title: 'Capability Development',
                subtitle: 'INSTITUTIONAL TRANSFORMATION',
                desc: 'For organizations seeking to build internal innovation capabilities matching our methodologies. We transfer not just knowledge but the systems that create knowledge, building antifragile innovation engines.',
                features1: ['Methodology transfer', 'System architecture', 'Talent development'],
                features2: ['Research partnerships', 'Strategic advisory', 'Cultural transformation']
              }
            ].map((framework, index) => (
              <div 
                key={index}
                className="group relative p-8 border border-gray-900 hover:border-gray-700 transition-all duration-500 cursor-pointer"
                onClick={() => setActiveFramework(activeFramework === index + 1 ? null : index + 1)}
              >
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-2xl font-light mb-4 group-hover:text-gradient transition-colors duration-300">
                      {framework.title}
                    </h3>
                    <p className="text-sm text-gray-600 uppercase tracking-wider mb-4">{framework.subtitle}</p>
                    <div className={`w-8 h-8 border border-gray-800 rounded-full flex items-center justify-center transition-all duration-300 ${activeFramework === index + 1 ? 'bg-white/10' : ''}`}>
                      <div className={`w-3 h-3 bg-white rounded-full transition-all duration-300 ${activeFramework === index + 1 ? 'opacity-100' : 'opacity-0'}`} />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-gray-500 mb-6 leading-relaxed group-hover:text-gray-400 transition-colors">
                      {framework.desc}
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-sm text-gray-600">
                        {framework.features1.map((feature, i) => (
                          <li key={i} className="hover:text-gray-500 transition-colors">• {feature}</li>
                        ))}
                      </ul>
                      <ul className="space-y-2 text-sm text-gray-600">
                        {framework.features2.map((feature, i) => (
                          <li key={i} className="hover:text-gray-500 transition-colors">• {feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {activeFramework === index + 1 && (
                  <div className="mt-6 pt-6 border-t border-gray-800 animate-in">
                    <p className="text-sm text-gray-600 italic">
                      This framework is designed for maximum value creation through strategic alignment and systematic execution.
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Engagement Process */}
      <section className="py-20 border-t border-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light mb-12">The Engagement Process</h2>
          <div className="max-w-4xl">
            <div className="space-y-8">
              {[
                {
                  phase: "Discovery",
                  description: "Deep mutual assessment to ensure strategic alignment and capability fit. We invest significant effort in understanding potential partners&apos; strategic objectives, institutional capabilities, and cultural alignment."
                },
                {
                  phase: "Architecture",
                  description: "Collaborative design of engagement structure, objectives, and success metrics. We engineer partnerships from first principles, ensuring optimal value creation mechanisms."
                },
                {
                  phase: "Execution",
                  description: "Systematic pursuit of defined objectives with continuous refinement. Our execution combines the rigor of research with the urgency of commercial reality."
                },
                {
                  phase: "Evolution",
                  description: "Ongoing adaptation based on learnings and changing conditions. Partnerships evolve as understanding deepens and opportunities emerge."
                },
                {
                  phase: "Transition",
                  description: "Structured handoff or continuation based on achieved outcomes. Success creates options for deeper engagement or graceful completion."
                }
              ].map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="text-3xl font-extralight text-gradient">{String(index + 1).padStart(2, '0')}</div>
                  <div>
                    <h3 className="text-xl font-light mb-2">{step.phase}</h3>
                    <p className="text-gray-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Selection Criteria Matrix */}
      <section className="py-20 border-t border-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light mb-12">Selection Criteria</h2>
          <div className="max-w-6xl">
            <p className="text-gray-400 mb-12 leading-relaxed">
              We evaluate potential partners across multiple dimensions, seeking alignment 
              in vision, capability, and ambition. Our selection process is deliberate and 
              thorough. We engage with few but engage deeply.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="p-6 border border-gray-900">
                <h3 className="text-lg font-light mb-3">Strategic Alignment</h3>
                <ul className="text-xs text-gray-600 space-y-2">
                  <li>• Vision compatibility</li>
                  <li>• Pre-consensus thinking</li>
                  <li>• Category creation mindset</li>
                </ul>
              </div>
              <div className="p-6 border border-gray-900">
                <h3 className="text-lg font-light mb-3">Institutional Readiness</h3>
                <ul className="text-xs text-gray-600 space-y-2">
                  <li>• Leadership commitment</li>
                  <li>• Resource availability</li>
                  <li>• Organizational agility</li>
                </ul>
              </div>
              <div className="p-6 border border-gray-900">
                <h3 className="text-lg font-light mb-3">Market Position</h3>
                <ul className="text-xs text-gray-600 space-y-2">
                  <li>• Market influence</li>
                  <li>• Distribution capability</li>
                  <li>• Regulatory relationships</li>
                </ul>
              </div>
              <div className="p-6 border border-gray-900">
                <h3 className="text-lg font-light mb-3">Cultural Compatibility</h3>
                <ul className="text-xs text-gray-600 space-y-2">
                  <li>• Comfort with ambiguity</li>
                  <li>• Intellectual honesty</li>
                  <li>• Collaborative mindset</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Don't Do - Expanded */}
      <section className="py-20 border-t border-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-light mb-12">What We Don&apos;t Do</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-light mb-6 text-gradient">We Don&apos;t Provide</h3>
                <ul className="space-y-3 text-gray-500">
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-700">×</span>
                    <div>
                      <span className="block">Incremental optimization services</span>
                      <span className="text-xs text-gray-600">We architect breakthroughs, not improvements</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-700">×</span>
                    <div>
                      <span className="block">Traditional management consulting</span>
                      <span className="text-xs text-gray-600">We build ventures, not PowerPoints</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-700">×</span>
                    <div>
                      <span className="block">Staff augmentation</span>
                      <span className="text-xs text-gray-600">We&apos;re partners, not contractors</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-light mb-6 text-gradient">We Don&apos;t Engage With</h3>
                <ul className="space-y-3 text-gray-500">
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-700">×</span>
                    <div>
                      <span className="block">Organizations seeking vendor relationships</span>
                      <span className="text-xs text-gray-600">Partnership requires mutual commitment</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-700">×</span>
                    <div>
                      <span className="block">Entities focused solely on cost reduction</span>
                      <span className="text-xs text-gray-600">We create value, not cut costs</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-gray-700">×</span>
                    <div>
                      <span className="block">Organizations lacking strategic patience</span>
                      <span className="text-xs text-gray-600">Breakthroughs operate on different timescales</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Thoughts - Enhanced */}
      <section className="py-24 border-t border-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-white/[0.02] to-transparent" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <div className="inline-flex items-center gap-4">
                <div className="w-20 h-px bg-gradient-to-r from-transparent to-white/20" />
                <div className="w-3 h-3 bg-white/20 rounded-full animate-pulse" />
                <div className="w-20 h-px bg-gradient-to-l from-transparent to-white/20" />
              </div>
            </div>
            
            <p className="text-2xl text-gray-400 leading-relaxed mb-8">
              For organizations that share our vision of breakthrough innovation and possess 
              the institutional courage to pursue it, The Dravidor Foundry offers partnership 
              in creating the future rather than responding to it.
            </p>
            
            <div className="p-8 border-l-2 border-gray-800 hover:border-gray-600 transition-colors duration-500">
              <p className="text-lg text-gray-500 italic">
                In an era where technological change is accelerating exponentially, this 
                difference between creation and reaction determines market leadership.
              </p>
            </div>
            
            <div className="mt-16">
              <p className="text-3xl font-extralight text-gray-300">
                Ready to <span className="text-gradient">transform</span> your industry?
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}