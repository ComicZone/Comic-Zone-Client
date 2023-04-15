import React from "react";
import styled from "styled-components";

const MENU_LINKS = [
  { name: "Collection", path: "", icon: "" },
  { name: "Saved", path: "", icon: "" },
  { name: "History", path: "", icon: "" },
  { name: "Logout", path: "", icon: "" },
];

function Sidebar() {
  return (
    <Container>
      <UserBoard />
      <Menu>
        {MENU_LINKS.map((item, index) => {
          return (
            <MenuItems key={`${item.name}-${index}`}>
              <LinkWrapper href={item.path}>
                <Icon></Icon>
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

const UserBoard = styled.div`
  height: 559px;
  display: flex;
  outline: 1px solid black;
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
`;

const Icon = styled.img``;

const Text = styled.p``;
