import { TaskForm } from "../TaskForm/TaskForm";

export const TaskModal = ({ status, handleCloseModal, ...props }) => {
  return <TaskForm status={status} onClose={handleCloseModal} {...props} />;
};
