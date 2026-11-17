// Un componente es una función que devuelve una descripción de la interfaz.
// Su nombre empieza por mayúscula para que React lo reconozca como componente.
function App() {
  // JSX permite escribir marcado parecido a HTML dentro de JavaScript.
  // Los paréntesis agrupan el JSX de varias líneas que devuelve la función.
  return (
    <>
      {/* Los comentarios dentro de JSX se escriben entre llaves. */}
      <header className="barra-festival">
        {/* El símbolo musical es decorativo: el nombre ya identifica la marca. */}
        <span className="logo-festival" aria-hidden="true">♫</span>
        <span className="nombre-festival">Festival React</span>
      </header>

      {/* main contiene el contenido principal, separado de las barras fijas. */}
      <main className="festival">
      {/* Conservamos el saludo del primer paso debajo de la barra de marca. */}
      <section aria-labelledby="saludo">
        <h1 id="saludo">Hola Festival</h1>
        <p className="introduccion">
          Todo festival empieza con un primer escenario. El nuestro es esta
          página: una aplicación de React que iremos construyendo paso a paso.
        </p>
      </section>

      <section aria-labelledby="objetivo">
        <h2 id="objetivo">Paso 1 · Nuestro primer componente</h2>
        <p>
          React es una biblioteca de JavaScript para crear interfaces mediante
          componentes. Esta pantalla nace en <code>App.jsx</code>: una función
          llamada <code>App</code> que devuelve JSX.
        </p>
        <p>
          JSX se parece a HTML, pero forma parte de JavaScript. Vite prepara ese
          código para que el navegador pueda ejecutarlo.
        </p>
      </section>

      <section aria-labelledby="recorrido">
        <h2 id="recorrido">¿Cómo llega este saludo a la pantalla?</h2>
        <ol>
          <li><code>index.html</code> contiene el elemento con identificador <code>root</code>.</li>
          <li><code>main.jsx</code> conecta React con ese elemento y muestra <code>&lt;App /&gt;</code>.</li>
          <li><code>App.jsx</code> describe el contenido que estás leyendo.</li>
          <li><code>index.css</code> define sus colores, espacios y tipografía.</li>
        </ol>
      </section>

      </main>

      <footer>
        <p>DAM2 - Desarrollo Web en Entorno Cliente</p>
      </footer>
    </>
  );
}

// La exportación por defecto permite importar App desde main.jsx.
export default App;
