'use client';

import { useState, useEffect } from 'react';
import { FiCheck } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

const phases = [
  'Preparando archivos',
  'Analizando contenido',
  'Generando reportes',
  'Finalizando',
];

export default function Analisis() {
  const [progress, setProgress] = useState(0);
  const [currentPhase, setCurrentPhase] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            router.push('/resultado');
          }, 1000);
          return 100;
        }
        return prev + 1;
      });

      if (progress % 25 === 0 && progress > 0) {
        setCurrentPhase((prev) => Math.min(prev + 1, phases.length - 1));
      }
    }, 50);

    return () => clearInterval(interval);
  }, [progress, router]);

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-dark mb-4">
            Analizando Archivos
          </h1>
        </div>

        <div className="space-y-6">
          <div className="progress-bar h-4">
            <div
              className="progress-bar-fill"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="space-y-4">
            {phases.map((phase, index) => (
              <div
                key={phase}
                className="flex items-center space-x-4 text-gray-dark"
              >
                {index <= currentPhase ? (
                  <FiCheck className="text-primary text-xl" />
                ) : (
                  <div className="w-5 h-5" />
                )}
                <span>{phase}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 