'use client';

import { Smartphone, Nfc } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative flex items-center justify-center overflow-hidden py-24 md:py-32">
      {/* Fondo animado con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 animate-pulse"></div>
        
        {/* Elementos decorativos animados */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200/30 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-blue-300/30 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '3s' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-300/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Contenido textual */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Tu red de contactos,{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                a un solo toque
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Digitaliza tu networking con las tarjetas NFC de DatoAlToque. 
              Modernas, rápidas y profesionales.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://wa.me/51987654321"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 inline-flex items-center justify-center"
              >
                ¡Quiero mi tarjeta!
              </a>
              
              <button 
                onClick={() => {
                  const element = document.getElementById('caracteristicas');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:bg-blue-50"
              >
                Ver Características
              </button>
            </div>
            
            {/* Estadísticas rápidas */}
            <div className="mt-12 grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Clientes satisfechos</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">24h</div>
                <div className="text-gray-600">Entrega rápida</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">99%</div>
                <div className="text-gray-600">Compatibilidad</div>
              </div>
            </div>
          </div>

          {/* Visual placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              
              {/* Simulación de tarjeta NFC */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl p-8 shadow-2xl transform rotate-12 hover:rotate-6 transition-all duration-500 w-80 h-52">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold">Juan Pérez</h3>
                    <p className="text-gray-300">CEO & Founder</p>
                  </div>
                  <Nfc className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-gray-400 text-sm">
                  <p>juan@empresa.com</p>
                  <p>+51 987 654 321</p>
                </div>
                
                {/* Chip NFC simulado */}
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-gold rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full"></div>
                </div>
              </div>

              {/* Teléfono simulado */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-3xl shadow-xl p-6 border-8 border-gray-200 w-48 h-80 transform -rotate-12 hover:-rotate-6 transition-all duration-500">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl h-full p-4 flex flex-col items-center justify-center">
                  <Smartphone className="w-16 h-16 text-blue-600 mb-4" />
                  <p className="text-sm font-medium text-gray-700 text-center">
                    ¡Contacto guardado automáticamente!
                  </p>
                </div>
              </div>

              {/* Ondas NFC animadas */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 border-2 border-blue-400/30 rounded-full animate-ping"></div>
                <div className="absolute top-2 left-2 w-28 h-28 border-2 border-purple-400/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-4 left-4 w-24 h-24 border-2 border-blue-400/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}