import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-900 bg-black relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/[0.02] to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand Column */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-extralight mb-4">
                The <span className="text-gradient">Dravidor</span> Foundry
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Operating at the vanguard of humanity&apos;s technological evolution.
              </p>
              <div className="mt-6 flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse delay-150" />
                <div className="w-2 h-2 bg-white/30 rounded-full animate-pulse delay-300" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-light mb-6 text-gray-400">Explore</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/institute" className="text-sm text-gray-600 hover:text-gray-400 transition-colors duration-300">
                    The Institute
                  </Link>
                </li>
                <li>
                  <Link href="/ventures" className="text-sm text-gray-600 hover:text-gray-400 transition-colors duration-300">
                    Ventures Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/research" className="text-sm text-gray-600 hover:text-gray-400 transition-colors duration-300">
                    Research Methodology
                  </Link>
                </li>
                <li>
                  <Link href="/capabilities" className="text-sm text-gray-600 hover:text-gray-400 transition-colors duration-300">
                    Core Capabilities
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-light mb-6 text-gray-400">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:research@dravidorfoundry.com" className="text-sm text-gray-600 hover:text-gray-400 transition-colors duration-300">
                    research@dravidorfoundry.com
                  </a>
                </li>
                <li>
                  <a href="https://github.com/dravidorfoundry" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-400 transition-colors duration-300">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://arxiv.org/dravidorfoundry" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-400 transition-colors duration-300">
                    Publications
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/company/dravidorfoundry" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-400 transition-colors duration-300">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            {/* Philosophy */}
            <div>
              <h4 className="text-sm font-light mb-6 text-gray-400">Philosophy</h4>
              <div className="space-y-4">
                <div className="p-3 border border-gray-900 hover:border-gray-700 transition-colors duration-300">
                  <code className="text-xs text-gray-600 font-mono">∇·F = ρ/ε₀</code>
                  <p className="text-xs text-gray-700 mt-1">Maxwell&apos;s Law</p>
                </div>
                <div className="p-3 border border-gray-900 hover:border-gray-700 transition-colors duration-300">
                  <code className="text-xs text-gray-600 font-mono">S = k·log(W)</code>
                  <p className="text-xs text-gray-700 mt-1">Entropy Equation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <p className="text-xs text-gray-700">
                © {new Date().getFullYear()} The Dravidor Foundry. All rights reserved.
              </p>
              <div className="hidden md:flex items-center gap-4">
                <Link href="/privacy" className="text-xs text-gray-700 hover:text-gray-500 transition-colors duration-300">
                  Privacy
                </Link>
                <Link href="/terms" className="text-xs text-gray-700 hover:text-gray-500 transition-colors duration-300">
                  Terms
                </Link>
              </div>
            </div>
            
            {/* Signature */}
            <div className="flex items-center gap-2">
              <div className="text-xs text-gray-700">Advancing human knowledge</div>
              <div className="text-xs text-gray-800">·</div>
              <div className="text-xs text-gray-700">Through frontier research</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
