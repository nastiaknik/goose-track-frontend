import styled from "styled-components";
import {
  StyledForm,
  Title,
  SubmitBtn,
} from "../RegisterForm/RegisterForm.styled";

export const StyledRecoveryForm = styled(StyledForm)`
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

export const RecoveryTitle = styled(Title)``;

export const RecoverySubmitBtn = styled(SubmitBtn)``;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
`;
