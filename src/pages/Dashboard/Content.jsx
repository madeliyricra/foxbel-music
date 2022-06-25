import React, { useState } from "react";
import CardMusic from "../../components/CardMusic";
import MenuProfile from "../../components/MenuProfile";
import { data } from "../../utils/data";
import Banner from "./Banner";

const Content = ({ musicSelected, setMusicSelected }) => {
  const [listMusic, setListMusic] = useState(data);

  const returnResults = () => {
    return (
      <section>
        <h2 className="dashboard-title">Resultados</h2>
        <div className="dashboard-cards">
          {listMusic && listMusic?.length > 0 ? (
            listMusic.map((music) => {
              return (
                <CardMusic
                  key={music?.id}
                  image={music?.album?.cover_big}
                  name={music?.title}
                  author={music?.artist?.name}
                  handleClick={() => {
                    setMusicSelected(music);
                  }}
                />
              );
            })
          ) : (
            <p>No se encontro resultados</p>
          )}
        </div>
      </section>
    );
  };

  const changeSearch = (e) => {
    const value = e.target.value.toLowerCase();
    const newList = data.filter((music) =>
      music?.title.toLowerCase().includes(value)
    );
    setListMusic(newList);
  };

  return (
    <div className="dashboard-content">
      <nav>
        <input
          placeholder="Buscar"
          autoComplete="off"
          className="input-search"
          onChange={(e) => changeSearch(e)}
        />
        <MenuProfile username="Franciso m." />
      </nav>
      <Banner
        name={musicSelected?.title}
        author={musicSelected?.artist?.name}
        authorImage={musicSelected?.artist?.picture_xl}
        image={musicSelected?.album?.cover_big}
      />
      {returnResults()}
    </div>
  );
};

export default Content;
