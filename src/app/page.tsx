import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gray-100">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-950 to-black opacity-50"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-thin tracking-wider mb-8">
            THE DRAVIDOR
            <span className="block text-4xl md:text-6xl mt-4 font-light">FOUNDRY</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Engineering tomorrow's paradigms at the intersection of frontier research and commercial reality
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/documentation"
              className="px-8 py-4 border border-gray-700 text-gray-300 hover:bg-gray-900 hover:text-gray-100 transition-all duration-300 tracking-wider text-sm"
            >
              EXPLORE DOCUMENTATION
            </Link>
            <Link 
              href="/documentation/engagement-model"
              className="px-8 py-4 bg-gray-900 text-gray-100 hover:bg-gray-800 transition-all duration-300 tracking-wider text-sm"
            >
              PARTNERSHIP INQUIRY
            </Link>
          </div>
        </div>
      </div>

      {/* Core Philosophy */}
      <section className="py-24 px-8 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light mb-16 text-center tracking-wide">INSTITUTIONAL PHILOSOPHY</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black p-8 border border-gray-900">
              <h3 className="text-lg font-medium mb-4 text-gray-100">Pre-Consensus Positioning</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                We systematically identify and develop technologies before market consensus forms. 
                By the time others recognize an opportunity, we have already built the foundation 
                for market leadership.
              </p>
            </div>
            
            <div className="bg-black p-8 border border-gray-900">
              <h3 className="text-lg font-medium mb-4 text-gray-100">Compound Innovation</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Our holding structure enables compound innovation—where insights from one venture 
                accelerate others, where technologies developed for one market unlock opportunities 
                in another.
              </p>
            </div>
            
            <div className="bg-black p-8 border border-gray-900">
              <h3 className="text-lg font-medium mb-4 text-gray-100">Systematic Advantage</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                We transform the chaotic process of innovation into a repeatable, scalable system. 
                Our approach is systematic, leveraging anticipatory research and technology synthesis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light mb-16 text-center tracking-wide">CORE CAPABILITIES</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light mb-4 text-gray-100">Technology Commercialization</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                From laboratory to market dominance. We architect entire commercial ecosystems 
                around breakthrough innovations, creating new market categories rather than 
                competing in existing ones.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-light mb-4 text-gray-100">AI Implementation</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Beyond algorithmic optimization. We architect AI as foundational infrastructure, 
                reimagining entire business processes around artificial intelligence capabilities.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-light mb-4 text-gray-100">Startup Leadership</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Institutional founders. Our leadership model combines the agility of startup 
                execution with the strategic depth of institutional thinking.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-light mb-4 text-gray-100">Venture Capital Relations</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Strategic capital partnership. We engineer relationships where capital is merely 
                one dimension of value creation, engaging VCs before market categories exist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Vectors */}
      <section className="py-24 px-8 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light mb-16 text-center tracking-wide">RESEARCH VECTORS</h2>
          
          <div className="space-y-8">
            <div className="bg-black p-8 border-l-2 border-gray-800">
              <h3 className="text-xl font-light mb-3 text-gray-100">Intelligence Architecture</h3>
              <p className="text-gray-400">
                Designing organizations where human and artificial intelligence create compound capabilities
              </p>
            </div>
            
            <div className="bg-black p-8 border-l-2 border-gray-800">
              <h3 className="text-xl font-light mb-3 text-gray-100">Computational Economics</h3>
              <p className="text-gray-400">
                Developing computational frameworks that treat markets as complex adaptive systems
              </p>
            </div>
            
            <div className="bg-black p-8 border-l-2 border-gray-800">
              <h3 className="text-xl font-light mb-3 text-gray-100">Quantum-Classical Hybrid Systems</h3>
              <p className="text-gray-400">
                Engineering hybrid systems that leverage quantum capabilities within classical frameworks
              </p>
            </div>
            
            <div className="bg-black p-8 border-l-2 border-gray-800">
              <h3 className="text-xl font-light mb-3 text-gray-100">Autonomous Coordination Systems</h3>
              <p className="text-gray-400">
                Developing systems where multiple autonomous agents coordinate without central control
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-8 bg-black border-t border-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-8 tracking-wide">
            The Future Isn't Predicted—It's Engineered
          </h2>
          <p className="text-xl text-gray-400 mb-12 leading-relaxed">
            For organizations with the institutional courage to pursue breakthrough innovation 
            and the strategic patience to build the future, The Dravidor Foundry offers 
            partnership in creating tomorrow's paradigms.
          </p>
          <Link 
            href="/documentation"
            className="inline-block px-10 py-5 border border-gray-700 text-gray-300 hover:bg-gray-900 hover:text-gray-100 transition-all duration-300 tracking-wider text-sm"
          >
            ACCESS FULL DOCUMENTATION
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 bg-gray-950 border-t border-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-600 tracking-wider">
            THE DRAVIDOR FOUNDRY · ENGINEERING TOMORROW'S PARADIGMS
          </p>
        </div>
      </footer>
    </main>
  )
}