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
import { Draggable } from "react-beautiful-dnd";
import { useTranslation } from "react-i18next";

export const TaskColumnCard = ({ task, index }) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const user = useSelector(selectUser);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <Draggable
      draggableId={`card-${task._id}`}
      index={index}
      key={task._id}
      type="TASK"
    >
      {(provided) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <TaskTitle
            line={1}
            element="h4"
            truncateText="..."
            text={task.title}
          />
          <Wrapper>
            <Wrapper>
              <TaskAvatarWrapper>
                {user.imgURL ? (
                  <AvatarImg src={user.imgURL} alt={user.username} />
                ) : (
                  <SvgAvatar />
                )}
              </TaskAvatarWrapper>
              <TaskPriority priority={task.priority}>
                {t(task.priority)}
              </TaskPriority>
            </Wrapper>
            <Toolbar toggleModal={toggleModal} task={task} />
            {isModalOpen && (
              <Modal onClose={toggleModal}>
                <TaskModal editMode={true} task={task} onClose={toggleModal} />
              </Modal>
            )}
          </Wrapper>
        </Container>
      )}
    </Draggable>
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
  index: PropTypes.number.isRequired,
};
