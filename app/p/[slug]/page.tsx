// 1. 'use client' SE HA ELIMINADO

import { User, Globe, Linkedin, Github, Download, ArrowLeft, Mail, Phone, MapPin, Calendar, Star, Heart, Camera, Music, Briefcase, Award } from 'lucide-react';
import Link from 'next/link';

// 2. 'useParams' SE HA ELIMINADO de la importación

export async function generateStaticParams() {
  return [
    { slug: 'plantilla-moderna' },
    { slug: 'plantilla-creativa' },
    { slug: 'plantilla-ejecutiva' }
  ];
}

// 3. El componente AHORA ACEPTA { params } COMO PROP
export default function TemplatePage({ params }: { params: { slug: string } }) {
  
  // 4. Obtenemos el slug DIRECTAMENTE DE LAS PROPS
  const slug = params.slug;

  // Configuraciones específicas para cada plantilla
  const templateConfigs = {
    'plantilla-moderna': {
      name: 'Plantilla Moderna',
      bgGradient: 'from-blue-50 via-white to-purple-50',
      cardGradient: 'from-white to-gray-50',
      accentColor: 'blue',
      profileBg: 'from-blue-500 to-purple-600',
      user: {
        name: 'Ana García',
        title: 'UX/UI Designer',
        description: 'Especialista en experiencias digitales innovadoras con más de 7 años creando interfaces que conectan con los usuarios.',
        avatar: 'A'
      },
      buttons: [
        { icon: Globe, text: 'Portfolio', color: 'from-blue-600 to-blue-700' },
        { icon: Linkedin, text: 'LinkedIn', color: 'from-blue-500 to-blue-600' },
        { icon: Mail, text: 'Email', color: 'from-purple-600 to-purple-700' },
        { icon: Download, text: 'Descargar vCard', color: 'from-green-600 to-green-700' },
        { icon: Calendar, text: 'Agendar Reunión', color: 'from-indigo-600 to-indigo-700' }
      ]
    },
    'plantilla-creativa': {
      name: 'Plantilla Creativa',
      bgGradient: 'from-pink-50 via-purple-50 to-orange-50',
      cardGradient: 'from-white to-pink-50',
      accentColor: 'pink',
      profileBg: 'from-pink-500 to-orange-500',
      user: {
        name: 'Carlos Mendoza',
        title: 'Director Creativo',
        description: '🎨 Transformo ideas en experiencias visuales únicas. Especialista en branding y diseño gráfico con pasión por la innovación.',
        avatar: 'C'
      },
      buttons: [
        { icon: Camera, text: 'Mi Portfolio', color: 'from-pink-600 to-pink-700' },
        { icon: Music, text: 'Spotify Playlist', color: 'from-green-600 to-green-700' },
        { icon: Heart, text: 'Instagram', color: 'from-purple-600 to-pink-600' },
        { icon: Download, text: 'Descargar Contacto', color: 'from-orange-600 to-red-600' },
        { icon: Star, text: 'Mis Proyectos', color: 'from-yellow-500 to-orange-500' }
      ]
    },
    'plantilla-ejecutiva': {
      name: 'Plantilla Ejecutiva',
      bgGradient: 'from-gray-50 via-slate-50 to-gray-100',
      cardGradient: 'from-white to-slate-50',
      accentColor: 'slate',
      profileBg: 'from-slate-700 to-gray-800',
      user: {
        name: 'Roberto Silva',
        title: 'CEO & Founder',
        description: 'Líder empresarial con 15+ años de experiencia en transformación digital y crecimiento estratégico de empresas tecnológicas.',
        avatar: 'R'
      },
      buttons: [
        { icon: Briefcase, text: 'Empresa', color: 'from-slate-700 to-slate-800' },
        { icon: Linkedin, text: 'LinkedIn', color: 'from-blue-600 to-blue-700' },
        { icon: Award, text: 'Logros', color: 'from-amber-600 to-amber-700' },
        { icon: Download, text: 'Descargar vCard', color: 'from-green-700 to-green-800' },
        { icon: Calendar, text: 'Agendar Cita', color: 'from-indigo-700 to-indigo-800' }
      ]
    }
  };

  // Obtener configuración de la plantilla o usar moderna por defecto
  const config = templateConfigs[slug as keyof typeof templateConfigs] || templateConfigs['plantilla-moderna'];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${config.bgGradient} py-20`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header con botón de regreso */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mt-4 mb-2">
            Vista Previa: {config.name}
          </h1>
          <p className="text-gray-600">
            Así se vería tu perfil digital profesional
          </p>
        </div>

        <div className="flex justify-center">
          {/* Contenedor que simula un móvil */}
          <div className={`bg-gradient-to-br ${config.cardGradient} rounded-3xl shadow-2xl p-8 max-w-sm w-full border-8 border-gray-200 relative overflow-hidden`}>
            {/* Simulación de notch del móvil */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gray-400 rounded-full"></div>
            
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/10 to-transparent rounded-full -ml-12 -mb-12"></div>
            
            {/* Contenido del perfil */}
            <div className="mt-6 text-center relative z-10">
              {/* Foto de perfil */}
              <div className={`mx-auto w-24 h-24 bg-gradient-to-br ${config.profileBg} rounded-full flex items-center justify-center mb-6 shadow-lg ring-4 ring-white`}>
                <span className="text-2xl font-bold text-white">
                  {config.user.avatar}
                </span>
              </div>

              {/* Información personal */}
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {config.user.name}
              </h2>
              <p className="text-gray-600 mb-6 font-medium">
                {config.user.title}
              </p>
              <p className="text-sm text-gray-500 mb-8 leading-relaxed px-2">
                {config.user.description}
              </p>

              {/* Información de contacto rápida */}
              <div className="flex justify-center space-x-4 mb-8 text-xs text-gray-500">
                <div className="flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  Lima, Perú
                </div>
                <div className="flex items-center">
                  <Phone className="w-3 h-3 mr-1" />
                  +51 987 654 321
                </div>
              </div>

              {/* Botones de acción */}
              <div className="space-y-3">
                {config.buttons.map((button, index) => (
                  <button 
                    key={index}
                    className={`w-full bg-gradient-to-r ${button.color} hover:shadow-lg text-white font-medium py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-xl transform hover:scale-105`}
                  >
                    <button.icon className="w-5 h-5 mr-3" />
                    {button.text}
                  </button>
                ))}
              </div>

              {/* Estadísticas o badges (solo para algunas plantillas) */}
              {slug === 'plantilla-creativa' && (
                <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white/50 rounded-lg p-3">
                    <div className="text-lg font-bold text-pink-600">50+</div>
                    <div className="text-xs text-gray-600">Proyectos</div>
                  </div>
                  <div className="bg-white/50 rounded-lg p-3">
                    <div className="text-lg font-bold text-purple-600">5★</div>
                    <div className="text-xs text-gray-600">Rating</div>
                  </div>
                  <div className="bg-white/50 rounded-lg p-3">
                    <div className="text-lg font-bold text-orange-600">3+</div>
                    <div className="text-xs text-gray-600">Años</div>
                  </div>
                </div>
              )}

              {slug === 'plantilla-ejecutiva' && (
                <div className="mt-8 bg-slate-50 rounded-lg p-4">
                  <div className="text-sm font-medium text-slate-700 mb-2">Próxima disponibilidad</div>
                  <div className="text-lg font-bold text-slate-900">Mañana 2:00 PM</div>
                </div>
              )}

              {/* Footer del perfil */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500">
                  Powered by DatoAlToque
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA inferior */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Te gusta este diseño?
          </h3>
          <p className="text-gray-600 mb-6">
            Crea tu propio perfil digital profesional con DatoAlToque
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="httpsall://wa.me/51987654321" // RECUERDA CAMBIAR ESTE NÚMERO
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              ¡Quiero mi perfil así!
            </a>
            <Link
              href="/"
              className="inline-flex items-center border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:bg-blue-50"
            >
              Ver más plantillas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}