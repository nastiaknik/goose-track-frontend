import styled, { css } from "styled-components";
import { ReactComponent as pencilSVG } from "../../../assets/images/svg/pencil.svg";
import { ReactComponent as trashSVG } from "../../../assets/images/svg/trash.svg";

export const StyledForm = styled.form`
  background-color: ${({ theme }) => theme.variableColors.secondaryBackground};
  display: flex;
  flex-direction: column;
  width: 295px;

  @media screen and (min-width: 768px) {
    width: 402px;
  }
`;

export const Label = styled.label`
  font-family: "InterMedium", sans-serif;
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.variableColors.calendarTextColor};
`;

export const LabelReview = styled.label`
  font-family: "InterMedium", sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.variableColors.calendarTextColor};
`;

export const Top = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0 8px 0;
`;

export const ReviewText = styled.textarea`
  font-family: "InterBold", sans-serif;
  color: ${({ theme }) => theme.variableColors.calendarTextColor};
  background-color: ${({ theme }) => theme.variableColors.modalReviewTextBg};
  border-width: 1px;
  border-color: ${({ theme }) => theme.variableColors.modalReviewBorder};
  width: 100%;
  border-radius: 8px;
  padding: 18px 14px;
  font-size: 14px;
  min-height: 127px;
  min-width: 100%;
  max-width: 100%;
  resize: none;

  &:hover,
  :focus {
    outline: none;
  }
`;

export const ButtonsCont = styled.div`
  display: flex;
  margin-top: 18px;
  gap: 0 8px;
`;

export const SaveButton = styled.button`
  background-color: var(--accent-bg-color);
  color: var(--light-text-color);
  border: none;
  height: 48px;
  line-height: 48px;
  text-align: center;
  border-radius: 8px;
  font-family: "InterBold", sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  flex-basis: 100%;
`;

export const CancelButton = styled.button`
  background-color: var(--cancel-btn-bg-color);
  color: var(--secondary-text-color);
  border: none;
  height: 48px;
  line-height: 48px;
  text-align: center;
  border-radius: 8px;
  font-family: "InterBold", sans-serif;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  flex-basis: 100%;
`;

export const Actions = styled.div`
  display: flex;
  gap: 0 8px;
`;

export const EditIcon = styled(pencilSVG)`
  color: var(--accent-text-color);
`;

export const DeleteIcon = styled(trashSVG)`
  color: var(--task-priority-high-color);
`;

export const ActionBtnEdit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 36px;
  background-color: var(--light-btn-bg-color);
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--accent-bg-color);
      ${EditIcon} {
        color: var(--light-text-color);
      }
    `};
`;

export const ActionBtnDelete = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 36px;
  background-color: var(--delete-review-btn-bg-color);
  cursor: pointer;
`;
