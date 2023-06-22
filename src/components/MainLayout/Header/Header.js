import React, { useState } from "react";
import AddFeedbackBtn from "./AddFeedbackBtn";
import ThemeToggler from "./ThemeToggler";
import UserInfo from "./UserInfo";
import AddFeedbackModal from "./AddFeedbackModal";

export const Header = () => {
  const [activePage, setActivePage] = useState("User Profile");
  const hasUncompletedTasks = true; // Замените на логику определения наличия невыполненных задач

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  let pageTitle;
  switch (activePage) {
    case "My account":
      pageTitle = "User Profile";
      break;
    case "Calendar":
      pageTitle = "Calendar";
      break;
    case "Statistics":
      pageTitle = "Statistics";
      break;
    default:
      pageTitle = "User Profile";
  }

  return (
    <header>
      <nav>
        <button className="burger-menu-button">Burger Menu</button>
      </nav>
      <h1>{pageTitle}</h1>
      {activePage === "Calendar" && hasUncompletedTasks && (
        <div className="goose-message">Гусак с мотивационным сообщением</div>
      )}
      <div className="header-components">
        <AddFeedbackBtn />
        <ThemeToggler />
        <UserInfo />
        <AddFeedbackModal />
      </div>
    </header>
  );
};

export default Header;
