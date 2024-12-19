import React from 'react';
import { BookOpen } from 'lucide-react';

const Publications: React.FC = () => {
  return (
    <section id="publications" className="py-20 bg-black/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Research & Publications</h2>
        <div className="space-y-8">
          <div className="border border-green-500/20 rounded-lg p-6 hover:bg-green-500/5 transition-colors">
            <div className="flex items-start gap-4">
              <BookOpen className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-green-400">Heavy-Ion Sub-Barrier Fusion Reactions</h3>
                <p className="text-gray-500 mb-4">Published in DAE Symp.Nucl.Phys. 67 (2024) 513-514</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-2">"Sub-barrier evaporation residues in 6Li + 209Bi system"</h4>
                    <p className="text-gray-400">
                      Investigated sub-barrier evaporation residue phenomena in the interaction of lithium-6 with bismuth-209,
                      contributing critical data towards advancing research methodologies for future experimental designs.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">"46Ti-induced reactions for the synthesis of super-heavy element Z =120"</h4>
                    <p className="text-gray-400">
                      Contributed to groundbreaking research in super-heavy element synthesis, focusing on titanium-induced reactions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">"Fusion cross-section analysis for SHE Z =120"</h4>
                    <p className="text-gray-400">
                    Explored the synthesis of super-heavy elements with atomic number Z=120 using the 45Sc + 252Es projectile-target system. Key findings include fusion cross-section increases with excitation energy, survival probability trends, and the identification of 45Sc + 252Es as favorable for SHE Z=120 synthesis.
                    <a href="https://sympnp.org/proceedings/68/B67.pdf">view on DAE proceedings</a>
                    </p>
                  </div>

                </div>
                <div className="mt-4">
                  <a 
                    href="https://sympnp.org/proceedings/68/B67.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-500 transition-colors inline-flex items-center gap-2"
                  >
                    View on DAE symposium
                    <BookOpen className="w-4 h-4" />
                  </a>
                </div>
                <div className="mt-4">
                  <a 
                    href="https://scholar.google.co.in/citations?user=kRTSVOMAAAAJ&hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-500 transition-colors inline-flex items-center gap-2"
                  >
                    View on Google Scholar
                    <BookOpen className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;