// src/app/persona/[id]/page.js
import { notFound } from 'next/navigation'; // Para manejar rutas no encontradas
import Personas from '../../data/Personas.js'; // Importamos personas desde data

export default function Persona({ params }) {
  const persona = Personas.find(p => p.id === params.id);

  if (!persona) {
    return notFound();
  }

  return (
    <div>
      <h1>{persona.nombre} {persona.apellido}</h1>
      <p>Email: {persona.email}</p>
      <p>Edad: {persona.edad}</p>
    </div>
  );
}
