import { Link, Route, Routes } from 'react-router-dom'
import { Header } from './pages/Header'
import { CafeMarca } from './pages/CafeMarca'
import { ArticulosMarca } from './pages/ArticulosMarca'
import { Regalo } from './pages/Regalo'
import { cafesdata } from './data/cafesdata'
import { useCart } from './context/CartContext'

function App() {
  const { cart, addToCart, removeFromCart, clearCart, cartTotal, totalItems } = useCart()

  return (
    <>
      <Header totalItems={totalItems} />
      <Routes>
        <Route path='/' element={
          <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {cafesdata.map((cafe) => (
              <CafeMarca key={cafe.id} {...cafe} onAddToCart={addToCart} />
            ))}
          </main>
        } />
        <Route path='/articulos-marca' element={<ArticulosMarca />} />
        <Route path='/regalos' element={<Regalo />} />
        <Route path='/carrito' element={
          <main className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-amber-900">Carrito de Compras</h2>
              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-sm text-red-600 hover:text-red-800 font-medium"
                >
                  Vaciar carrito
                </button>
              )}
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl shadow-sm">
                <p className="text-gray-500 text-lg mb-4">Tu carrito está vacío</p>
                <Link to="/" className="text-amber-700 hover:text-amber-900 font-medium underline">
                  Ver productos
                </Link>
              </div>
            ) : (
              <>
                <div className="space-y-4 mb-8">
                  {cart.map((item) => (
                    <div key={item.id} className="bg-white rounded-xl shadow-sm p-4 flex items-center gap-4">
                      <img src={item.imagen} alt={item.nombre} className="w-20 h-20 object-contain rounded-lg bg-gray-50" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{item.nombre}</h3>
                        <p className="text-sm text-gray-500">{item.precio}</p>
                        <p className="text-sm text-gray-600">Cantidad: {item.cantidad}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 text-sm font-medium"
                      >
                        Eliminar
                      </button>
                    </div>
                  ))}
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between text-lg font-bold text-gray-900">
                    <span>Total:</span>
                    <span>${cartTotal.toLocaleString('es-CO')}</span>
                  </div>
                </div>
              </>
            )}
          </main>
        } />
      </Routes>
    </>
  )
}

export default App
