import React from 'react';
// import { Navbar, Nav } from 'react-bootstrap'; //  NavLink,
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <>
      <h1>Examples</h1>
      <ul>
        <li>
          <Link as={Link} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link as={Link} to="/ExUseState">
            Use State
          </Link>
        </li>
        <li>
          <Link as={Link} to="/ExUseStateTwo">
            Use State Example 2 (Login Form)
          </Link>
        </li>

        <li>
          <Link as={Link} to="/ExUseStateThree">
            Use State Example 3 (Login Form) + ( Rest Operrator)
          </Link>
        </li>
        <li>
          <Link as={Link} to="/ExUTimer">
            Digital Clock
          </Link>
        </li>
        <li>
          <Link as={Link} to="/ExForm">
            Form - Controll Component
          </Link>
        </li>
        <li>
          <Link as={Link} to="/OuterFunction/ChiledFunctonCall">
            Chiled Function Call
          </Link>
        </li>

        <li>
          <Link as={Link} to="/According">
            According
          </Link>
        </li>
        <li>
          <Link as={Link} to="/UseEffectEx">
            UseEffectEx
          </Link>
        </li>

        <li>
          <Link as={Link} to="/AxiosEx">
            AxiosEx
          </Link>
        </li>

        <li>
          <Link as={Link} to="/xyz">
            404 Page Not Found
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Sidebar;
