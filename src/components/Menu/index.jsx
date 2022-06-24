import Logo from "../../assets/icons/logo.png";
import { Menus } from "./Header";

const Menu = () => {
  const returnMenu = () => {
    return (
      <section className="menu-list">
        {Menus &&
          Menus.map((menu, key) => {
            return (
              <article key={key} className="menu-list__item">
                <h3>{menu?.name}</h3>
                <ul>
                  {menu?.submenus &&
                    menu?.submenus.map((submenu, key) => {
                      return (
                        <li key={key} className={submenu?.active ? `on` : ``}>
                          {submenu?.name}
                        </li>
                      );
                    })}
                </ul>
              </article>
            );
          })}
      </section>
    );
  };

  return (
    <div className="menu">
      <section className="menu-logo">
        <img src={Logo} />
      </section>
      {returnMenu()}
    </div>
  );
};

export default Menu;
