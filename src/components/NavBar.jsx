import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import pdf from '../assets/Block de Solicitudes (2022_05_19 15_49_13 UTC).pdf';

import logo from "../assets/logo.svg";
import "./css/NavBar.css";

export const NavBar = ({ view }) => {
  const { enlaces } = useSelector((state) => state.productos);
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <div className="navbar__enlaces">
        <a onClick={() => navigate("/Nosotros")}>
          <p className="navbar__drive">Sobre Nosotros</p>
        </a>
        {enlaces.length > 0 && view && (
          <a
            href={pdf}
            target="_BLANK"
          >
            <p className="navbar__drive">Registro</p>
          </a>
        )}
      </div>
    </div>
  );
};
