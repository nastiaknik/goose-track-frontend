import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "redux/theme/themeSlice"
export const ThemeToggler = () => {
    const currentTheme = useSelector((state) => state.theme.currentTheme);
    const dispatch = useDispatch()
    return (
      <button onClick={() => dispatch(toggleTheme())}>
        {currentTheme ? <p> light</p> : <p> dark</p>}
      </button>
    );
}