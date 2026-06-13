

export interface CafeCardProps {
  id: number;
  nombre: string;
  descripcion: string;
  precio: string;
  imagen: string;
}

export interface CartItem extends CafeCardProps {
  cantidad: number;
}