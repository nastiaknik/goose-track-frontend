import PropTypes from "prop-types";
import { useState } from "react";
import { ColumnHeadBar } from "../ColumnHeadBar/ColumnHeadBar";
import { ColumnsTasksList } from "./ColumnTaskList";
import { Container } from "./TaskColumn.styled";
import { TaskModal } from "components/SharedComponents/TaskModal/TaskModal";
import { Modal } from "components/SharedComponents/Modal/Modal";
import { AddTaskBtn } from "../AddTaskBtn/AddTaskBtn";

export const TasksColumn = ({ status, filteredTasks }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const sortTasksByPriority = (tasks) => {
    const priorityOrder = {
      High: 0,
      Medium: 1,
      Low: 2,
    };

    return tasks.sort(
      (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
    );
  };

  const sortedTasks = sortTasksByPriority(filteredTasks);

  return (
    <>
      <Container>
        <ColumnHeadBar title={status.name} handleShowModal={handleShowModal} />
        <ColumnsTasksList status={status} filteredDayTasks={sortedTasks} />
        <AddTaskBtn onClick={handleShowModal} />
      </Container>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <TaskModal onClose={handleCloseModal} status={status.name} />
        </Modal>
      )}
    </>
  );
};

TasksColumn.propTypes = {
  status: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
