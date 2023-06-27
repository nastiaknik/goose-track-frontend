import { useEffect } from "react";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { LogOut } from "../LogoutBtn/LogoutBtn";
import { Navigation } from "./Navigation/Navigation";
import { DivNavBurger, OverlaySideBar, DivSideBar } from "./SideBar.styled";

export const SideBar = ({ toggleMenu }) => {
  useEffect(() => {
    window.addEventListener("keydown", closeOnEsc);
    return () => window.removeEventListener("keydown", closeOnEsc);
  });
  const closeOnEsc = (evt) => {
    if (evt.code === "Escape") {
      toggleMenu();
    }
  };
  const closeOnBackdrop = (evt) => {
    if (evt.currentTarget === evt.target) {
      toggleMenu();
    }
  };
  return (
    <OverlaySideBar onClick={closeOnBackdrop}>
      <DivSideBar>
        <DivNavBurger>
          <BurgerMenu toggleMenu={toggleMenu} />
          <Navigation toggleMenu={toggleMenu} />
        </DivNavBurger>
        <LogOut />
      </DivSideBar>
    </OverlaySideBar>
  );
};
