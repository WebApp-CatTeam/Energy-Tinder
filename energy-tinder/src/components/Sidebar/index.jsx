import "./index.css";
import { useState } from "react";

const Sidebar = () => {
  const [navShowed, setNavShowed] = useState(false);

  const onClickHandler = () => {
    setNavShowed(!navShowed);
  };

  const links = [
    {
      name: "Profile",
      path: "/",
    },
    {
      name: "Statistic",
      path: "/",
    },
    {
      name: "Main",
      path: "/",
    },
  ];
  return (
    <>
      <button className="sidebar-icon" onClick={onClickHandler}>
        <svg
          width="35"
          height="25"
          viewBox="0 0 20 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20 2V0H0V2H20ZM20 4V6H0V4H20ZM20 10V8H0V10H20ZM20 14V12H0V14H20Z"
            fill="black"
          />
        </svg>
      </button>

      {navShowed && (
        <nav className="sidebar">
          <h1 className="sidebar-header">Sidebar</h1>
          <ul className="sidebar-list">
            {links.map((link) => (
              <li className="list-item">
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Sidebar;
