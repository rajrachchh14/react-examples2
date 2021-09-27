import React from 'react';
// import { Navbar, Nav } from 'react-bootstrap'; //  NavLink,
import { Link, NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <>
      <h1>Examples</h1>
      <ul>
        <li>
          <NavLink as={Link} to="/" activeClassName="active" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink as={Link} to="/ExUseState" activeClassName="active" exact>
            Use State
          </NavLink>
        </li>

        <li>
          <NavLink
            as={Link}
            to="/ExUseParms/raj"
            activeClassName="active"
            exact
          >
            Use Parms
          </NavLink>
        </li>

        <li>
          <NavLink as={Link} to="/ExRender" activeClassName="active" exact>
            ExRender
          </NavLink>
        </li>

        <li>
          <NavLink as={Link} to="/ExUseStateTwo" activeClassName="active" exact>
            Use State Example 2 (Login Form)
          </NavLink>
        </li>

        <li>
          <NavLink
            as={Link}
            to="/ExUseStateThree"
            activeClassName="active"
            exact
          >
            Use State Example 3 (Login Form) + ( Rest Operrator)
          </NavLink>
        </li>
        <li>
          <NavLink as={Link} to="/ExUTimer" activeClassName="active" exact>
            Digital Clock
          </NavLink>
        </li>
        <li>
          <NavLink as={Link} to="/ExForm" activeClassName="active" exact>
            Form - Controll Component
          </NavLink>
        </li>
        <li>
          <NavLink
            as={Link}
            to="/OuterFunction/ChiledFunctonCall"
            activeClassName="active"
            exact
          >
            Chiled Function Call
          </NavLink>
        </li>

        <li>
          <NavLink as={Link} to="/According" activeClassName="active" exact>
            According
          </NavLink>
        </li>
        <li>
          <NavLink as={Link} to="/UseEffectEx" activeClassName="active" exact>
            UseEffectEx
          </NavLink>
        </li>

        <li>
          <NavLink as={Link} to="/AxiosEx" activeClassName="active" exact>
            AxiosEx
          </NavLink>
        </li>

        <li>
          <NavLink as={Link} to="/xyz" activeClassName="active" exact>
            404 Page Not Found
          </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Sidebar;
