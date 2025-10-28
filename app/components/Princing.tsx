'use client';

import { Check, Star } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Plan Básico',
      subtitle: 'Solo el dispositivo',
      price: 'Desde $25',
      description: 'Perfecto para usuarios que quieren configurar su NFC por cuenta propia.',
      features: [
        'Dispositivo NFC de tu elección',
        'Guía de configuración',
        'Soporte técnico básico',
        'Garantía de 1 año'
      ],
      ctaText: 'Consultar Dispositivos',
      popular: false,
      gradient: 'from-gray-50 to-gray-100',
      border: 'border-gray-200',
      textColor: 'text-gray-900',
      buttonStyle: 'bg-gray-900 hover:bg-gray-800 text-white'
    },
    {
      name: 'Plan Pro',
      subtitle: 'Dispositivo + Landing',
      price: 'Desde $75',
      description: 'La opción más popular. Incluye diseño y desarrollo de tu perfil digital profesional.',
      features: [
        'Dispositivo NFC premium',
        'Diseño de página de perfil personalizada',
        'Hosting por 1 año incluido',
        '3 revisiones de diseño',
        'Analytics básicos',
        'Soporte prioritario'
      ],
      ctaText: '¡Quiero el Plan Pro!',
      popular: true,
      gradient: 'from-blue-50 to-purple-50',
      border: 'border-blue-300',
      textColor: 'text-gray-900',
      buttonStyle: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
    },
    {
      name: 'Plan Premium',
      subtitle: 'Solución integral',
      price: 'Desde $150',
      description: 'La experiencia completa con mantenimiento continuo y actualizaciones regulares.',
      features: [
        'Dispositivo NFC premium',
        'Diseño web totalmente personalizado',
        'Hosting ilimitado',
        'Revisiones ilimitadas',
        'Analytics avanzados',
        '3 actualizaciones mensuales',
        'Soporte 24/7',
        'Dominio personalizado opcional'
      ],
      ctaText: 'Comenzar Premium',
      popular: false,
      gradient: 'from-purple-50 to-pink-50',
      border: 'border-purple-200',
      textColor: 'text-gray-900',
      buttonStyle: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
    }
  ];

  return (
    <section id="planes" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Elige tu{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              plan perfecto
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Desde dispositivos básicos hasta soluciones completas con diseño personalizado. 
            Tenemos el plan ideal para tus necesidades.
          </p>
        </div>

        {/* Grid de planes */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gradient-to-br ${plan.gradient} rounded-3xl p-8 border-2 ${plan.border} 
                         shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 
                         ${plan.popular ? 'lg:scale-110 lg:z-10' : 'lg:hover:scale-105'}`}
            >
              {/* Badge de popularidad */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center">
                    <Star className="w-4 h-4 mr-2 fill-current" />
                    Más Popular
                  </div>
                </div>
              )}

              {/* Header del plan */}
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold ${plan.textColor} mb-2`}>
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-lg mb-4">
                  {plan.subtitle}
                </p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Lista de características */}
              <div className="mb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <a 
                  href="https://wa.me/51987654321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full ${plan.buttonStyle} font-semibold py-4 px-6 rounded-xl 
                             transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 
                             text-center text-lg`}
                >
                  {plan.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Información adicional */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Necesitas algo personalizado?
            </h3>
            <p className="text-gray-600 mb-6">
              Contáctanos para planes empresariales o soluciones a medida para tu equipo
            </p>
            <a 
              href="https://wa.me/51987654321"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
            >
              Hablar con un especialista →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}