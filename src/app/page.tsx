'use client';

import { useState } from 'react';
import { FiUpload, FiTrash2 } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import LoadingSpinner from './components/LoadingSpinner';

export default function Home() {
  const [files, setFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setIsLoading(true);
      
      // Simulamos un pequeño retraso para mostrar la animación
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newFiles = Array.from(event.target.files);
      setFiles(prevFiles => [...prevFiles, ...newFiles]);
      
      // Limpiar el input para permitir seleccionar el mismo archivo nuevamente
      event.target.value = '';
      setIsLoading(false);
    }
  };

  const handleDeleteFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleAnalyze = () => {
    if (files.length > 0) {
      router.push('/analisis');
    }
  };

  return (
    <main className="min-h-[calc(100vh-88px)] flex items-center justify-center">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-dark mb-4">
              Análisis proyectos obra pública 
            </h1>
            <p className="text-gray-dark">
              Sube tus archivos para comenzar el análisis
            </p>
          </div>

          <div className="flex flex-col items-center space-y-6">
            <label className="btn-upload cursor-pointer flex items-center space-x-2">
              <FiUpload className="text-xl" />
              <span>Seleccionar archivos</span>
              <input
                type="file"
                multiple
                className="hidden"
                onChange={handleFileUpload}
                disabled={isLoading}
              />
            </label>

            {isLoading && <LoadingSpinner />}

            {files.length > 0 && (
              <div className="w-full space-y-4">
                {files.map((file, index) => (
                  <div key={index} className="file-item">
                    <span className="text-gray-dark">{file.name}</span>
                    <button
                      onClick={() => handleDeleteFile(index)}
                      className="btn-delete"
                      disabled={isLoading}
                    >
                      <FiTrash2 className="text-xl" />
                    </button>
                  </div>
                ))}

                <button
                  onClick={handleAnalyze}
                  className="btn-primary w-full"
                  disabled={isLoading}
                >
                  Analizar Archivos
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
} 