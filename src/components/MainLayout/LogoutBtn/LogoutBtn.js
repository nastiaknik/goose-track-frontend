import { Button, IconLogOut } from "./LogoutBtn.styled";
import { useDispatch } from "react-redux";
import { logout } from "redux/auth/operations";
import { useTranslation } from "react-i18next";

export const LogOut = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Button type="button" onClick={handleLogout}>
      {t("Log Out")}
      <IconLogOut />
    </Button>
  );
};
