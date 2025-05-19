import { API_URL } from '../config';

export interface Producto {
  id?: number;
  nombre: string;
  precio: number;
}

export const getProductos = async (): Promise<Producto[]> => {
  const res = await fetch(`${API_URL}/productos`);
  if (!res.ok) throw new Error('Error al obtener productos');
  return res.json();
};

export const crearProducto = async (producto: Producto): Promise<Producto> => {
  const res = await fetch(`${API_URL}/productos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(producto),
  });
  if (!res.ok) throw new Error('Error al crear producto');
  return res.json();
};
