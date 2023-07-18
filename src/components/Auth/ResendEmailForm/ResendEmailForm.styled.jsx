import styled from "styled-components";
import {
  StyledForm,
  Title,
  SubmitBtn,
} from "../RegisterForm/RegisterForm.styled";

export const EmailForm = styled(StyledForm)``;

export const EmailTitle = styled(Title)``;

export const EmailSubmitBtn = styled(SubmitBtn)`
  :disabled {
    background-color: var(--inactive-nav-text-color);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;
