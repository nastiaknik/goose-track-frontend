import { LogOut } from "./LogoutBtn/LogoutBtn";
import { Navigation } from "./SideBar/SideBar";
import { Container } from "./MainLayout.styled";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { useState } from "react";

export const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    isOpen && (
      <div>
        <BurgerMenu toggleMenu={toggleMenu} isOpen={isOpen} />
        <Container>
          <Navigation />
          <LogOut />
        </Container>
      </div>
    )
  );
};
