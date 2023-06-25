import {
  ArrowSvg,
  Button,
  PencilSvg,
  TrashSvg,
  Wrapper,
} from "./TaskToolbar.styled";
// import PropTypes from "prop-types";

export const TaskToolbar = ({ toggleModal, onDelete }) => {
  return (
    <Wrapper>
      <li>
        <Button type="button">
          <ArrowSvg />
        </Button>
      </li>
      <li>
        <Button type="button" onClick={toggleModal}>
          <PencilSvg />
        </Button>
      </li>
      <li>
        <Button type="button" onClick={onDelete}>
          <TrashSvg />
        </Button>
      </li>
    </Wrapper>
  );
};

/* TaskToolbar.propTypes={}; */

// import { Modal } from "components/SharedComponents/Modal/Modal";
// import { useState } from "react";

//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const toggleModal = () => {
//     if (isModalOpen) {
//       setIsModalOpen(false);
//     } else {
//       setIsModalOpen(true);
//     }
//   };

//   return (
//     <>

//       <button type="button" onClick={toggleModal}>
//         Open modal
//       </button>
//       {isModalOpen && <Modal onClose={toggleModal} />}
//     </>
//   );
// }

// import { useDispatch } from "react-redux";
// import { deleteTask } from "redux/tasks/operations";

// const dispatch = useDispatch();

// const onDelete = () => dispatch(deleteTask(task.id));
