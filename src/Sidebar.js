import React from 'react';
import { Navbar, Nav } from 'react-bootstrap'; //  NavLink,
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <>
      <h1>Examples</h1>
      <ul>
        <li>
          <Link as={Link} to="/Home">
            Home
          </Link>
        </li>
        <li>
          <Link as={Link} to="/ExUseState">
            Use State
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Sidebar;
