import { dataarticulo } from "../data/dataarticulo"
import { CafeMarca } from "./CafeMarca"
import { useCart } from "../context/CartContext"

export const ArticulosMarca = () => {
  const { addToCart } = useCart()

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {dataarticulo.map((item) => (
        <CafeMarca key={item.id} {...item} onAddToCart={addToCart} />
      ))}
    </main>
  )
}
