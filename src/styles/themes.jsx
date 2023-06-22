import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { StyleVariables } from "./StyleVariables";

// *** ТІЛЬКИ ДЛЯ ТИХ ЄЛЕМЕНТІВ ЩО ЗМІНЮЮТЬ КОЛІР ***
// ПРИКЛАД ЯК ОБРАТИ ПОТРІБНИЙ КОЛІР У КОМПОНЕНТІ
// color:${({theme})=>theme.colors.backgroun2}

const lightTheme = {
  colors: {
    sideBar: "#FFFFFF", // колір бокової панелі
    backgroun: "#F7F6F9", // колір сомого нижнього фону
    backgroun2: "#FFFFFF", // колір фону
    buttonBlue: "#E3F3FF", // колір кнопок
    text: "#111111", // колір тексту
  },
};

// const darkTheme = {
//   colors: {
//     sideBar: "#13151A", // колір бокової панелі
//     backgroun: "#171820", // колір сомого нижнього фону
//     backgroun2: "#21222C", // колір фону
//     buttonBlue: "#3E85F3", // колір кнопок
//     text: "#FFFFFF", // колір тексту
//   },
// };

export const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <StyleVariables />
      {children}
    </ThemeProvider>
  );
};
