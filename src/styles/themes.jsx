import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./globalStyle";

// *** ТІЛЬКИ ДЛЯ ТИХ ЄЛЕМЕНТІВ ЩО ЗМІНЮЮТЬ КОЛІР ***
// ПРИКЛАД ЯК ОБРАТИ ПОТРІБНИЙ КОЛІР У КОМПОНЕНТІ
// color:${({theme})=>theme.variableColors.primaryBackground}

const lightTheme = {
  variableColors: {
    sideBar: "#FFFFFF", // колір бокової панелі
    primaryBackground: "#F7F6F9", // колір сомого нижнього фону
    secondaryBackground: "#FFFFFF", // колір фону
    buttonBlue: "#E3F3FF", // колір кнопок
    activeButtonBlue: "#CAE8FF", // колір активних кнопок
    activeTextColorBtn: "#3E85F3", // колір тексту активних кнопок
    textColorButton: "#3E85F3", // колір тексту кнопок
    hoverTextBtn: "#FFFFFF", // колір тексту при ховері
    text: "#111111", // колір тексту
  },
};

const darkTheme = {
  variableColors: {
    sideBar: "#13151A", // колір бокової панелі
    primaryBackground: "#171820", // колір сомого нижнього фону
    secondaryBackground: "#21222C", // колір фону
    buttonBlue: "#3E85F3", // колір кнопок
    activeButtonBlue: "#21222C", // колір активних кнопок
    activeTextColorBtn: "#FFFFFF", // колір тексту активних кнопок
    textColorButton: "#FFFFFF", // колір тексту кнопок
    hoverTextBtn: "#CAE8FF", // колір тексту при ховері
    text: "#FFFFFF", // колір тексту
  },
};

// *** ВСІ ІНШІ КОЛЬОРИ *** ДОДАВАТИ СЮДИ
// ПРИКЛАД ЯК ОБРАТИ ПОТРІБНИЙ КОЛІР У КОМПОНЕНТІ
// color:${({theme})=>theme.testcolor1}

const otherColors = {
  testcolor1: "#ff0000",
  testcolor2: "#ff00ff",
};

// КОЛИ БУДЕ КНОПКА ЗМІНИ КОЛЬОРУ ТО ПРИДУМАЄМ ЯК ПЕРЕДАВАТИ СЮДИ ТРУ АБО ФОЛС
// поки за потреби міняєму руцями)

const theme = (chekboxTheme = true) => {
  return chekboxTheme
    ? { ...lightTheme, ...otherColors }
    : { ...darkTheme, ...otherColors };
};
//  console.log(theme())
export const Theme = ({ children }) => {
  return (
    <ThemeProvider theme={theme()}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
