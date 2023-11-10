import "./index.css";

export const WelcomeSection = () => {
  return (
    <>
      <section id="welcome-section">
        <div className="container">
          <div className="welcome-content">
            <h2>¡Bienvenidos a Solsoft Computación!</h2>
            <p>
              Somos un emprendimiento dedicado a la venta de insumos de hardware
              y software informático en Argentina. Con más de 30 años de
              experiencia en el sector, nuestro fundador cuenta con un amplio
              conocimiento en el rubro.
            </p>
            <p>
              En 1989 iniciamos nuestras operaciones en el mercado local y hoy
              en día nos enorgullece haber crecido y haber formado parte de la
              Unidad de Apoyo Tecnológico de la Universidad de Buenos Aires,
              donde nuestro fundador ha estado brindando soluciones y
              asesoramiento por más de 18 años a esta prestigiosa Universidad.
            </p>
            <p>
              En Solsoft Computación nos enfocamos en ofrecer productos y
              servicios de calidad a precios competitivos, siempre buscando la
              satisfacción de nuestros clientes tanto particulares como
              empresas. Nos aseguramos de estar siempre actualizados con las
              últimas tendencias y tecnologías en el sector informático para
              brindarles a nuestros clientes la mejor experiencia.{" "}
            </p>
            <blockquote>
              “Una inversión de esta importancia amerita un buen asesoramiento
              dejando de lado la intuición”
            </blockquote>
            <p>
              Sobre todo, en tiempos en que cada inversión debe tener resultados
              acorde a ella.
            </p>
            <a href="#contact" className="btn btn-primary">
              MAS
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
