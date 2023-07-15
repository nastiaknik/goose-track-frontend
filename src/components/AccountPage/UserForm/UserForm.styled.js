import styled from "styled-components";
import { AiOutlineUser, AiOutlinePlus } from "react-icons/ai";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  gap: 34px;
  width: 100%;
  height: 100%;
  margin-top: 51px;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.variableColors.secondaryBackground};
  border-radius: 16px;

  @media (min-width: 768px) {
    margin-top: 0;
    padding: 40px;
    position: static;
  }

  @media (min-width: 1440px) {
    gap: 0;
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;

export const FlexInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 18px;
  width: 100%;

  @media (min-width: 480px) {
    width: 299px;
  }

  @media (min-width: 768px) {
    width: 354px;
    gap: 22px;
  }

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    column-gap: 50px;
    row-gap: 20px;
    width: 758px;
    margin-bottom: 84px;
    margin-top: 44px;

    & label:nth-child(1) {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }

    & label:nth-child(3) {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
    }

    & label:nth-child(4) {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }

    & label:nth-child(5) {
      grid-column: 2 / 3;
      grid-row: 2 / 3;
    }
  }
`;

export const AvatarBlock = styled.div`
  margin-top: -76px;

  @media (min-width: 768px) {
    margin-top: 0;
  }

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const InputAvatar = styled.input`
  display: none;
  width: 200px;
  height: 150px;
`;

export const DefaultIcon = styled(AiOutlineUser)`
  width: 50%;
  height: 50%;
  position: relative;
  top: 25%;
  left: 25%;
  object-fit: cover;
  font-size: 38px;
  color: var(--auth-bg-color);
`;

export const LabelImg = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
`;

export const LabelAvatar = styled.label`
  display: block;
  position: relative;
  border-radius: 50%;
  border: 2px solid var(--accent-bg-color);
  width: 72px;
  height: 72px;
  background-color: ${({ theme }) => theme.variableColors.avatarBgColor};
  cursor: pointer;

  @media (min-width: 768px) {
    width: 124px;
    height: 124px;
  }
`;

export const AddAvatarBtn = styled.div`
  width: 14px;
  height: 14px;
  background-color: var(--accent-bg-color);
  border-radius: 50%;
  color: var(--light-text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  cursor: pointer;
  bottom: -4px;
  right: 15px;

  @media (min-width: 768px) {
    bottom: -6px;
    right: 24px;
    width: 24px;
    height: 24px;
  }

  transition: background-color var(--animation);

  &:hover,
  :focus {
    background-color: var(--hover-btn-bg-color);
  }
`;

export const PlusIcon = styled(AiOutlinePlus)`
  color: var(--light-text-color);
  background-color: var(--accent-bg-color);
  width: 8px;
  height: 8px;

  @media (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const Button = styled.button`
  font-family: "InterSemiBold";
  display: block;
  width: 100%;
  max-width: 195px;
  background-color: var(--accent-bg-color);
  border-radius: 16px;
  color: var(--light-text-color);
  font-size: 14px;
  line-height: 1.3;
  text-align: center;
  border: none;
  padding: 14px;

  &[disabled] {
    background-color: #84828a;
    opacity: 0.5;
    pointer-events: none;
  }

  @media (min-width: 768px) {
    padding: 15px;
    max-width: 262px;
    max-height: 48px;
  }

  transition: background-color var(--animation), box-shadow var(--animation);

  &:hover,
  :focus {
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 1);
    background-color: var(--hover-btn-bg-color);
  }
`;

export const TitleAvatar = styled.p`
  font-family: "InterBold";
  font-weight: 700;
  font-size: 14px;
  line-height: 1.3;
  margin: 14px 0 0 0;
  text-align: center;
  color: ${({ theme }) => theme.variableColors.titleAvatar};

  @media (min-width: 768px) {
    margin: 20px 0 0 0;
    font-size: 18px;
    line-height: 1;
  }
`;

export const TextAvatar = styled.p`
  font-family: "InterSemiBold";
  font-weight: 600;
  font-size: 12px;
  line-height: 1.2;
  color: ${({ theme }) => theme.variableColors.textAvatar};
  margin-top: 4px;
  text-align: center;

  @media (min-width: 768px) {
    margin-top: 8px;
    font-size: 14px;
    line-height: 1.3;
  }

  @media (min-width: 1440px) {
    line-height: 1.3;
  }
`;

export const Success = styled.div`
  color: var(--correct-text-color);
  font-size: 12px;
  height: 14px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const BirthdayContainer = styled.div`
  position: relative;
  z-index: 100;
`;
