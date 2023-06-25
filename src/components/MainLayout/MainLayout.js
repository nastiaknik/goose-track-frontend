// import Header from "./Header/Header";
import { DivHeader, DivLayout } from "./MainLayout.styled";
import { SideBar } from "./SideBar/SideBar";
import { useState } from "react";

export const MainLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <DivLayout>
      {isOpen && <SideBar toggleMenu={toggleMenu} />}
      <DivHeader>
        {/* <Header /> */}
        {children}
      </DivHeader>
    </DivLayout>
  );
};
