import styled from "styled-components";

export const StyledForm = styled.form`
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
  color: var(--secondary-text-color);
`;

export const LabelReview = styled.label`
  font-family: "InterMedium", sans-serif;
  font-size: 12px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 8px;
  color: var(--secondary-text-color);
`;

export const ReviewText = styled.textarea`
  color: var(--secondary-text-color);
  background-color: var(--task-input-bg-color);
  width: 100%;
  border: none;
  border-radius: 8px;
  padding: 18px 14px;
  font-size: 14px;
  min-height: 127px;

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
