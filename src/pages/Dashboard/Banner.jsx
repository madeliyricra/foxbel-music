import Icon from "../../components/Icon";

const Banner = ({ name, author, image, authorImage }) => {
  return (
    <div className="dashboard-banner">
      <section className="music-play">
        <Icon name="play" className="" />
        <img src={image} alt={name} />
      </section>
      <section className="dashboard-banner-content">
        <div
          className="dashboard-banner-background"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(167, 0, 0, 0.7), rgba(167, 0, 0, 0.7)), url("${authorImage}")`,
          }}
        ></div>
        <div className="dashboard-banner-info">
          <div className="dashboard-banner-description">
            <h2>{name}</h2>
            <h5>Lo mejor de {author}</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
              sunt neque dignissimos! Recusandae, iste. Sed praesentium
              necessitatibus nulla facilis odit iure voluptatibus maiores nam,
              ex beatae aspernatur amet, accusantium cupiditate.
            </p>
          </div>
          <div className="button-groups">
            <button className="btn" type="button">
              Reproducir
            </button>
            <button className="btn-outline" type="button">
              Seguir
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
