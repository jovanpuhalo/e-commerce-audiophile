import React, { Fragment } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import AboutUs from "../AboutUs/AboutUs";
import Footer from "../Footer/Footer";
import MainMenu from "../Menues/MainMenu/MainMenu";
import SecondMenu from "../Menues/SecondMenu/SecondMenu";
import TopButton from "../UI/TopButton/TopButton";

const Layout = (props) => {
  const location = useLocation();
  const show = ["/", "/checkout"].includes(location.pathname);
  return (
    <Fragment>
      <Nav>
        <MainMenu />
      </Nav>
      {props.children}
      {!show && <SecondMenu />}
      {location.pathname !== "/checkout" && <AboutUs />}
      <Footer />
      <TopButton />
    </Fragment>
  );
};

const Nav = styled.nav`
  background-color: black;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 9.6rem;
  z-index: 2000;
  padding-left: 2rem;
`;

export default Layout;
