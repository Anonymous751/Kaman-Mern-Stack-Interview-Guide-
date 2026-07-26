import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";

function NavbarComponent() {
  const [expanded, setExpanded] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Web", path: "/web" },
    { name: "Frontend QA", path: "/frontend" },
    { name: "Backend QA", path: "/backend" },
    { name: "Databases QA", path: "/database" },
    { name: "System-Design QA", path: "/system-design" },
    { name: "Cloud", path: "/cloud" },
    { name: "Deployment", path: "/deployment" },
    { name: "Projects", path: "/mern-projects" },
  ];

  const moreLinks = [
    { name: "SDLC", path: "/sdlc" },
    { name: "Folder Structure", path: "/folder_structure-page" },
    { name: "Notes", path: "/notes" },
  ];

  return (
    <Navbar
      expand="lg"
      bg="white"
      className="py-3 shadow-sm sticky-top"
      expanded={expanded}
    >
      <Container>
        {/* Brand */}
        <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center">
          <img
            src="/images/mernlogo3.png"
            alt="MERNApp Logo"
            className="h-11 w-11"
            draggable="false"
          />
        </Navbar.Brand>

        {/* Toggle button for mobile */}
        <Navbar.Toggle
          aria-controls="main-navbar"
          onClick={() => setExpanded(!expanded)}
        />

        <Navbar.Collapse id="main-navbar">
          <Nav className="mx-auto d-flex gap-3 align-items-center">
            {/* Regular nav links */}
            {navLinks.map((link, idx) => (
              <NavLink
                key={idx}
                to={link.path}
                onClick={() => setExpanded(false)}
                className={({ isActive }) =>
                  `fw-semibold px-3 py-2 text-decoration-none rounded ${
                    isActive
                      ? "text-primary border-bottom border-primary"
                      : "text-dark"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* More dropdown */}
            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                className="fw-semibold px-3 py-2 text-dark border-0"
              >
                More
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {moreLinks.map((item, i) => (
                  <Dropdown.Item
                    key={i}
                    as={NavLink}
                    to={item.path}
                    onClick={() => setExpanded(false)}
                    className={({ isActive }) =>
                      `text-dark text-decoration-none ${
                        isActive ? "text-primary fw-bold" : ""
                      }`
                    }
                  >
                    {item.name}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            {/* Account dropdown */}
            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                className="fw-semibold px-3 py-2 text-dark border-0"
              >
                Account
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  as={NavLink}
                  to="/profile"
                  onClick={() => setExpanded(false)}
                  className={({ isActive }) =>
                    `text-dark text-decoration-none ${
                      isActive ? "text-primary fw-bold" : ""
                    }`
                  }
                >
                  Profile
                </Dropdown.Item>

                <Dropdown.Item
                  as={NavLink}
                  to="/settings"
                  onClick={() => setExpanded(false)}
                  className={({ isActive }) =>
                    `text-dark text-decoration-none ${
                      isActive ? "text-primary fw-bold" : ""
                    }`
                  }
                >
                  Settings
                </Dropdown.Item>

                <Dropdown.Divider />

                <Dropdown.Item
                  as={NavLink}
                  to="/logout"
                  onClick={() => setExpanded(false)}
                  className="text-danger fw-semibold"
                >
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
