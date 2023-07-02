import { useEffect } from "react";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { LogOut } from "../LogoutBtn/LogoutBtn";
import { Navigation } from "./Navigation/Navigation";
import { DivNavBurger, DivSideBar, OverlaySideBar } from "./SideBar.styled";
import { scrollController } from "components/SharedComponents/Modal/Modal";
export const SideBar = ({ toggleMenu, isMobile }) => {
  useEffect(() => {
    window.addEventListener("keydown", closeOnEsc);
    scrollController.disabledScroll();

    return () => {
      scrollController.enabledScroll();
      window.removeEventListener("keydown", closeOnEsc);
    };
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

  return isMobile ? (
    <OverlaySideBar onClick={closeOnBackdrop}>
      <DivSideBar>
        <DivNavBurger>
          <BurgerMenu toggleMenu={toggleMenu} />
          <Navigation toggleMenu={toggleMenu} />
        </DivNavBurger>
        <LogOut />
      </DivSideBar>
    </OverlaySideBar>
  ) : (
    <DivSideBar>
      <DivNavBurger>
        <BurgerMenu toggleMenu={toggleMenu} />
        <Navigation toggleMenu={toggleMenu} />
      </DivNavBurger>
      <LogOut />
    </DivSideBar>
  );
};
