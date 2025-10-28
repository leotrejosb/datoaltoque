'use client'; // Indicar que este es un Componente de Cliente

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Esta página se activaría si un usuario visita /p directamente.
 * Como esta ruta no tiene un propósito, lo mejor es
 * redirigir al usuario a la página de inicio (homepage)
 * usando un hook de cliente.
 */
export default function ProfileIndexPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirige automáticamente al usuario a la homepage
    router.push('/');
  }, [router]); // El array de dependencias asegura que solo se ejecute una vez

  // No es necesario retornar nada, la redirección se encarga.
  // Ponemos null para que TypeScript esté contento.
  return null;
}

