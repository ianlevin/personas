// src/app/contacto/page.js
export default function Contacto() {
    return (
      <div>
        <h1>Contacto</h1>
        <form>
          <label>Nombre:</label>
          <input type="text" name="nombre" />
          <br />
          <label>Apellido:</label>
          <input type="text" name="apellido" />
          <br />
          <label>Email:</label>
          <input type="email" name="email" />
          <br />
          <label>Edad:</label>
          <input type="number" name="edad" />
          <br />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
  