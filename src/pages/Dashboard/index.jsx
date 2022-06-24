import Menu from "../../components/Menu";
import Content from "./Content";
import Footer from "./Footer";
import { getPlaylists } from "../../services/Dashboard";
import { data } from "../../utils/data";

const Dashboard = () => {
  const music = data[0];
  return (
    <div className="dashboard">
      <section className="dashboard__item">
        <Menu />
        <Content />
      </section>
      <Footer
        albumImage={music?.album?.cover_big}
        musicName={music?.title}
        authorName={music?.artist?.name}
        albumName={music?.album?.title}
        playMusic={music?.preview}
      />
    </div>
  );
};

export default Dashboard;
