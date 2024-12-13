import React from 'react';
import { Sun, Leaf, DollarSign } from 'lucide-react';

export function SolarOverview() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-purple-800 mb-8 text-center">
          Energía Solar: Impulsando un Futuro Sostenible
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-6 rounded-xl shadow-md">
            <Sun className="h-12 w-12 text-pink-500 mb-4" />
            <h3 className="text-xl font-semibold text-purple-800 mb-3">Cómo Funciona</h3>
            <p className="text-purple-600">
              Los paneles solares convierten la luz solar en electricidad a través de células fotovoltaicas, 
              proporcionando energía limpia y renovable directamente del sol.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-xl shadow-md">
            <Leaf className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-purple-800 mb-3">Impacto Ambiental</h3>
            <p className="text-purple-600">
              La energía solar reduce las emisiones de carbono, requiere un uso mínimo de agua, 
              y ayuda a combatir el cambio climático sin contaminación durante su operación.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-6 rounded-xl shadow-md">
            <DollarSign className="h-12 w-12 text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-purple-800 mb-3">Beneficios Económicos</h3>
            <p className="text-purple-600">
              Invertir en energía solar reduce las facturas de electricidad, proporciona independencia energética 
              y a menudo viene acompañado de incentivos fiscales y reembolsos.
            </p>
          </div>
        </div>

        <div className="bg-purple-50 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-purple-800">Estadísticas Clave</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-3xl font-bold text-pink-500">1,000+ GW</p>
              <p className="text-purple-600">Capacidad Solar Global</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-3xl font-bold text-pink-500">3%</p>
              <p className="text-purple-600">Participación en Electricidad Global</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-3xl font-bold text-pink-500">70%</p>
              <p className="text-purple-600">Reducción de Costos Desde 2010</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-3xl font-bold text-pink-500">25+ Años</p>
              <p className="text-purple-600">Vida Útil Promedio de los Paneles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}