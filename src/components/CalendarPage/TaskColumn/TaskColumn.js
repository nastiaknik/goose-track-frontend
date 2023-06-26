import { useState } from 'react';
import { ColumnHeadBar } from '../ColumnHeadBar/ColumnHeadBar';
import { ColumnsTasksList } from './ColumnTaskList';
import { Container } from './TaskColumn.styled';
import { TaskModal } from '../../TaskModal/TaskModal';
import {Modal} from "../../SharedComponents/Modal/Modal";
import { AddTaskBtn } from '../AddTaskBtn/AddTaskBtn';

export const TasksColumn = ({ status = "In progress" }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Container>
        <ColumnHeadBar title={status?.name} handleShowModal={handleShowModal} />
        <ColumnsTasksList status={status} />
        <AddTaskBtn onClick={handleShowModal} />
      </Container>
      {showModal &&
      <Modal onClose={handleCloseModal}> 
      <TaskModal 
        handleCloseModal={handleCloseModal} 
        status={status?.name} 
      /> 
  </Modal> 
    } 
</> 
); 
};