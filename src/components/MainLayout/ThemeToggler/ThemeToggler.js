import { useDispatch, useSelector } from "react-redux";
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { toggleTheme } from "redux/theme/themeSlice"
export const ThemeToggler = () => {
    const currentTheme = useSelector((state) => state.theme.currentTheme);
    const dispatch = useDispatch()
    return (
      <button onClick={() => dispatch(toggleTheme())}>
        {currentTheme ? <p> <FiMoon/> </p> : <p> <FiSun/> </p>}
      </button>
    );
}