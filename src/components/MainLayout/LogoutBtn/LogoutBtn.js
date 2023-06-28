import { Button, IconLogOut } from "./LogoutBtn.styled";
import { useDispatch } from "react-redux";
import { logout } from "redux/auth/operations";

export const LogOut = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Button type="button" onClick={handleLogout}>
      Log Out
      <IconLogOut />
    </Button>
  );
};
