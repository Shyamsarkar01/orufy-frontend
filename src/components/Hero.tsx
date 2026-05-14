import "./Hero.css";

function Hero() {

  return (

    <section className="hero">

      <div className="hero-container">

        <div className="hero-content">

          <span className="hero-tag">
            Creative UI Design
          </span>

          <h1>
            Design confidently.
          </h1>

          <p>
            Modern responsive MERN stack
            website with animations and
            interactive UI.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Get Started
            </button>

            <button className="secondary-btn">
              Learn More
            </button>

          </div>

        </div>

        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            alt=""
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;