import PropTypes from "prop-types";
import {
  Container,
  TaskPriority,
  TaskTitle,
  Wrapper,
  TaskAvatarWrapper,
  Toolbar,
  SvgAvatar,
  AvatarImg,
} from "./TaskColumnCard.styled";
import { Modal } from "components/SharedComponents/Modal/Modal";
import { useState } from "react";
import { TaskModal } from "components/SharedComponents/TaskModal/TaskModal";
import { useSelector } from "react-redux";
import { selectUser } from "redux/auth/selectrors";

export const TaskColumnCard = ({ task }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector(selectUser);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };
  // <Truncate
  //   line={1}
  //   element="p"
  //   truncateText="..."
  //   text="This is the long text that needs to be truncated if it exceeds the container size."
  // />;
  return (
    <Container>
      <TaskTitle line={1} element="h4" truncateText="..." text={task.title} />
      <Wrapper>
        <Wrapper>
          <TaskAvatarWrapper>
            {user.imgURL ? (
              <AvatarImg src={user.imgURL} alt={user.username} />
            ) : (
              <SvgAvatar />
            )}
          </TaskAvatarWrapper>
          <TaskPriority priority={task.priority}>{task.priority}</TaskPriority>
        </Wrapper>
        <Toolbar toggleModal={toggleModal} task={task} />
        {isModalOpen && (
          <Modal onClose={toggleModal}>
            <TaskModal editMode={true} task={task} onClose={toggleModal} />
          </Modal>
        )}
      </Wrapper>
    </Container>
  );
};

TaskColumnCard.propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
    description: PropTypes.string,
    dueDate: PropTypes.string,
    assignee: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
