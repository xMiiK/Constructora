'use client';

import { useRouter } from 'next/navigation';

export default function Resultado() {
  const router = useRouter();

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-primary mb-4">
            Análisis Completado
          </h1>
          <p className="text-gray-dark">
            El análisis de tus archivos ha sido completado exitosamente
          </p>
        </div>

        <div className="border-t border-primary-lighter pt-8">
          <div className="space-y-6">
            <div className="bg-gray-light p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-dark mb-4">
                Resumen del Análisis
              </h2>
              <div className="space-y-4 text-gray-dark">
                <p>• Se procesaron 3 archivos correctamente</p>
                <p>• Se encontraron 5 inconsistencias</p>
                <p>• Se generaron 2 recomendaciones</p>
              </div>
            </div>

            <button
              onClick={() => router.push('/')}
              className="btn-primary w-full"
            >
              Realizar Nuevo Análisis
            </button>
          </div>
        </div>
      </div>
    </main>
  );
} 