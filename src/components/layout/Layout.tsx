import { makeStyles } from '@mui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import './layout.css'

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
      <nav className='menu'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/banco">Banco</Link>
          </li>
          <li>
            <Link to="/usuario">Usuário</Link>
          </li>
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
}

export default Layout;