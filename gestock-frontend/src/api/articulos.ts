import { API_URL } from '../config';

export interface Articulo {
  codigo_articulo?: bigint;
  descripcion_articulo: string;
}

export const getArticulos = async (): Promise<Articulo[]> => {
  const res = await fetch(`${API_URL}/articulo`);
  if (!res.ok) throw new Error('Error al obtener articulos');
  return res.json();
};

export const crearArticulo = async (articulo: Articulo): Promise<Articulo> => {
  const res = await fetch(`${API_URL}/articulo`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(articulo),
  });
  if (!res.ok) throw new Error('Error al crear articulo');
  return res.json();
};
