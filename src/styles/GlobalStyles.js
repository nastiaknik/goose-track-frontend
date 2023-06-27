import { createGlobalStyle } from "styled-components";
import PoppinsMedium from "../assets/fonts/poppins/Poppins-Regular.ttf";
import PoppinsRegular from "../assets/fonts/poppins/Poppins-Regular.ttf";
import InterBold from "../assets/fonts/inter/Inter-Bold.ttf";
import InterMedium from "../assets/fonts/inter/Inter-Medium.ttf";
import InterRegular from "../assets/fonts/inter/Inter-Regular.ttf";
import InterSemiBold from "../assets/fonts/inter/Inter-SemiBold.ttf";
import InterSemiBoldItalic from "../assets/fonts/inter/Inter-SemiBold-Italic.ttf";
import CoolveticaRegular from "../assets/fonts/coolvetica/Coolvetica-Regular.otf";
import CoolveticaRegularItalic from "../assets/fonts/coolvetica/Coolvetica-Regular-Italic.otf";

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'PoppinsRegular';
        src: local('PoppinsRegular'),
        url(${PoppinsRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'PoppinsMedium';
        src: local('PoppinsMedium'),
        url(${PoppinsMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'InterBold';
        src: local('InterBold'),
        url(${InterBold}) format('truetype');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'InterMedium';
        src: local('InterMedium'),
        url(${InterMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'InterRegular';
        src: local('InterRegular'),
        url(${InterRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'InterSemiBold';
        src: local('InterSemiBold'),
        url(${InterSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'InterSemiBoldItalic';
        src: local('InterSemiBoldItalic'),
        url(${InterSemiBoldItalic}) format('truetype');
        font-weight: 600;
        font-style: italic;
    }

    @font-face {
        font-family: 'CoolveticaRegular';
        src: local('CoolveticaRegular'),
        url(${CoolveticaRegular}) format('opentype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'CoolveticaRegularItalic';
        src: local('CoolveticaRegularItalic'),
        url(${CoolveticaRegularItalic}) format('opentype');
        font-weight: 400;
        font-style: italic;
    }

body {

      position: relative;
  margin: 0;
  font-family: "MontserratMedium", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
}

button {
  cursor: pointer;
  border: none;
  
  &:focus {
    outline: none;
  }
}
`;
