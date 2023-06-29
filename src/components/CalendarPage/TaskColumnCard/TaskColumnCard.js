import {
  Container,
  TaskPriority,
  TaskTitle,
  Wrapper,
  TaskAvatarWrapper,
  Toolbar,
} from "./TaskColumnCard.styled";
import { TASK_PRIORITY } from "../../../constants/Priority";
import { RxAvatar } from "react-icons/rx";
import { Modal } from "components/SharedComponents/Modal/Modal";
import { useState } from "react";

export const TaskColumnCard = ({
  title = "Lorem ipsum dolor sit amet consectetur ",
  priority = TASK_PRIORITY.low,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <Container>
      <TaskTitle>{title}</TaskTitle>
      <Wrapper>
        <Wrapper>
          <TaskAvatarWrapper>
            <RxAvatar />
          </TaskAvatarWrapper>
          <TaskPriority priority={priority}>{priority}</TaskPriority>
        </Wrapper>

        <Toolbar toggleModal={toggleModal} />
        {isModalOpen && <Modal onClose={toggleModal} />}
      </Wrapper>
    </Container>
  );
};
