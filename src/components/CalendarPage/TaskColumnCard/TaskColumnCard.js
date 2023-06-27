import {
  Container,
  TaskPriority,
  TaskTitle,
  Wrapper,
  TaskAvatarWrapper,
} from "./TaskColumnCard.styled";
import { TASK_PRIORITY } from "../../../constants/Priority";
import { RxAvatar } from "react-icons/rx";

// import { TaskToolbar } from "components/CalendarPage/TaskToolbar/TaskToolbar";
import { Toolbar } from "./TaskColumnCard.styled";
import { Menu } from "components/CalendarPage/TaskToolbar/Menu";
import { Modal } from "components/SharedComponents/Modal/Modal";
import { useState } from "react";

export const TaskColumnCard = ({
  title = "Lorem ipsum dolor sit amet consectetur ",
  priority = TASK_PRIORITY.low,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    if (isModalOpen) {
      setIsModalOpen(false);
    } else {
      setIsModalOpen(true);
    }
  };

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
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

        <Toolbar toggleMenu={toggleMenu} toggleModal={toggleModal} />
        {isMenuOpen && <Menu toggleMenu={toggleMenu} />}
        {isModalOpen && <Modal onClose={toggleModal} />}
      </Wrapper>
    </Container>
  );
};
