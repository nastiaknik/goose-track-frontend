import styled from "styled-components";
import {
  StyledForm,
  Title,
  //   StyledLabel,
  //   InputThumb,
  //   StyledInput,
  SubmitBtn,
} from "../RegisterForm/RegisterForm.styled";

export const StyledLoginForm = styled(StyledForm)`
  > label {
    margin-top: 24px;

    @media screen and (min-width: 768px) {
      margin-top: 18px;
    }

    :nth-child(2) {
      margin-top: 32px;

      @media screen and (min-width: 768px) {
        margin-top: 40px;
      }
    }
  }
`;

export const LoginTitle = styled(Title)``;

export const LoginSubmitBtn = styled(SubmitBtn)``;
