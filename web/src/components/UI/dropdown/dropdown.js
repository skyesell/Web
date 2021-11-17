
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import menu from '../../img/icon/menu.svg';
import user from '../../img/icon/user.svg';
import settings from '../../img/icon/settings.svg';
import logout from '../../img/icon/logout.svg';

export default function Dropdown() {

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
    return (
        <div className="container">
        <div className="menu-container">
          <button onClick={onClick} className="menu-trigger">
            <img
              src={menu}
              alt="User avatar"
            />
          </button>
          <nav
            ref={dropdownRef}
            className={`menu ${isActive ? "active" : "inactive"}`}
          >
            <ul>
              <li>
                <Link to="/account"><img class="icon" src={user} alt = "Error"/>Аккаунт</Link>
              </li>
              <li>
                <Link to="/"><img class="icon" src={settings} alt = "Error"/>Настройки</Link>
              </li>
              <li>
                <Link to="/"><img class="icon" src={logout} alt = "Error"/>Выход</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
}



