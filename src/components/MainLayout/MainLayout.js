import { useState } from "react";
import Header from "./Header/Header";
import { DivHeader, DivLayout } from "./MainLayout.styled";
import { SideBar } from "./SideBar/SideBar";

export const MainLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = window.matchMedia("(max-width: 1023px)").matches;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <DivLayout>
      {(isOpen || !isMobile) && <SideBar toggleMenu={toggleMenu} isMobile={isMobile} />}
      <DivHeader>
        <Header toggleMenu={toggleMenu} />
        {children}
      </DivHeader>
    </DivLayout>
  );
};
