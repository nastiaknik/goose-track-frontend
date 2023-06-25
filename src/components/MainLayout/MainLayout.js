import Header from "./Header/Header";
import { DivHeader, DivLayout } from "./MainLayout.styled";
import { SideBar } from "./SideBar/SideBar";
import { useState } from "react";

export const MainLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <DivLayout>
      {(isOpen || !isMobile) && <SideBar toggleMenu={toggleMenu} />}
      <DivHeader>
        <Header toggleMenu={toggleMenu} />
        {children}
      </DivHeader>
    </DivLayout>
  );
};
