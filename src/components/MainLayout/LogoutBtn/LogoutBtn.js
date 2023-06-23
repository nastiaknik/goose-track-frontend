import { Button } from "./LogoutBtn.styled";
import { FiLogOut } from "react-icons/fi";

export const LogOut = () => {
  return (
    <>
      <Button>
        Log Out
        <FiLogOut />
      </Button>
    </>
  );
};
