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
    textUserPanel: "#34343480", // коліртексту User Panel
    activeTextColorBtn: "#3E85F3", // колір тексту активних кнопок
    textColorButton: "#3E85F3", // колір тексту кнопок
    hoverTextBtn: "#FFFFFF", // колір тексту при ховері
    text: "#111111", // колір тексту
    textNav: " #34343480", // колір Nav
    borderColor: "#E3F3FF", // колір рамки графіка
    arrowColor: "#343434", // колір стрілки
    calendarTextColor: "#343434", // колір тексту календаря
    weekendTextColor: "#3E85F3", // колір тексту вихідних днів календаря
    backgroundCalendar: "#FFFFFF", // колір фону календаря
    borderСalendarColor: "rgba(220,	227,	229, 0.80)", // колір рамки календаря
    activeArrowColor: "#dce3e5", // колір активної стрілки
    borderColorSideBar: "1px solid #dce3e580", // колір бордера SideBar
    gooseColor: "rgba(62, 133, 243, 1)", // колір тексту Goose
    backgroundColorClose: "white", // фон кнопки закриття SideBar
    colorBtnClose: "black", // фон кнопки закриття SideBar
    labelUserFormTextColor: "#111111", // лейбл у юзер формі
    borderUserForm: "1px solid #11111126", // бордер інпуту у юзер формі
    borderInputHover: "1px solid #111111", // бордер при ховері
    titleAvatar: "#343434", // колір ім'я користувача
    textAvatar: "#343434", // текст юзер
    arrowIconColor: "#111111", // колір стрілки вниз
    bgColorLowTask: "#CEEEFD", // колір фону Low такси
    textColorLowTask: "#3E85F3", // колір фону Low такси
    bgColorMediumTask: "#FCF0D4", // колір фону Medium такси
    textColorMediumTask: "#F3B249", // колір фону Medium такси
    bgColorHighTask: "#FFD2DD", // колір фону High такси
    textColorHighTask: "#EA3D65", // колір фону High такси
    avatarBgColor: "#f8f8f8", // колір фону дефолтного зображення
    modalReviewLabel: "rgba(52, 52, 52, 0.80)",
    modalReviewBorder: "#F6F6F6",
    modalReviewTextBg: "#F6F6F6",
    scrollbarThumbColor: "#e7e5e5", // колір скролу таски
    scrollbarTrackColor: "#f2f2f2", // фон скролу
    columnScrollbarThumbColor: "rgba(231, 229, 229, 1)", // колір скролу колонки
    columnScrollbarTrackColor: "rgba(242, 242, 242, 1)",
    columnScrollbarThumbHoverColor: "#c0c0c0",
    notActiveCalendarLinkColor: "#E3F3FF",
    activeCalendarLinkColor: "#CAE8FF",
    borderCalendar: "1px solid background: rgb(255, 255, 255)",
    backgroundColorTaskModal: "#FFFFFF",
    backgroundTaskFormInput: "#F6F6F6",
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
    activeButtonBlue: "#3E85F3", // колір активних кнопок
    textUserPanel: "#FAFAFA4D", // колір тексту User Panel
    borderColorSideBar: "none", // колір бордера SideBar
    activeTextColorBtn: "#FFFFFF", // колір тексту активних кнопок
    textColorButton: "#FFFFFF", // колір тексту кнопок
    hoverTextBtn: "#CAE8FF", // колір тексту при ховері
    text: "#FFFFFF", // колір тексту
    textNav: "#FFFFFF", // колір Nav
    borderColor: "#e3f3ff26", // колір рамки графіка
    arrowColor: "#FFFFFF", // колір стрілки
    calendarTextColor: "#FFFFFF", // колір тексту календаря
    weekendTextColor: "#3E85F3", // колір тексту вихідних днів календаря
    backgroundCalendar: "#21222C", // колір фону календаря
    borderСalendarColor: "rgba(255, 255, 255, 0.15)", // колір рамки календаря
    activeArrowColor: "rgba(255, 255, 255, 0.15)", // колір активної стрілки
    gooseColor: "#E3F3FF", //колір тексту Goose
    backgroundColorClose: "#13151A", // фон кнопки закриття SideBar
    colorBtnClose: "white", // фон кнопки закриття SideBar
    labelUserFormTextColor: "#FAFAFA4D", // лейбл у юзер формі
    borderUserForm: "1px solid #FFFFFF26", // бордер інпуту у юзер формі
    borderInputHover: "1px solid #ffffff", // бордер при ховері
    titleAvatar: "#ffffff", // колір ім'я користувача
    textAvatar: "rgba(250, 250, 250, 0.3)", // текст юзер
    arrowIconColor: "#ffffff", // колір стрілки вниз
    bgColorLowTask: "#CEEEFD", // колір фону Low такси
    textColorLowTask: "#3E85F3", // колір фону Low такси
    bgColorMediumTask: "#FCF0D4", // колір фону Medium такси
    textColorMediumTask: "#F3B249", // колір фону Medium такси
    bgColorHighTask: "#FFD2DD", // колір фону High такси
    textColorHighTask: "#EA3D65", // колір фону High такси
    avatarBgColor: "#171820", // колір фону дефолтного зображення
    modalReviewLabel: "rgba(250, 250, 250, 0.30)",
    modalReviewBorder: "rgba(255, 255, 255, 0.15)",
    modalReviewTextBg: "#21222C",
    scrollbarThumbColor: "#171820", // колір скролу таски
    scrollbarTrackColor: "#2d3037", // фон скролу
    columnScrollbarThumbColor: "rgba(45, 48, 55, 1)", // колір скролу колонки
    columnScrollbarTrackColor: "rgba(33, 34, 44, 1)",
    columnScrollbarThumbHoverColor: "#444444",
    notActiveCalendarLinkColor: "#21222C",
    activeCalendarLinkColor: "#3E85F3",
    borderCalendar: "1px solid rgba(255, 255, 255, 0.15)",
    backgroundColorTaskModal: "#171820",
    backgroundTaskFormInput: "#171820",
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
