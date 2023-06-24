import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 335px;
  //   max-width: 303px;  for task modal
  min-height: 290px;
  //   min-height: 336px;  for task modal
  width: 100%;
  padding: 20px;
  //   padding: 18px;  for task modal
  background-color: ${({ theme }) => theme.variableColors.secondaryBackground};
  border: var(--border-modal);
  border-radius: var(--border-radius);
  box-shadow: var(--review-modal-shadow);
  //   box-shadow: var(--task-modal-shadow);  for task modal

  @media screen and (min-width: 768px) {
    max-width: 468px;
    min-height: 299px;
    padding: 32px;

    // for task modal
    // max-width: 396px;
    // min-height: 360px;
    // padding: 28px;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.variableColors.secondaryBackground};
`;

export const CloseSvg = styled(IoMdClose)`
  width: 24px;
  height: 24px;
  fill: ${({ theme }) => theme.variableColors.text};

  &:hover,
  &:focus {
    fill: var(--accent-text-color);
  }
`;
