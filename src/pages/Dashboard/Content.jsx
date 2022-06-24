import React from "react";
import CardMusic from "../../components/CardMusic";
import MenuProfile from "../../components/MenuProfile";
import { data } from "../../utils/data";
import Banner from "./Banner";

const Content = () => {
  const banner_music = data[0];
  const returnResults = () => {
    return (
      <section>
        <h2 className="dashboard-title">Resultados</h2>
        <div className="dashboard-cards">
          {data &&
            data.map((music) => {
              return (
                <CardMusic
                  key={music?.id}
                  image={music?.album?.cover_big}
                  name={music?.title}
                  author={music?.artist?.name}
                />
              );
            })}
        </div>
      </section>
    );
  };
  return (
    <div className="dashboard-content">
      <nav>
        <input
          placeholder="Buscar"
          autoComplete="off"
          className="input-search"
        />
        <MenuProfile username="Franciso m." />
      </nav>
      <Banner
        name={banner_music?.title}
        author={banner_music?.artist?.name}
        authorImage={banner_music?.artist?.picture_xl}
        image={banner_music?.album?.cover_big}
      />
      {returnResults()}
    </div>
  );
};

export default Content;
