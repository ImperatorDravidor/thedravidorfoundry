import Link from 'next/link'

export default function InstitutePage() {

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute inset-0 bg-radial-gradient" />
        {/* Animated background orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-20 w-80 h-80 bg-white/3 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-extralight mb-8 animate-in">
              The <span className="text-gradient inline-block hover:scale-105 transition-transform duration-300">Institute</span>
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed animate-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
              The Dravidor Foundry operates at the vanguard of humanity&apos;s technological evolution. 
              We stand at the intersection where theoretical brilliance meets practical application, 
              where scientific discovery transforms into societal advancement.
            </p>
            {/* Subtle animated indicator */}
            <div className="mt-12 flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-150" />
              <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse delay-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Thesis - Expanded */}
      <section className="py-20 border-t border-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-light mb-8 hover:text-gradient transition-colors duration-500">Our Thesis</h2>
            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p className="hover:text-gray-300 transition-colors duration-300">
                Humanity stands at an inflection point. The convergence of artificial intelligence, 
                quantum computing, biological engineering, and energy systems presents unprecedented 
                opportunity to address civilization&apos;s grand challenges.
              </p>
              <p className="hover:text-gray-300 transition-colors duration-300">
                The Dravidor Foundry exists to navigate this convergence, transforming theoretical 
                possibility into practical reality, ensuring these breakthroughs serve not just 
                markets but humanity&apos;s collective advancement.
              </p>
              <p className="hover:text-gray-300 transition-colors duration-300">
                We recognize that the most profound opportunities exist not in the technologies 
                themselves, but in their <span className="text-white font-medium">convergence</span>. The intersection of quantum computing with 
                financial modeling, the merger of synthetic biology with materials science, the 
                convergence of energy systems with distributed ledger architectures. These represent 
                the topology of future value creation.
              </p>
            </div>
            <div className="mt-8 p-6 border-l-2 border-gray-800 hover:border-gray-600 transition-colors duration-500 group">
              <p className="text-sm text-gray-600 italic group-hover:text-gray-500 transition-colors duration-300">
                &quot;Our approach is grounded in rigorous scientific methodology. We apply principles 
                from complexity science, systems theory, and emergence to identify phase transitions 
                in technological capability. This is not speculation but systematic analysis of 
                technological trajectories, economic incentives, and thermodynamic constraints.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Synthesis */}
      <section className="py-20 border-t border-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl">
            <h2 className="text-3xl font-light mb-12">The Synthesis of Theory and Practice</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-400 leading-relaxed mb-6">
                  The Dravidor Foundry emerges from a unique confluence of practical entrepreneurial 
                  success and deep theoretical understanding. Our intellectual foundation is not 
                  academic abstraction but hard-won insight from building and scaling ventures 
                  across multiple domains.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  This synthesis, rare in a world of specialists, enables us to see what others miss, 
                  build what others cannot, and create value where others see impossibility.
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-light mb-2">Theory ∩ Practice</h3>
                  <p className="text-sm text-gray-600">
                    We don&apos;t just apply existing knowledge. We create new knowledge at the 
                    intersection of domains.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-light mb-2">Science ∩ Commerce</h3>
                  <p className="text-sm text-gray-600">
                    We don&apos;t just commercialize research. We research commercialization itself.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-light mb-2">Research ∩ Development</h3>
                  <p className="text-sm text-gray-600">
                    We don&apos;t just build companies. We build the future in which those companies 
                    will operate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophical Underpinnings */}
      <section className="py-20 border-t border-gray-900 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light mb-12 hover:text-gradient transition-colors duration-500">Philosophical Underpinnings</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
            <div className="group relative p-6 border border-gray-900 hover:border-gray-700 transition-all duration-500 hover:transform hover:scale-105 bg-black/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-xl font-light mb-4 group-hover:text-gradient transition-all duration-300">The Limits of Knowledge</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 group-hover:text-gray-400 transition-colors duration-300">
                  Following Gödel&apos;s incompleteness theorems, we recognize that no system can 
                  be both complete and consistent. This forces us to build antifragile systems.
                </p>
                <div className="p-3 bg-white/5 rounded-lg border border-gray-800 group-hover:border-gray-700 transition-colors duration-300">
                  <code className="text-xs text-gray-400 font-mono block text-center">
                    ∀S: Complete(S) ⊕ Consistent(S)
                  </code>
                </div>
              </div>
            </div>
            <div className="group relative p-6 border border-gray-900 hover:border-gray-700 transition-all duration-500 hover:transform hover:scale-105 bg-black/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-xl font-light mb-4 group-hover:text-gradient transition-all duration-300">Information Theory</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 group-hover:text-gray-400 transition-colors duration-300">
                  We view commerce through information theory. Markets are information processing 
                  systems. Innovation is entropy reduction.
                </p>
                <div className="p-3 bg-white/5 rounded-lg border border-gray-800 group-hover:border-gray-700 transition-colors duration-300">
                  <code className="text-xs text-gray-400 font-mono block text-center">
                    H(Market) = -Σ p(x)log(p(x))
                  </code>
                </div>
              </div>
            </div>
            <div className="group relative p-6 border border-gray-900 hover:border-gray-700 transition-all duration-500 hover:transform hover:scale-105 bg-black/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-xl font-light mb-4 group-hover:text-gradient transition-all duration-300">Complexity & Emergence</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 group-hover:text-gray-400 transition-colors duration-300">
                  Complex systems exhibit emergent properties. We create conditions where ventures 
                  produce capabilities neither planned nor predicted.
                </p>
                <div className="p-3 bg-white/5 rounded-lg border border-gray-800 group-hover:border-gray-700 transition-colors duration-300">
                  <code className="text-xs text-gray-400 font-mono block text-center">
                    Whole &gt; Σ(Parts)
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mathematical Foundations */}
      <section className="py-20 border-t border-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.01] to-transparent" />
        <div className="container mx-auto px-6 relative">
          <h2 className="text-3xl font-light mb-12 hover:text-gradient transition-colors duration-500">Mathematical Foundations</h2>
          <div className="max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div className="group">
                <h3 className="text-xl font-light mb-4 group-hover:text-gradient transition-colors duration-300">Category Theory in Innovation</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 group-hover:text-gray-400 transition-colors duration-300">
                  We employ category theory to understand mappings between domains. A functor 
                  that preserves structure between mathematical spaces might reveal how a 
                  solution in quantum computing maps to financial markets.
                </p>
                <div className="p-4 bg-gradient-to-r from-white/5 to-white/[0.02] rounded-lg border border-gray-900 group-hover:border-gray-700 transition-all duration-300">
                  <code className="text-sm text-gray-300 font-mono block text-center">
                    F: C → D where F(f∘g) = F(f)∘F(g)
                  </code>
                </div>
              </div>
              <div className="group">
                <h3 className="text-xl font-light mb-4 group-hover:text-gradient transition-colors duration-300">Topology of Solution Spaces</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 group-hover:text-gray-400 transition-colors duration-300">
                  Every problem exists in a solution space with specific topology. We map these 
                  spaces to identify invariants, manifolds, singularities, and geodesics.
                </p>
                <div className="p-4 bg-gradient-to-r from-white/5 to-white/[0.02] rounded-lg border border-gray-900 group-hover:border-gray-700 transition-all duration-300">
                  <code className="text-sm text-gray-300 font-mono block text-center">
                    π₁(S¹) = ℤ, χ(S²) = 2
                  </code>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="group">
                <h3 className="text-xl font-light mb-4 group-hover:text-gradient transition-colors duration-300">Information Geometry</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 group-hover:text-gray-400 transition-colors duration-300">
                  We model knowledge and uncertainty using information geometry, treating 
                  probability distributions as points on manifolds.
                </p>
                <div className="p-4 bg-gradient-to-r from-white/5 to-white/[0.02] rounded-lg border border-gray-900 group-hover:border-gray-700 transition-all duration-300">
                  <code className="text-sm text-gray-300 font-mono block text-center">
                    ds² = Σ g_ij dθⁱdθʲ
                  </code>
                </div>
              </div>
              <div className="group">
                <h3 className="text-xl font-light mb-4 group-hover:text-gradient transition-colors duration-300">Bayesian Inference</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 group-hover:text-gray-400 transition-colors duration-300">
                  Every venture is a hypothesis. Market feedback provides evidence. We update 
                  our beliefs using Bayesian inference.
                </p>
                <div className="p-4 bg-gradient-to-r from-white/5 to-white/[0.02] rounded-lg border border-gray-900 group-hover:border-gray-700 transition-all duration-300">
                  <code className="text-sm text-gray-300 font-mono block text-center">
                    P(H|E) = P(E|H)P(H)/P(E)
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Economic Philosophy */}
      <section className="py-20 border-t border-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light mb-12">Economic Philosophy</h2>
          <div className="max-w-4xl space-y-8">
            <div>
              <h3 className="text-xl font-light mb-4">Beyond Equilibrium</h3>
              <p className="text-gray-500 leading-relaxed">
                Classical economics assumes equilibrium. We assume perpetual disequilibrium. 
                Markets are dynamic systems far from equilibrium, exhibiting phase transitions, 
                bifurcations, and strange attractors. Our models reflect this reality.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light mb-4">Value as Information</h3>
              <p className="text-gray-500 leading-relaxed">
                We define value as reduction in uncertainty about future states. A product that 
                perfectly predicts user needs has high value. A service that reduces decision 
                complexity creates value. This information-theoretic view reveals opportunities 
                invisible to traditional analysis.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light mb-4">The Thermodynamics of Commerce</h3>
              <p className="text-gray-500 leading-relaxed mb-4">
                Commerce obeys thermodynamic laws:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• <strong>First Law:</strong> Value is conserved but can change form</li>
                <li>• <strong>Second Law:</strong> Entropy increases without energy input</li>
                <li>• <strong>Third Law:</strong> Perfect efficiency is unattainable</li>
              </ul>
              <p className="text-gray-500 leading-relaxed mt-4">
                Understanding these constraints enables realistic modeling of commercial systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Foundational Principles - Detailed */}
      <section className="py-20 border-t border-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />
        <div className="container mx-auto px-6 relative">
          <h2 className="text-3xl font-light mb-12 hover:text-gradient transition-colors duration-500">Foundational Principles</h2>
          <div className="space-y-12 max-w-4xl">
            <div className="grid md:grid-cols-12 gap-6 group hover:transform hover:translate-x-2 transition-all duration-300">
              <div className="md:col-span-1 flex items-start justify-center">
                <div className="text-5xl font-extralight text-gray-700 group-hover:text-gray-500 transition-all duration-300 hover:animate-pulse">∞</div>
              </div>
              <div className="md:col-span-11">
                <h3 className="text-xl font-light mb-3 group-hover:text-gradient transition-colors duration-300">Epistemic Humility</h3>
                <p className="text-gray-500 leading-relaxed mb-4 group-hover:text-gray-400 transition-colors duration-300">
                  We operate with deep awareness of the limits of knowledge. Our confidence stems 
                  not from certainty about specific outcomes, but from robust methodologies that 
                  remain valid across multiple possible futures.
                </p>
                <div className="pl-4 border-l-2 border-gray-800 group-hover:border-gray-600 transition-colors duration-300">
                  <p className="text-sm text-gray-600 italic group-hover:text-gray-500 transition-colors duration-300">
                    We embrace Karl Popper&apos;s philosophy of falsification, constantly seeking to 
                    disprove our hypotheses rather than confirm them.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-12 gap-6 group hover:transform hover:translate-x-2 transition-all duration-300">
              <div className="md:col-span-1 flex items-start justify-center">
                <div className="text-5xl font-extralight text-gray-700 group-hover:text-gray-500 transition-all duration-300 hover:animate-pulse">λ</div>
              </div>
              <div className="md:col-span-11">
                <h3 className="text-xl font-light mb-3 group-hover:text-gradient transition-colors duration-300">Antifragile Research Architecture</h3>
                <p className="text-gray-500 leading-relaxed mb-4 group-hover:text-gray-400 transition-colors duration-300">
                  Our research portfolio is structured to benefit from volatility. Failed experiments 
                  provide valuable negative information. Unexpected discoveries open new research vectors. 
                  Market turbulence reveals hidden opportunities.
                </p>
                <div className="pl-4 border-l-2 border-gray-800 group-hover:border-gray-600 transition-colors duration-300">
                  <p className="text-sm text-gray-600 italic group-hover:text-gray-500 transition-colors duration-300">
                    This antifragility is not accidental but deliberately engineered into our 
                    operational structure.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-12 gap-6 group hover:transform hover:translate-x-2 transition-all duration-300">
              <div className="md:col-span-1 flex items-start justify-center">
                <div className="text-5xl font-extralight text-gray-700 group-hover:text-gray-500 transition-all duration-300 hover:animate-pulse">Φ</div>
              </div>
              <div className="md:col-span-11">
                <h3 className="text-xl font-light mb-3 group-hover:text-gradient transition-colors duration-300">Ethical Technology Development</h3>
                <p className="text-gray-500 leading-relaxed mb-4 group-hover:text-gray-400 transition-colors duration-300">
                  Technology is not value-neutral. Our research explicitly considers long-term 
                  societal implications, distributional effects, potential for unintended consequences, 
                  and alignment with human flourishing.
                </p>
                <div className="pl-4 border-l-2 border-gray-800 group-hover:border-gray-600 transition-colors duration-300">
                  <p className="text-sm text-gray-600 italic group-hover:text-gray-500 transition-colors duration-300">
                    This is not corporate social responsibility theater but fundamental to our 
                    research methodology. Technologies that concentrate power or reduce human agency 
                    are rejected regardless of commercial potential.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-12 gap-6 group hover:transform hover:translate-x-2 transition-all duration-300">
              <div className="md:col-span-1 flex items-start justify-center">
                <div className="text-5xl font-extralight text-gray-700 group-hover:text-gray-500 transition-all duration-300 hover:animate-pulse">Ω</div>
              </div>
              <div className="md:col-span-11">
                <h3 className="text-xl font-light mb-3 group-hover:text-gradient transition-colors duration-300">The Long Game</h3>
                <p className="text-gray-500 leading-relaxed mb-4 group-hover:text-gray-400 transition-colors duration-300">
                  While others optimize for quick exits, we play the long game. Building foundational 
                  technologies, creating new markets, advancing human capability. These require patience, 
                  persistence, and profound commitment to the future we&apos;re creating.
                </p>
                <div className="pl-4 border-l-2 border-gray-800 group-hover:border-gray-600 transition-colors duration-300">
                  <p className="text-sm text-gray-600 italic group-hover:text-gray-500 transition-colors duration-300">
                    Our structure enables patient capital for long-term development, rapid resource 
                    reallocation based on opportunity, and strategic timing independent of fund cycles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Dravidor Difference */}
      <section className="py-20 border-t border-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent" />
        <div className="container mx-auto px-6 relative">
          <h2 className="text-3xl font-light mb-12 hover:text-gradient transition-colors duration-500">The Dravidor Difference</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl">
            <div className="group">
              <h3 className="text-xl font-light mb-4 text-gradient group-hover:scale-105 inline-block transition-transform duration-300">Research Depth, Commercial Velocity</h3>
              <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                Traditional research institutions prioritize publication over application. 
                Traditional commercialization entities lack technical depth. The Dravidor 
                Foundry operates in the liminal space between, maintaining research-grade 
                rigor while executing with commercial urgency.
              </p>
            </div>
            <div className="group">
              <h3 className="text-xl font-light mb-4 text-gradient group-hover:scale-105 inline-block transition-transform duration-300">Pre-Consensus Positioning</h3>
              <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                We systematically identify and develop technologies before their implications 
                become apparent. Our work begins where academic research suggests possibility 
                and extends until that possibility becomes civilization&apos;s new foundation.
              </p>
            </div>
            <div className="group">
              <h3 className="text-xl font-light mb-4 text-gradient group-hover:scale-105 inline-block transition-transform duration-300">Compound Innovation</h3>
              <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                Our structure enables compound innovation where insights cascade across ventures, 
                where technologies developed for one challenge illuminate solutions to others, 
                where our collective intelligence creates emergent capabilities.
              </p>
            </div>
            <div className="group">
              <h3 className="text-xl font-light mb-4 text-gradient group-hover:scale-105 inline-block transition-transform duration-300">Systematic Advantage</h3>
              <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors duration-300">
                We don&apos;t believe in serendipitous innovation. Our approach is systematic, 
                leveraging anticipatory research, technology synthesis, market engineering, 
                and institutional velocity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Intellectual Framework - New Dynamic Section */}
      <section className="py-20 border-t border-gray-900 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light mb-12 hover:text-gradient transition-colors duration-500">The Intellectual Framework</h2>
          <div className="max-w-6xl mx-auto">
            {/* Core Axioms */}
            <div className="mb-16">
              <h3 className="text-xl font-light mb-8 text-center">Core Axioms</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center group">
                  <div className="mb-4 inline-block p-6 border border-gray-900 rounded-full group-hover:border-gray-600 transition-all duration-500 hover:rotate-12">
                    <div className="text-3xl font-extralight">∇</div>
                  </div>
                  <h4 className="text-sm font-light mb-2 group-hover:text-gradient transition-colors duration-300">Gradient Descent</h4>
                  <p className="text-xs text-gray-600 group-hover:text-gray-500 transition-colors duration-300">
                    Every problem has an optimization landscape. We navigate gradients systematically.
                  </p>
                </div>
                <div className="text-center group">
                  <div className="mb-4 inline-block p-6 border border-gray-900 rounded-full group-hover:border-gray-600 transition-all duration-500 hover:rotate-12">
                    <div className="text-3xl font-extralight">∂</div>
                  </div>
                  <h4 className="text-sm font-light mb-2 group-hover:text-gradient transition-colors duration-300">Partial Derivatives</h4>
                  <p className="text-xs text-gray-600 group-hover:text-gray-500 transition-colors duration-300">
                    Change one variable while holding others constant. Isolate effects, understand causality.
                  </p>
                </div>
                <div className="text-center group">
                  <div className="mb-4 inline-block p-6 border border-gray-900 rounded-full group-hover:border-gray-600 transition-all duration-500 hover:rotate-12">
                    <div className="text-3xl font-extralight">∫</div>
                  </div>
                  <h4 className="text-sm font-light mb-2 group-hover:text-gradient transition-colors duration-300">Integration</h4>
                  <p className="text-xs text-gray-600 group-hover:text-gray-500 transition-colors duration-300">
                    Accumulate small changes over time. Compound effects create exponential outcomes.
                  </p>
                </div>
              </div>
            </div>

            {/* The Innovation Tensor */}
            <div className="p-12 border border-gray-900 rounded-lg hover:border-gray-700 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h3 className="text-2xl font-light mb-6 text-center group-hover:text-gradient transition-colors duration-300">The Innovation Tensor</h3>
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-lg font-mono text-gray-400 mb-2">T[i,j,k]</div>
                    <p className="text-xs text-gray-600">Technology × Market × Time</p>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-mono text-gray-400 mb-2">∇·T = 0</div>
                    <p className="text-xs text-gray-600">Conservation of opportunity</p>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-mono text-gray-400 mb-2">∂T/∂t &gt; 0</div>
                    <p className="text-xs text-gray-600">Monotonic value creation</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 text-center italic">
                  We model innovation as a tensor field in high-dimensional space, where each dimension 
                  represents a variable affecting technological development. The gradient of this field 
                  points toward maximum value creation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-20 border-t border-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-white/[0.02] to-transparent" />
        <div className="container mx-auto px-6 relative">
          <p className="text-center text-gray-600 mb-12 hover:text-gray-400 transition-colors duration-300">Explore The Foundry</p>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Link href="/ventures" className="group relative">
              <div className="p-8 border border-gray-900 hover:border-gray-600 transition-all duration-500 text-center backdrop-blur-sm bg-black/50 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-2xl font-extralight mb-2 text-gray-700 group-hover:text-gray-400 transition-colors duration-300">✦</div>
                  <h3 className="text-sm font-light group-hover:text-gradient transition-all duration-300">Ventures</h3>
                  <p className="text-xs text-gray-700 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Portfolio & Initiatives</p>
                </div>
              </div>
            </Link>
            <Link href="/research" className="group relative">
              <div className="p-8 border border-gray-900 hover:border-gray-600 transition-all duration-500 text-center backdrop-blur-sm bg-black/50 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-2xl font-extralight mb-2 text-gray-700 group-hover:text-gray-400 transition-colors duration-300">⟡</div>
                  <h3 className="text-sm font-light group-hover:text-gradient transition-all duration-300">Research</h3>
                  <p className="text-xs text-gray-700 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Methodologies & Focus</p>
                </div>
              </div>
            </Link>
            <Link href="/capabilities" className="group relative">
              <div className="p-8 border border-gray-900 hover:border-gray-600 transition-all duration-500 text-center backdrop-blur-sm bg-black/50 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-2xl font-extralight mb-2 text-gray-700 group-hover:text-gray-400 transition-colors duration-300">◈</div>
                  <h3 className="text-sm font-light group-hover:text-gradient transition-all duration-300">Capabilities</h3>
                  <p className="text-xs text-gray-700 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Core Competencies</p>
                </div>
              </div>
            </Link>
            <Link href="/engagement" className="group relative">
              <div className="p-8 border border-gray-900 hover:border-gray-600 transition-all duration-500 text-center backdrop-blur-sm bg-black/50 hover:transform hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-2xl font-extralight mb-2 text-gray-700 group-hover:text-gray-400 transition-colors duration-300">◯</div>
                  <h3 className="text-sm font-light group-hover:text-gradient transition-all duration-300">Engagement</h3>
                  <p className="text-xs text-gray-700 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Partnership Models</p>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Final Call to Action */}
          <div className="mt-20 text-center">
            <div className="inline-block">
              <p className="text-gray-600 text-sm mb-4">Ready to shape the future?</p>
              <Link href="/engagement" className="inline-block px-8 py-3 border border-gray-800 hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-105 group">
                <span className="text-sm font-light group-hover:text-gradient transition-colors duration-300">Begin the Conversation →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}