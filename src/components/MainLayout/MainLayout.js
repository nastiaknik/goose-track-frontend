import { LogOut } from "./LogoutBtn/LogoutBtn";
import { Navigation } from "./SideBar/SideBar";
import { Container } from "./MainLayout.styled";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";

export const MainLayout = () => {
  return (
    <>
      <BurgerMenu />
      <Container>
        <Navigation />
        <LogOut />
      </Container>
    </>
  );
};
