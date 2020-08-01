import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import {FaTwitter, FaYoutube, FaWhatsapp} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar1 = () => (
  <Styles>
        <Navbar expand="lg">
      <Navbar.Brand >Vartika &copy; 2020</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <FaWhatsapp/>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <FaYoutube/>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <FaInstagram/>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <FaFacebook/>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
            <FaTwitter />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)