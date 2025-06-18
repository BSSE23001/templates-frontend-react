import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  Container
} from 'react-bootstrap';
import {
  Gear,
  PersonCircle,
  BoxArrowRight
} from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';

/**
 * HeaderNavigationBar
 * 
 * Props:
 * - brand: string or JSX (e.g., "MyApp" or <img src="..." />)
 * - links: array of { label: string, to: string, icon?: JSX }
 * - user: { name: string, avatarUrl?: string }
 * - onLogout: optional function
 */
const HeaderNavigationBar = ({
  brand = 'MyApp',
  links = [],
  user = { name: 'User' },
  onLogout
}) => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" sticky="top" className="shadow">
      <Container fluid>
        <Navbar.Brand>
          {brand}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            {links.map((link) => (
              <Nav.Link
                key={link.label}
                as={NavLink}
                to={link.to}
                end
                className="d-flex align-items-center"
              >
                {link.icon && <span className="me-1">{link.icon}</span>}
                {link.label}
              </Nav.Link>
            ))}
          </Nav>

          <Nav>
            <NavDropdown
              align="end"
              title={
                <span className="d-flex align-items-center">
                  <PersonCircle className="me-1" />
                  {user.name}
                </span>
              }
              id="user-nav-dropdown"
            >
              <NavDropdown.Item as={NavLink} to="/settings">
                <Gear className="me-2" />
                Settings
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/profile">
                <PersonCircle className="me-2" />
                Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              {onLogout && (
                <NavDropdown.Item onClick={onLogout}>
                  <BoxArrowRight className="me-2" />
                  Logout
                </NavDropdown.Item>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderNavigationBar;



// EXAMPLE USAGE
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HeaderNavigationBar from './components/headerbarNavigation.component';
// import { HouseDoor, Book } from 'react-bootstrap-icons';

// import Home from './pages/Home';
// import Courses from './pages/Courses';
// import Profile from './pages/Profile';
// import Settings from './pages/Settings';

// <Router>
// <HeaderNavigationBar
// brand="My LMS"
// user={{ name: 'Alice' }}
// onLogout={() => alert('Logging out...')}
// links={[
//     { label: 'Home', to: '/', icon: <HouseDoor /> },
//     { label: 'Courses', to: '/courses', icon: <Book /> },
// ]}
// />
// <Routes>
// <Route path="/" element={<Home />} />
// <Route path="/courses" element={<Courses />} />
// <Route path="/profile" element={<Profile />} />
// <Route path="/settings" element={<Settings />} />
// </Routes>
// </Router>