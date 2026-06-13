import { createContext, useContext, useState, type ReactNode } from 'react'
import type { CartItem, CafeCardProps } from '../type/cafe'

function parsePrice(precio: string): number {
  return Number(precio.replace(/[^0-9]/g, ''))
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (product: CafeCardProps) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
  cartTotal: number
  totalItems: number
}

const CartContext = createContext<CartContextType | null>(null)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (product: CafeCardProps) => {
    const itemExists = cart.find((item) => item.id === product.id)

    if (itemExists) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, cantidad: item.cantidad + 1 }
        }
        return item
      })
      setCart(updatedCart)
    } else {
      const newItem: CartItem = { ...product, cantidad: 1 }
      setCart([...cart, newItem])
    }
  }

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  const clearCart = () => {
    setCart([])
  }

  const cartTotal = cart.reduce((total, item) => {
    return total + parsePrice(item.precio) * item.cantidad
  }, 0)

  const totalItems = cart.reduce((total, item) => total + item.cantidad, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartTotal, totalItems }}>
      {children}
    </CartContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart debe usarse dentro de CartProvider')
  }
  return context
}
