import { useEffect, useState } from 'react';
import { getArticulos, crearArticulo, Articulo } from './api/articulos';

function App() {
  const [articulos, setArticulos] = useState<Articulo[]>([]);
  const [descripcion_articulo, setDescripcion_articulo] = useState('');


  useEffect(() => {
    cargarArticulos();
  }, []);

  const cargarArticulos = () => {
    getArticulos().then(setArticulos).catch(console.error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nuevoArticulo: Articulo = {
      descripcion_articulo,
    };
    try {
      await crearArticulo(nuevoArticulo);
      setDescripcion_articulo('');
      cargarArticulos();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Lista de Articulos</h1>
      <ul>
        {articulos.map((p) => (
          <li key={p.codigo_articulo}>{p.descripcion_articulo}</li>
        ))}
      </ul>

      <h2>Agregar nuevo Articulo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Descripcion:</label>
          <input value={descripcion_articulo} onChange={e => setDescripcion_articulo(e.target.value)} required />
        </div>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}

export default App;
