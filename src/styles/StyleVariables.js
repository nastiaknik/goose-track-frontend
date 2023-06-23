import { createGlobalStyle } from "styled-components";

export const StyleVariables = createGlobalStyle`
:root {
  /* breakpoints */
  --mobile: 375px;
  --tablet: 768px;
  --desktop: 1440px;

  /* fonts */
  --primary-font: 'Inter', sans-serif;
  --secondary-font: 'Poppins', sans-serif;
  --logo-font: 'Coolvetica', sans-serif;

  /* background colors */
  --primary-bg-color: #ffffff;
  --secondary-bg-color: #f7f6f9;
  --accent-bg-color: #3e85f3;
  --auth-bg-color: #dcebf7; 
  --highlight-text-bg-color: #dcebf7; // highlighted text on main page
  --active-nav-bg-color: #e3f3ff; 
  --hover-nav-bg-color: #f5fbff; // hovered nav item on side bar
  
  --light-btn-bg-color: #e3f3ff; // in normal state
  --accent-btn-bg-color: #3e85f3; 
  --hover-btn-bg-color: #2b78ef;
  --cancel-btn-bg-color: #e5edfa;
  --hover-cancel-btn-bg-color: #cddaee;
  --delete-review-btn-bg-color: rgba(234, 61, 101, 0.2);
  --hover-delete-review-btn-bg-color: rgba(234, 61, 101, 0.8);

  /* text-colors */
  --primary-text-color: #111111;
  --secondary-text-color: #343434;
  --accent-text-color: #3e85f3;
  --light-text-color: #ffffff;
  --inactive-nav-text-color: rgba(52, 52, 52, 0.5); // on side bar
  --auth-placeholder-color: #dce3e5;
  --error-text-color: #da1414;
  --correct-text-color: #3cbc81;
  --heading-text-color: #171820; // main page headings
  --description-text-color: rgba(17, 17, 17, 0.9); // main page description
  --review-text-color: rgba(17, 17, 17, 0.7);
  --label-text-color:  rgba(52, 52, 52, 0.8);

  /* calendar */
  --priority-low-bg-color: #ceeefd;
  --priority-medium-bg-color: #fcf0d4;
  --priority-high-bg-color: #ffd2dd;
  --active-toggle-bg-color: #cae8ff; 
  --inactive-toggle-bg-color: #e3f3ff; // not active state of toggle (month/day)
  --hover-toggle-bg-color: rgba(202, 232, 255, 0.7);

  /* tasks */
  --task-priority-low-color: #72c2f8;
  --task-priority-medium-color: #f3b249;
  --task-priority-high-color: #ea3d65;
  --task-input-bg-color: #f6f6f6;
  --task-btn-cancel-bg-color: #efefef;

  /* avatar */
  --avatar-fill-color: rgba(62, 133, 243, 0.18);
  --avatar-bg-color: #f8f8f8;

  /* scroll */
  --scrollbar-color: #e7e5e5;
  --scrollbar-bg-color: #f2f2f2;

  /* shadows */
  --shadow-logout-btn: 4px 2px 16px rgba(136, 165, 191, 0.48);
  --shadow-logout-btn-hover: 4px 2px 16px rgba(136, 165, 191, 1);
  --logo-text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  --task-modal-shadow: 0px 4px 16px 0px #1111111A;;
  --review-modal-shadow: 0px 4px 57px 0px #1111110D;

  /* animations */
  --animation: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-duration: 250ms;

  /* borders */
  --border: 1px solid rgba(220, 227, 229, 0.8);
  --border-auth: 1px solid rgba(220, 227, 229, 0.6);
  --border-auth-error: 1px solid #e74a3b;
  --border-auth-correct: 1px solid #3cbc81;--border-calendar: 1px solid #dce3e5cc;
  --border-toggle: 1px solid #3e85f333;
  --border-add-task-btn: 1px dashed #3e85f3;
  --border-input: 1px solid rgba(17, 17, 17, 0.15); // in normal state
  --border-input-hover: 1px solid #111111;
  --border-modal: 1px solid #dce3e5cc;
}
`;
