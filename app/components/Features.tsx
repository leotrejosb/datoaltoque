'use client';

import { useEffect, useRef } from 'react';
import { Share, LayoutGrid as Layout, ChartBar as BarChart } from 'lucide-react';

export default function Features() {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Share,
      title: 'Conexión Instantánea',
      description: 'Comparte tu perfil digital al instante con solo acercar tu dispositivo NFC a cualquier smartphone.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Layout,
      title: 'Perfil Personalizado',
      description: 'Creamos una landing page profesional y personalizada que refleja tu marca personal o empresarial.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: BarChart,
      title: 'Mide tu Impacto',
      description: 'Analíticas detalladas para saber quién vio tu perfil, cuándo y desde dónde, optimizando tu networking.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    }
  ];

  return (
    <section id="caracteristicas" className="py-20 bg-white relative overflow-hidden" ref={featuresRef}>
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-100/50 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-50/50 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Por qué elegir{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DatoAlToque?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Revoluciona la forma en que compartes tu información profesional con 
            tecnología NFC de última generación y diseño personalizado.
          </p>
        </div>

        {/* Grid de características */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-item opacity-0 transform translate-y-8 transition-all duration-700 ease-out
                         bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl border-2 ${feature.borderColor}
                         hover:scale-105 hover:border-opacity-50 group cursor-pointer`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Icono */}
              <div className={`${feature.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6 
                             group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>

              {/* Contenido */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors">
                {feature.description}
              </p>

              {/* Indicador hover */}
              <div className={`mt-6 h-1 w-0 ${feature.color.replace('text', 'bg')} group-hover:w-full 
                             transition-all duration-500 ease-out rounded-full`}></div>
            </div>
          ))}
        </div>

        {/* CTA inferior */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Listo para modernizar tu networking?
            </h3>
            <p className="text-gray-600 mb-6">
              Únete a cientos de profesionales que ya confían en DatoAlToque
            </p>
            <a 
              href="https://wa.me/51987654321"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Comenzar ahora
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}