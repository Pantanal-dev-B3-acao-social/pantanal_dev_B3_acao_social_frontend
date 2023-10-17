import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";
import "./layout.css";

const useStyles = makeStyles({
  container: {
    padding: "1em",
    width: "100%",
  },
});

function Layout({ children }: { children: React.ReactNode }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <nav className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/voluntario">Voluntários</Link>
          </li>
          <li>
            <Link to="/usuario">Usuário</Link>
          </li>
          <li>
            <Link to="/pessoa">Pessoas</Link>
          </li>
          <li>
            <Link to="/empresa">Empresa</Link>
          </li>
          <li>
            <Link to="/investimento">Investimentos</Link>
          </li>
          <li>
            <Link to="/grupo-categoria">Grupo Categoria</Link>
          </li>
          <li>
            <Link to="/categoria">Categoria</Link>
          </li>
          <li>
            <Link to="/socialAction">Ação Social</Link>
          </li>
          <li>
            <Link to="/section">Sessão</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
}

export default Layout;
