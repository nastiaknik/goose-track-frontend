import {
  Container,
  TaskPriority,
  TaskTitle,
  Wrapper,
  TaskAvatarWrapper,
  Toolbar,
  SvgAvatar,
} from "./TaskColumnCard.styled";
import { TASK_PRIORITY } from "../../../constants/Priority";
import { Modal } from "components/SharedComponents/Modal/Modal";
import { useState } from "react";
import { TaskModal } from "components/SharedComponents/TaskModal/TaskModal";

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
            <SvgAvatar />
          </TaskAvatarWrapper>
          <TaskPriority priority={priority}>{priority}</TaskPriority>
        </Wrapper>
        <Toolbar toggleModal={toggleModal} />
        {isModalOpen && (
          <Modal onClose={toggleModal}>
            <TaskModal editMode={true} />
          </Modal>
        )}
      </Wrapper>
    </Container>
  );
};
