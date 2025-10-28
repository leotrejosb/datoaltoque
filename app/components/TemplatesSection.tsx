'use client';

import Link from 'next/link';
import { Eye, Palette, Zap } from 'lucide-react';

export default function TemplatesSection() {
  const templates = [
    {
      name: 'Plantilla Moderna',
      slug: 'plantilla-moderna',
      description: 'Diseño minimalista y profesional con gradientes azul-púrpura, perfecto para diseñadores y consultores.',
      preview: 'Ana García - UX/UI Designer',
      icon: Zap,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      name: 'Plantilla Creativa',
      slug: 'plantilla-creativa',
      description: 'Colores vibrantes rosa-naranja con elementos dinámicos, ideal para creativos y artistas.',
      preview: 'Carlos Mendoza - Director Creativo',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      name: 'Plantilla Ejecutiva',
      slug: 'plantilla-ejecutiva',
      description: 'Formal y sofisticada en tonos grises, diseñada para altos ejecutivos y CEOs.',
      preview: 'Roberto Silva - CEO & Founder',
      icon: Eye,
      color: 'from-gray-600 to-gray-700',
      bgColor: 'from-gray-50 to-gray-100'
    }
  ];

  return (
    <section id="plantillas" className="py-20 bg-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-r from-blue-100/50 to-purple-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-56 h-56 bg-gradient-to-r from-purple-100/50 to-pink-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Elige tu{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              estilo
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cada perfil digital es único. Explora nuestras plantillas profesionales 
            y encuentra la que mejor refleje tu personalidad y marca.
          </p>
        </div>

        {/* Grid de plantillas */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {templates.map((template, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl 
                         transition-all duration-500 transform hover:scale-105 border border-gray-100"
            >
              {/* Preview visual */}
              <div className={`h-48 bg-gradient-to-br ${template.bgColor} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${template.color} rounded-2xl 
                                 flex items-center justify-center transform group-hover:scale-110 
                                 transition-transform duration-300 shadow-lg`}>
                    <template.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                {/* Elementos decorativos */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/20 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="absolute top-1/2 right-8 w-4 h-4 bg-white/30 rounded-full"></div>
              </div>

              {/* Contenido */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 
                              transition-colors">
                  {template.name}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {template.description}
                </p>
                <p className="text-sm text-gray-500 mb-6 italic">
                  {template.preview}
                </p>
                
                {/* Botón de vista previa */}
                <Link
                  href={`/p/${template.slug}`}
                  className={`block w-full bg-gradient-to-r ${template.color} 
                            hover:shadow-lg text-white font-semibold py-3 px-6 rounded-xl 
                            transition-all duration-300 text-center transform hover:scale-105 
                            group-hover:shadow-xl`}
                >
                  Ver Vista Previa
                </Link>
              </div>

              {/* Overlay hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                            pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Información adicional */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Quieres algo completamente único?
            </h3>
            <p className="text-gray-600 mb-6">
              Nuestro equipo de diseño puede crear una plantilla 100% personalizada para ti
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/51987654321"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Solicitar Diseño Custom
              </a>
              <button 
                onClick={() => {
                  const element = document.getElementById('planes');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-blue-50"
              >
                Ver Todos los Planes
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}