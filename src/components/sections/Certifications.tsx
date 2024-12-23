import React, { useEffect } from 'react';
import { BookOpen } from 'lucide-react';

const Certifications: React.FC = () => {
  useEffect(() => {
    // Dynamically load the Credly embed script
    const script = document.createElement('script');
    script.src = '//cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="publications" className="py-20 bg-black/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">Certifications</h2>
        <div className="space-y-8">
          <div className="border border-green-500/20 rounded-lg p-6 hover:bg-green-500/5 transition-colors">
            <div className="flex items-start gap-4">
              <BookOpen className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              {/* Embedded certification badges */}
              <div 
                data-iframe-width="150" 
                data-iframe-height="270" 
                data-share-badge-id="f8f73e2f-ac40-464a-8b61-c7920c1cb193" 
                data-share-badge-host="https://www.credly.com"
              ></div>
              <div 
                data-iframe-width="150" 
                data-iframe-height="270" 
                data-share-badge-id="a826a2a6-6907-4b46-91d9-c59367e9fde2" 
                data-share-badge-host="https://www.credly.com"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
