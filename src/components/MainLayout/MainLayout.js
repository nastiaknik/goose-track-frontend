import { useState } from "react";
import { useWindowSize } from "react-use";
import Header from "./Header/Header";
import { DivHeader, DivLayout } from "./MainLayout.styled";
import { SideBar } from "./SideBar/SideBar";

export const MainLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = window.matchMedia("(max-width: 1439px)").matches;
  const windowSize = useWindowSize();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <DivLayout>
      {(isOpen || windowSize.width >= 1440) && <SideBar toggleMenu={toggleMenu} isMobile={isMobile} />}
      <DivHeader>
        <Header toggleMenu={toggleMenu} />
        {children}
      </DivHeader>
    </DivLayout>
  );
};
