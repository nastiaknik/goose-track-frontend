import { useDispatch } from "react-redux";
import { logout } from "redux/auth/operations";

import { Button } from "./LogoutBtn.styled";
import { FiLogOut } from "react-icons/fi";

export const LogOut = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Button type="button" onClick={handleLogout}>
        Log Out
        <FiLogOut />
      </Button>
    </>
  );
};
