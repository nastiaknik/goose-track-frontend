import { LogOut } from "./LogoutBtn";
import { Navigation } from "./SideBar";
import { Container } from "./MainLayout.styled";

export const MainLayout = () => {
  return (
    <Container>
      <Navigation />
      <LogOut />
    </Container>
  );
};
