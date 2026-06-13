import type { CafeCardProps } from "../type/cafe";

interface CafeMarcaProps extends CafeCardProps {
  onAddToCart?: (product: CafeCardProps) => void;
}

export const CafeMarca = ({ id, nombre, descripcion, precio, imagen, onAddToCart }: CafeMarcaProps) => {
  const product = { id, nombre, descripcion, precio, imagen };
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col group">
      <div className="w-full bg-gray-50 p-6 flex items-center justify-center h-64 overflow-hidden relative">
        <img 
          src={imagen} 
          alt={nombre} 
          className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 right-3 bg-red-600 text-white text-ms font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          Premium
        </span>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
          {nombre}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-2 flex-grow mb-4">
          {descripcion}
        </p>
        <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-auto">
          <span className="text-xl font-extrabold text-amber-950">
            {precio}
          </span>
          <button
            onClick={() => onAddToCart?.(product)}
            className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors shadow-sm hover:shadow"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};
