import { useEffect, useState } from 'react';
import { getProductos, crearProducto, Producto } from './api/productos';

function App() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');

  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = () => {
    getProductos().then(setProductos).catch(console.error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nuevoProducto: Producto = {
      nombre,
      precio: parseFloat(precio)
    };
    try {
      await crearProducto(nuevoProducto);
      setNombre('');
      setPrecio('');
      cargarProductos();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Lista de productos</h1>
      <ul>
        {productos.map((p) => (
          <li key={p.id}>{p.nombre} - ${p.precio}</li>
        ))}
      </ul>

      <h2>Agregar nuevo producto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input value={nombre} onChange={e => setNombre(e.target.value)} required />
        </div>
        <div>
          <label>Precio:</label>
          <input type="number" value={precio} onChange={e => setPrecio(e.target.value)} required />
        </div>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}

export default App;
