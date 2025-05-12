'use client';

import { useRouter } from 'next/navigation';

export default function Resultado() {
  const router = useRouter();

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-6">
      <div className="text-center">
          <h1 className="text-3xl font-semibold text-primary mb-4">
            Análisis Completado
          </h1>
          <p className="text-gray-dark">
            El análisis de tus archivos ha sido completado exitosamente
          </p>
        </div>
        <h1 className="text-2xl font-bold text-blue-800">
          Análisis Documento Base Licitación
        </h1>

        <section className="space-y-4 border-t border-primary-lighter pt-8">
          <h2 className="text-xl font-bold text-blue-800">Resumen Ejecutivo</h2>
          <p className="text-gray-800 leading-relaxed">
            El presente informe realiza un análisis comparativo entre el Documento Base de
            Licitación (DBL) del proyecto "Mejoramiento y mantenimiento del corredor La Mata
            hacia el municipio de Convención en el Departamento de Norte de Santander" (Lotes 1
            y 2) y el Documento Tipo de Licitación de Infraestructura de Transporte, Versión 4. El
            objetivo es identificar desviaciones respecto del modelo ideal, analizar riesgos
            contractuales y operacionales, y determinar la viabilidad estratégica de participar en
            esta licitación.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-blue-800">Comparación de Secciones Clave</h2>
          
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-blue-800">1. Objeto del Contrato</h3>
              <div className="space-y-3">
                <p>
                  <span className="font-bold">Documento Tipo:</span> Establece que el objeto debe formularse de forma clara,
                  indicando la actividad principal, el alcance territorial y el presupuesto, además de
                  diferenciar cada lote si aplica.
                </p>
                <p>
                  <span className="font-bold">Documento Real:</span> El objeto contractual consiste en la ejecución de obras de
                  mejoramiento y mantenimiento del corredor vial La Mata – Convención,
                  correspondiente a la Ruta Nacional 7406, bajo la jurisdicción del departamento de
                  Norte de Santander. Se estructura en dos lotes: Lote 1 con un presupuesto de
                  $102.681.938.841 y Lote 2 con $35.681.307.783, ambos con un plazo máximo de
                  ejecución hasta el 31 de diciembre de 2025.
                </p>
                <p>
                  <span className="font-bold">Observaciones:</span> El objeto cumple los requisitos del documento tipo, aunque sería pertinente precisar si la ejecución se desarrollará en zonas urbanas o rurales.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-blue-800">2. Requisitos Habilitantes (Técnicos, Jurídicos y Financieros)</h3>
              <div className="space-y-3">
                <p>
                  <span className="font-bold">Documento Tipo:</span> Exige requisitos objetivos conforme a la Matriz 1 de experiencia, verificación de capacidad financiera (liquidez, patrimonio) y la inscripción activa en el RUP.
                </p>
                <p>
                  <span className="font-bold">Documento Real:</span> Se solicita inscripción vigente en el RUP con experiencia conforme a la clasificación UNSPSC, capacidad jurídica mediante documentos de representación, certificación de seguridad social y capacidad residual.
                </p>
                <p>
                  <span className="font-bold">Observaciones:</span> Alineado al documento tipo. Se recomienda verificar la correlación entre la experiencia solicitada y el objeto del contrato.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-blue-800">3. Condiciones Contractuales</h3>
              <div className="space-y-3">
                <p>
                  <span className="font-bold">Documento Tipo:</span> Define garantías (seriedad, cumplimiento, estabilidad de obra, RCE), formas de pago y condiciones para declarar desierta una licitación.
                </p>
                <p>
                  <span className="font-bold">Documento Real:</span> Incluye garantías obligatorias, pagos contra actas de avance y anticipo conforme al reglamento.
                </p>
                <p>
                  <span className="font-bold">Observaciones:</span> Se reproduce fielmente el documento tipo. Revisar si las coberturas están ajustadas al riesgo real.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-blue-800">4. Aspectos Técnicos del Proyecto</h3>
              <div className="space-y-3">
                <p>
                  <span className="font-bold">Documento Tipo:</span> Requiere estudios previos, localización, cantidades de obra, cronograma general y si hay diseños definitivos.
                </p>
                <p>
                  <span className="font-bold">Documento Real:</span> El Anexo 1 contiene cantidades de obra, especificaciones, y se mencionan intervenciones sobre vía primaria. No se aclara si hay diseños definitivos.
                </p>
                <p>
                  <span className="font-bold">Observaciones:</span> Se recomienda solicitar el Anexo Técnico para evitar omisiones.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold text-blue-800">5. Mecanismos de Evaluación y Puntuación</h3>
              <div className="space-y-3">
                <p>
                  <span className="font-bold">Documento Tipo:</span> Ponderación por precio, calidad (incluyendo maquinaria y plan de calidad), criterios sociales y desempates.
                </p>
                <p>
                  <span className="font-bold">Documento Real:</span> Se evalúan factores económicos y de calidad: gerencia de proyectos, maquinaria, criterios sociales, participación de MIPYMES y personas con discapacidad.
                </p>
                <p>
                  <span className="font-bold">Observaciones:</span> Coherente con el documento tipo. Revisar el peso porcentual del factor económico.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-blue-800">Análisis de Riesgos</h2>
          <ol className="list-decimal list-inside space-y-2 pl-4">
            <li><span className="font-bold">Desabastecimiento de materiales:</span> Alto impacto. Requiere monitoreo y contratos marco.</li>
            <li><span className="font-bold">Variación de precios por factores externos:</span> Inflación, salario mínimo, etc. Se recomienda cláusulas de revisión de precios.</li>
            <li><span className="font-bold">Orden público:</span> Riesgo extremo. Requiere coordinación con la fuerza pública.</li>
            <li><span className="font-bold">Deficiencia en señalización y PMT:</span> Puede causar sanciones. Debe haber personal especializado.</li>
            <li><span className="font-bold">Limitaciones de movilidad local:</span> Riesgo logístico por topografía. Ajustar cronogramas.</li>
            <li><span className="font-bold">Dependencia de permisos:</span> Puede afectar el inicio. Incluir tiempos de obtención en el cronograma.</li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-blue-800">Análisis de Oportunidades</h2>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Aplicación del Documento Tipo reduce discrecionalidad y mejora la transparencia.</li>
            <li>Segmentación por lotes permite ajustar la estrategia según la capacidad.</li>
            <li>Obras recurrentes favorecen a empresas con experiencia previa.</li>
            <li>Presupuesto significativo justifica inversión adicional.</li>
            <li>Factores cualitativos ponderados pueden ser ventaja competitiva.</li>
            <li>Contrato con INVÍAS mejora visibilidad institucional.</li>
            <li>Matriz de riesgos ayuda en la planificación de contingencias.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-blue-800">Recomendación Estratégica Final</h2>
          <p className="text-gray-800 leading-relaxed">
            <strong>Participar con precauciones.</strong> La estructura del pliego se ajusta al Documento Tipo, lo cual es positivo. 
            Se recomienda revisar el Anexo Técnico para evaluar riesgos y confirmar la capacidad de ejecución según los plazos. 
            La matriz de riesgos es clave para preparar un plan de manejo adecuado.
          </p>
        </section>

        <div className="flex justify-center">
          <button
            onClick={() => router.push('/')}
            className="mt-8 px-6 py-2 bg-blue-800 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Realizar Nuevo Análisis
          </button>
        </div>
      </div>
    </main>
  );
} 