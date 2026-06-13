import { Link } from "react-router-dom"
import logocafe from "../image/logocafe.png";

interface HeaderProps {
  totalItems?: number;
}

export const Header = ({ totalItems = 0 }: HeaderProps) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-8 group">
              <img 
                className="h-12 w-auto object-contain transition-transform group-hover:scale-105" 
                src={logocafe}
                alt="Logo Tienda" 
              />
              <span className="text-xl font-bold text-amber-800 tracking-wider hidden sm:block">
                Tienda JUAN VALDEZ
              </span>
            </Link>
          </div>

          <nav className="flex items-center gap-6">
            <Link to='/' className="text-amber-900 hover:text-amber-600 font-medium transition-colors">Café de Marca</Link>
            <Link to='/articulos-marca' className="text-amber-900 hover:text-amber-600 font-medium transition-colors">Artículos de Marca</Link>
            <Link to='/regalos' className="text-amber-900 hover:text-amber-600 font-medium transition-colors">Regalos</Link>
            <Link to='/carrito' className="relative text-amber-900 hover:text-amber-600 font-medium transition-colors">
              Carrito
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-4 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
