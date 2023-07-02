import { TaskForm } from "../TaskForm/TaskForm";

export const TaskModal = ({ onClose, task, status, ...props }) => {
  return <TaskForm onClose={onClose} task={task} status={status} {...props} />;
};
