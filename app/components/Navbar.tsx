'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
              DatoAlToque
            </Link>
          </div>

          {/* Enlaces de navegación - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('caracteristicas')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Características
            </button>
            <button 
              onClick={() => scrollToSection('planes')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Planes
            </button>
            <button 
              onClick={() => scrollToSection('plantillas')}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Plantillas
            </button>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex">
            <a 
              href="https://wa.me/51987654321"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Pedir Ahora
            </a>
          </div>

          {/* Botón de menú móvil */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('caracteristicas')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Características
            </button>
            <button 
              onClick={() => scrollToSection('planes')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Planes
            </button>
            <button 
              onClick={() => scrollToSection('plantillas')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Plantillas
            </button>
            <div className="px-3 py-2">
              <a 
                href="https://wa.me/51987654321"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300"
              >
                Pedir Ahora
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}