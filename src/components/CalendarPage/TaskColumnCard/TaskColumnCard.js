import {
  Container,
  TaskPriority,
  TaskTitle,
  Wrapper,
  TaskAvatarWrapper,
  Toolbar,
  SvgAvatar,
  AvatarImg
} from "./TaskColumnCard.styled";
import { TASK_PRIORITY } from "../../../constants/Priority";
import { Modal } from "components/SharedComponents/Modal/Modal";
import { useState } from "react";
import { TaskModal } from "components/SharedComponents/TaskModal/TaskModal";
import { useSelector } from 'react-redux';
import {selectUser } from 'redux/auth/selectrors';

  export const TaskColumnCard = ({
    title = "Lorem ipsum dolor sit amet consectetur ",
    priority = TASK_PRIORITY.low,
  }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const avatarUrl = useSelector(selectUser);

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
          {avatarUrl ? (
        <AvatarImg src={avatarUrl} alt="avatarUrl" />
          ) : (
            <SvgAvatar />
          )}
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
