import { CalendarHead } from "../../components/CalendarPage/CalendarTable/CalendarTable";

import { TaskToolbar } from "components/CalendarPage/TaskToolbar/TaskToolbar";
import { Menu } from "components/CalendarPage/TaskToolbar/Menu";
import { Modal } from "components/SharedComponents/Modal/Modal";
import { useState } from "react";

function CalendarPage() {
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
    <>
      <CalendarHead />
      <TaskToolbar toggleMenu={toggleMenu} toggleModal={toggleModal} />
      {isMenuOpen && <Menu toggleMenu={toggleMenu} />}
      {isModalOpen && <Modal onClose={toggleModal} />}
    </>
  );
}

export default CalendarPage;
