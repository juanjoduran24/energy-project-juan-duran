import { Link, useLocation } from "react-router-dom";

export default function Header2() {
  return (
    <header className="bg-gradient-to-b from-purple-500 to-pink-500 shadow-lg">
      <div className="container mx-auto mt-0 px-4 py-6">
        <div className="flex items-center mx-auto justify-between">
          {/* Título del sitio */}
          <h1 className="text-2xl text-white hover:text-purple-200 font-bold">
            Energias Renovables
          </h1>

          {/* Navegación */}
          <nav>
            <ul className="flex space-x-6 text-xl text-purple-50 font-bold">
              <li className="hover:text-pink-300">
                <Link to="/table">Tabla</Link>
              </li>
              <li className="hover:text-pink-300">
                <Link to="/overview">Descripción general</Link>
              </li>
              <li className="hover:text-purple-300">
                <Link to="/calculator">Calculadora</Link>
              </li>
              <li className="hover:text-pink-700">
                <Link to="/dashboard">Pagina Principal</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}