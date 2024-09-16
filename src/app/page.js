import Link from 'next/link';
import Personas from './data/Personas';
export default function Home() {
  return (
    <div>
      <h1>Listado de Personas</h1>
      <ul>
        {Personas.map(persona => (
          <li key={persona.id}>
            <Link href={`/persona/${persona.id}`}>
              {persona.nombre} {persona.apellido}
            </Link>
          </li>
        ))}
      </ul>
      <nav>
        <Link href="/estadisticas">Ver Estadísticas</Link> | 
        <Link href="/contacto">Contacto</Link>
      </nav>
    </div>
  );
}
