import React from "react";
import styled from "styled-components";
import { MdCollections, MdHistory, MdLogout } from "react-icons/md";
import { CiSaveDown2 } from "react-icons/ci";
import "../../Stylesheets/SidebarProfile.css";

const MENU_LINKS = [
  { name: "Collection", path: "", icon: <MdCollections /> },
  { name: "Saved", path: "", icon: <CiSaveDown2 /> },
  { name: "History", path: "", icon: <MdHistory /> },
  { name: "Logout", path: "", icon: <MdLogout /> },
];

function Sidebar() {
  return (
    <Container>
      <UserBoard>
        <h1 className="user-profile-image">BM</h1>
        <h2 className="username">Welcome back!</h2>
        <h3 className="user-profilename">Baba Mashood </h3>
        <div className="user-buttons">
          <div className="cart-items">
            <p className="cart-header">cart</p>
            <p className="cart-text">23</p>
          </div> 
          <div className="user-downloads">
            <p className="download-header">Downloaded</p>
            <p className="download-text">10</p>
          </div>
        </div>
      </UserBoard>
      <Menu>
        {MENU_LINKS.map((item, index) => {
          return (
            <MenuItems key={`${item.name}-${index}`}>
              <LinkWrapper href={item.path}>
                <Icon>{item.icon}</Icon>
                <Text>{item.name}</Text>
              </LinkWrapper>
            </MenuItems>
          );
        })}
      </Menu>
    </Container>
  );
}

export default Sidebar;

const Container = styled.aside`
  height: 100%;
  width: 100%;
  max-width: 370px;
  display: flex;
  flex-direction: column;
  font-family: "Comic Sans MS";
`;

const Text = styled.p``;

const UserBoard = styled.div`
  display: flex;
  flex-direction: column;
  height: 559px;
  outline: 1px solid black;
  background: #f2f4f6;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 1em 0em;
  /* outline: 1px solid red; */
`;

const MenuItems = styled.li`
  /* outline: 1px solid red; */
  padding: 0 2em;
  width: 100%;
`;
const LinkWrapper = styled.a`
  width: 100%;
  text-decoration: none;
  display: flex;
  padding: 1em;
  transition: all 0.2 ease-in-out;
`;

const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-right: 1em;
  color: #666666;
  cursor: pointer;
  transition: all 0.2 ease-in-out;

  &:hover {
    color: yellow;
  }
`;
