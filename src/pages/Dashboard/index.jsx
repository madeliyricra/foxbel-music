import Menu from "../../components/Menu";
import Content from "./Content";
import Footer from "./Footer";
import { getPlaylists } from "../../services/Dashboard";
import { data } from "../../utils/data";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [musicSelected, setMusicSelected] = useState(data[0]);
  const [play, setPlay] = useState(false);
  const [audio, setAudio] = useState(new Audio(musicSelected?.preview));

  useEffect(() => {
    audio.pause();
    setPlay(false);
    const audioMusic = new Audio(musicSelected?.preview);
    setAudio(audioMusic);
  }, [musicSelected]);

  return (
    <div className="dashboard">
      <section className="dashboard__item">
        <Menu />
        <Content
          musicSelected={musicSelected}
          setMusicSelected={setMusicSelected}
        />
      </section>
      <Footer
        albumImage={musicSelected?.album?.cover_big}
        musicName={musicSelected?.title}
        authorName={musicSelected?.artist?.name}
        albumName={musicSelected?.album?.title}
        audio={audio}
        play={play}
        setPlay={setPlay}
      />
    </div>
  );
};

export default Dashboard;
