import React from 'react';

const Whitepaper = () => {
  const pdfUrl = '/CZTerminal Whitepaper.pdf';

  return (
    <div className="relative pt-32 pb-20 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center p-[2px]">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                <img 
                  src="/logo.png" 
                  alt="CZT Logo" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<span class="text-amber-400 font-bold text-3xl">CZT</span>';
                  }}
                />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              Whitepaper
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            View or download the official CZTerminal whitepaper
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black font-bold rounded-lg hover:from-amber-400 hover:to-amber-500 transition-all duration-300"
          >
            👁️ View Full Screen
          </a>
          <a
            href={pdfUrl}
            download="CZTerminal-Whitepaper.pdf"
            className="inline-flex items-center px-6 py-3 bg-gray-700 text-white font-bold rounded-lg hover:bg-gray-600 transition-all duration-300"
          >
            📥 Download PDF
          </a>
        </div>

        {/* Embedded PDF Viewer */}
        <div
          className="bg-gray-900 rounded-lg border border-amber-500/20 overflow-hidden"
          style={{ height: '80vh' }}
        >
          <embed
            src={pdfUrl}
            type="application/pdf"
            className="w-full h-full"
            style={{ minHeight: '500px' }}
          />
        </div>

        <div className="mt-4 text-center text-gray-500 text-sm">
          File: CZTerminal Whitepaper.pdf • {new Date().getFullYear()}{' '}
          CZTerminal
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;