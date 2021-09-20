import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Cappacita Movies</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Filmes para assistir</Link>
            </li>

            <li>
              <Link to="/watched">Minha coleção!</Link>
            </li>

            <li>
              <Link to="/add" className="btn btn-main">
                + Adicionar
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
