import React from 'react';
import { Heart, Code, Sparkles } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Main Hello World Section */}
        <div className="space-y-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-yellow-400 animate-pulse" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
              Hello World
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
            Welcome to your beautiful React + Vite + TypeScript project
          </p>
        </div>

        {/* Technology Stack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/50">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Code className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">React</h3>
            <p className="text-sm text-gray-600">UI Library</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/50">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <Sparkles className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Vite</h3>
            <p className="text-sm text-gray-600">Build Tool</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/50">
            <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <div className="w-6 h-6 bg-cyan-600 rounded"></div>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Tailwind</h3>
            <p className="text-sm text-gray-600">CSS Framework</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/50">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <span className="text-blue-600 font-bold text-lg">TS</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">TypeScript</h3>
            <p className="text-sm text-gray-600">Type Safety</p>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-8">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
            <Heart className="w-5 h-5" />
            Start Building Amazing Things
          </button>
        </div>

        {/* Footer */}
        <div className="pt-12 border-t border-gray-200/50">
          <p className="text-gray-500 text-sm">
            Built with ❤️ using modern web technologies
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;