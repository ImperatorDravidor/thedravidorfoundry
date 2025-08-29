export default function DocumentationPage() {
  return (
    <div>
      <h1 className="text-4xl font-light tracking-wide mb-8 text-gray-100">
        The Dravidor Foundry
      </h1>
      
      <p className="text-xl leading-relaxed text-gray-300 mb-12">
        The Dravidor Foundry bridges the gap between the pinnacle of advanced research and 
        real-world business needs, transforming frontier innovation into scalable solutions. 
        We democratize enterprise technology to drive American global advancement.
      </p>

      <div className="bg-gray-900/30 rounded-lg p-8 mb-12 border border-gray-900">
        <p className="text-lg leading-relaxed text-gray-300">
          At the intersection of AI, IoT, advanced computing, and economic systems, we drive 
          innovation that reshapes industries before the market adapts. Our research transforms 
          deep technological insight into real-world impact, setting the foundation for the next 
          era of enterprise and automation.
        </p>
      </div>

      <div className="bg-gradient-to-r from-gray-900/50 to-gray-900/30 rounded-lg p-8 border border-gray-900">
        <p className="text-lg leading-relaxed text-gray-200">
          As both a research institution and commercialization engine, we engineer paradigm-shifting 
          solutions that redefine markets. The Dravidor Foundry doesn't just anticipate the 
          future—we engineer it.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-950 rounded-lg p-6 border border-gray-900">
          <h3 className="text-lg font-medium mb-3 text-gray-100">Research Depth</h3>
          <p className="text-sm text-gray-400">
            Operating at the frontier of technological possibility, transforming theoretical 
            breakthroughs into commercial reality.
          </p>
        </div>
        
        <div className="bg-gray-950 rounded-lg p-6 border border-gray-900">
          <h3 className="text-lg font-medium mb-3 text-gray-100">Commercial Velocity</h3>
          <p className="text-sm text-gray-400">
            Moving with the speed of startups and the rigor of research institutions to capture 
            pre-consensus opportunities.
          </p>
        </div>
        
        <div className="bg-gray-950 rounded-lg p-6 border border-gray-900">
          <h3 className="text-lg font-medium mb-3 text-gray-100">Institutional Excellence</h3>
          <p className="text-sm text-gray-400">
            Building with the systematic approach of institutions while maintaining the agility 
            to pivot and adapt.
          </p>
        </div>
        
        <div className="bg-gray-950 rounded-lg p-6 border border-gray-900">
          <h3 className="text-lg font-medium mb-3 text-gray-100">Market Creation</h3>
          <p className="text-sm text-gray-400">
            Not finding product-market fit but engineering entirely new market categories around 
            breakthrough innovations.
          </p>
        </div>
      </div>
    </div>
  )
}
