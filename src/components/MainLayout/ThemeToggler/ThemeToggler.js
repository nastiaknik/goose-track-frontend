import { useDispatch, useSelector } from "react-redux";
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { toggleTheme } from "redux/theme/themeSlice";
import { ThemeButton } from "./ThemeToggler.styled";

export const ThemeToggler = () => {
  const currentTheme = useSelector((state) => state.theme.currentTheme);
  const dispatch = useDispatch();

  return (
    <ThemeButton onClick={() => dispatch(toggleTheme())}>
      {currentTheme ? (
        <FiMoon color="#3E85F3" size={26} />
      ) : (
        <FiSun color="#3E85F3" size={26} />
      )}
    </ThemeButton>
  );
};
