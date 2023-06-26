import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { StyleVariables } from "./StyleVariables";

// *** ТІЛЬКИ ДЛЯ ТИХ ЄЛЕМЕНТІВ ЩО ЗМІНЮЮТЬ КОЛІР ***
// ПРИКЛАД ЯК ОБРАТИ ПОТРІБНИЙ КОЛІР У КОМПОНЕНТІ
// color:${({theme})=>theme.variableColors.primaryBackground}

const lightTheme = {
  variableColors: {
    sideBar: "#FFFFFF", // колір бокової панелі
    primaryBackground: "#F7F6F9", // колір сомого нижнього фону
    secondaryBackground: "#FFFFFF", // колір фону
    buttonBlue: "#E3F3FF", // колір кнопок
    backgroundButton: "#3E85F3", // колір фону кнопок
    textButton: "#FFFFFF", // колір тексту кнопок
    activeButtonBlue: "#CAE8FF", // колір активних кнопок
    activeTextColorBtn: "#3E85F3", // колір тексту активних кнопок
    textColorButton: "#3E85F3", // колір тексту кнопок
    hoverTextBtn: "#FFFFFF", // колір тексту при ховері
    text: "#111111", // колір тексту
    arrowColor: "#343434", // колір стрілки
    activeArrowColor: "#dce3e5", // колір активної стрілки
  },
};

const darkTheme = {
  variableColors: {
    sideBar: "#13151A", // колір бокової панелі
    primaryBackground: "#171820", // колір сомого нижнього фону
    secondaryBackground: "#21222C", // колір фону
    buttonBlue: "#3E85F3", // колір кнопок
    backgroundButton: "#3E85F3", // колір фону кнопок
    textButton: "#FFFFFF", // колір тексту кнопок
    activeButtonBlue: "#21222C", // колір активних кнопок
    activeTextColorBtn: "#FFFFFF", // колір тексту активних кнопок
    textColorButton: "#FFFFFF", // колір тексту кнопок
    hoverTextBtn: "#CAE8FF", // колір тексту при ховері
    text: "#FFFFFF", // колір тексту
    arrowColor: "#FFFFFF", // колір стрілки
    activeArrowColor: "rgba(255, 255, 255, 0.15)", // колір активної стрілки
  },
};

// *** ВСІ ІНШІ КОЛЬОРИ *** ДОДАВАТИ СЮДИ
// ПРИКЛАД ЯК ОБРАТИ ПОТРІБНИЙ КОЛІР У КОМПОНЕНТІ
// color:${({theme})=>theme.testcolor1}

const otherColors = {
  testcolor1: "#ff0000",
  testcolor2: "#ff00ff",
  accsentBlue: "#3E85F3",
  // gradPink: `linear-gradient(${90}deg, ${"#FFD2DD"}, ${"#FFD2DD99"})`,
};

export const Theme = ({ children }) => {
  const currentTheme = useSelector((state) => state.theme.currentTheme);
  const theme = (checkTheme = false) => {
    return checkTheme
      ? { ...lightTheme, ...otherColors }
      : { ...darkTheme, ...otherColors };
  };

  return (
    <ThemeProvider theme={theme(currentTheme)}>
      <GlobalStyles />
      <StyleVariables />
      {children}
    </ThemeProvider>
  );
};
