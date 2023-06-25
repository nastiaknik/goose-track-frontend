import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { LogOut } from "../LogoutBtn/LogoutBtn";
import { Navigation } from "./Navigation/Navigation";
import { DivNavBurger, DivSideBar } from "./SideBar.styled";

export const SideBar = ({ toggleMenu }) => {
  return (
    <DivSideBar>
      <DivNavBurger>
        <BurgerMenu toggleMenu={toggleMenu} />
        <Navigation />
      </DivNavBurger>
      <LogOut />
    </DivSideBar>
  );
};
