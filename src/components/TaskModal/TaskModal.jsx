// import { Modal } from '../SharedComponents/Modal/Modal';
import { TaskForm } from '../TaskForm/TaskForm';

export const TaskModal = ({ status, handleCloseModal, ...props }) => {
  return (
    <TaskForm status={status}/>
  );
};

