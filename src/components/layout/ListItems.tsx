import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import PeopleIcon from "@mui/icons-material/People";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SchoolIcon from "@mui/icons-material/School";
import * as React from "react";
import { Link } from "react-router-dom";

export const mainListItems = (
  <React.Fragment>
    <Link to="/">
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
    </Link>

    <Link to="/usuario">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Usuários" />
      </ListItemButton>
    </Link>

    <Link to="/login">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Entrar" />
      </ListItemButton>
    </Link>

    <Link to="/investimento">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Investimento" />
      </ListItemButton>
    </Link>

    <Link to="/empresa">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Empresa" />
      </ListItemButton>
    </Link>

    <Link to="/pessoa">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Pessoa" />
      </ListItemButton>
    </Link>

    <Link to="/grupo-categoria">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Grupo de Categoria" />
      </ListItemButton>
    </Link>

    <Link to="/categoria">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Categoria" />
      </ListItemButton>
    </Link>

    <Link to="/ong">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Ong" />
      </ListItemButton>
    </Link>

    <Link to="/SocialAction">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="SocialAction" />
      </ListItemButton>
    </Link>
    <Link to="/section">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Sessão" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
