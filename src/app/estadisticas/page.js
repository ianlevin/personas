import Personas from '../data/Personas';

export default function Estadisticas() {
  const edades = Personas.map(persona => parseInt(persona.edad)).filter(edad => !isNaN(edad));

  const mayores35 = edades.filter(edad => edad > 35).length;
  
  const maxEdad = Math.max(...edades);
  const personasMaxEdad = Personas.filter(persona => parseInt(persona.edad) === maxEdad);
  
  const minEdad = Math.min(...edades);
  const personasMinEdad = Personas.filter(persona => parseInt(persona.edad) === minEdad);

  return (
    <div>
      <h1>Estadísticas</h1>
      <p>Cantidad de personas mayores de 35 años: {mayores35}</p>
      
      <p>Persona(s) de mayor edad ({maxEdad} años): {personasMaxEdad.length > 0
        ? personasMaxEdad.map(p => `${p.nombre} ${p.apellido}`).join(', ')
        : "No hay personas con edad válida"}</p>
      
      <p>Persona(s) de menor edad ({minEdad} años): {personasMinEdad.length > 0
        ? personasMinEdad.map(p => `${p.nombre} ${p.apellido}`).join(', ')
        : "No hay personas con edad válida"}</p>
    </div>
  );
}
