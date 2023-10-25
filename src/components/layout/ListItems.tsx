import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import PeopleIcon from "@mui/icons-material/People";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ListItemButton from "@mui/material/ListItemButton";
import PaidIcon from "@mui/icons-material/Paid";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SchoolIcon from "@mui/icons-material/School";
import * as React from "react";
import { Link } from "react-router-dom";
import HandshakeIcon from '@mui/icons-material/Handshake';
import ListAltIcon from '@mui/icons-material/ListAlt';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

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

    <Link to="/pessoa">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Pessoa" />
      </ListItemButton>
    </Link>

    <Link to="/voluntario">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Voluntario" />
      </ListItemButton>
    </Link>

    <Link to="/investimento">
      <ListItemButton>
        <ListItemIcon>
          <PaidIcon />
        </ListItemIcon>
        <ListItemText primary="Investimento" />
      </ListItemButton>
    </Link>

    <Link to="/empresa">
      <ListItemButton>
        <ListItemIcon>
          <BusinessCenterIcon />
        </ListItemIcon>
        <ListItemText primary="Empresa" />
      </ListItemButton>
    </Link>

    

    <Link to="/grupo-categoria">
      <ListItemButton>
        <ListItemIcon>
          <ListAltIcon />
        </ListItemIcon>
        <ListItemText primary="Grupo de Categoria" />
      </ListItemButton>
    </Link>

    <Link to="/categoria">
      <ListItemButton>
        <ListItemIcon>
          <ListAltIcon />
        </ListItemIcon>
        <ListItemText primary="Categoria" />
      </ListItemButton>
    </Link>

    <Link to="/ong">
      <ListItemButton>
        <ListItemIcon>
          <HandshakeIcon />
        </ListItemIcon>
        <ListItemText primary="Ong" />
      </ListItemButton>
    </Link>

    <Link to="/SocialAction">
      <ListItemButton>
        <ListItemIcon>
          <VolunteerActivismIcon />
        </ListItemIcon>
        <ListItemText primary="Ação Social" />
      </ListItemButton>
    </Link>
    <Link to="/section">
      <ListItemButton>
        <ListItemIcon>
          <AccessTimeIcon />
        </ListItemIcon>
        <ListItemText primary="Sessão" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
