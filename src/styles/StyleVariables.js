import { createGlobalStyle } from "styled-components";

export const StyleVariables = createGlobalStyle`
:root {
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
  --active-arrow-color: #dce3e5;

  /* calendar */
  --priority-low-bg-color: #72C2F8;
  --priority-medium-bg-color: #F3B249;
  --priority-high-bg-color: #EA3D65;
  --active-toggle-bg-color: #cae8ff; 
  --inactive-toggle-bg-color: #e3f3ff; // not active state of toggle (month/day)
  --hover-toggle-bg-color: rgba(202, 232, 255, 0.7);

  /* tasks */
  --task-priority-low-color: #72c2f8;
  --task-priority-medium-color: #f3b249;
  --task-priority-high-color: #ea3d65;
  --task-input-bg-color: #f6f6f6;
  --task-btn-cancel-bg-color: #efefef;

  /* account */
  --avatar-fill-color: rgba(62, 133, 243, 0.18);
  --avatar-bg-color: #f8f8f8;

  /* statistics */
  --gradient-chart-by-day: linear-gradient(0deg, #ffd2dd 0%, rgba(255, 210, 221, 0) 96.87%);
  --gradient-chart-by-month: linear-gradient(0deg, #3e85f3 0%, rgba(62, 133, 243, 0) 100%);
  --chart-bar-indicator-by-day-color: #ffd2dd;
  --chart-bar-indicator-by-month-color: #3e85f3;
  --chart-bar-line-color: 1px solid #e3f3ff;

  /* review */
  --chosen-star-fill-color: #ffac33;
  --not-chosen-star-fill-color: #cec9c1;

  /* scroll */
  --scrollbar-color: #e7e5e5;
  --scrollbar-bg-color: #f2f2f2;

  /* shadows */
  --shadow-logout-btn: 4px 2px 16px rgba(136, 165, 191, 0.48);
  --shadow-logout-btn-hover: 4px 2px 16px rgba(136, 165, 191, 1);
  --logo-text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  --task-modal-shadow: 0px 4px 16px 0px #1111111a;
  --review-modal-shadow: 0px 4px 57px 0px #1111110d;

  /* animations */
  --animation: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-duration: 250ms;

  /* borders */
  --border-radius: 8px;
  --border: 1px solid rgba(220, 227, 229, 0.8);
  --border-auth: 1px solid rgba(220, 227, 229, 0.6);
  --border-auth-error: 1px solid #e74a3b;
  --border-auth-correct: 1px solid #3cbc81;--border-calendar: 1px solid #dce3e5cc;
  --border-toggle: 1px solid #3e85f333;
  --border-add-task-btn: 1px dashed #3e85f3;
  --border-input: 1px solid rgba(17, 17, 17, 0.15); // in normal state
  --border-input-hover: 1px solid #111111;
  --border-modal: 1px solid #dce3e5cc;
  --border-pagination: 1px solid #dce3e5cc;
  --border-big-avatar: 2px solid #3e85f3;
  --border-small-avatar: 1.8px solid #3e85f3;

  /* dark theme */   
  --primary-bg-color-dark-theme: #171820; // dark gray
  --secondary-bg-color-dark-theme: #21222c; // lighter gray
  --sidebar-bg-color-dark-theme: #13151a; // darkest, almost black
  --cancel-btn-bg-color-dark-theme: #21222c;

  --primary-text-color-dark-theme: #ffffff;
  --secondary-text-color-dark-theme: rgba(250, 250, 250, 0.3);

  --border-dark-theme: 1px solid rgba(255, 255, 255, 0.15);
  --border-modal-dark-theme: 1px solid rgba(220, 227, 229, 0.8);
  --border-pagination-dark-theme: 1px solid rgba(255, 255, 255, 0.15);
  --border-calendar-dark-theme: 1px solid rgba(255, 255, 255, 0.15);
  --border-add-task-btn-dark-theme: 1px solid transparent;

  --avatar-fill-color-dark-theme: #ffffff2e;
  --avatar-bg-color-dark-theme: #171820;

  --active-toggle-bg-color-dark-theme: #3e85f3; 
  --inactive-toggle-bg-color-dark-theme: #e3f3ff; 
  --hover-toggle-bg-color-dark-theme: rgba(202, 232, 255, 0.7);
  --pagination-arrow-color-enabled-dark-theme: rgba(255, 255, 255, 0.15);
  --pagination-arrow-color-disabled-dark-theme: #ffffff;

  --chart-bar-line-color-dark-theme: 1px solid #e3f3ff26

  --task-input-bg-color-dark-theme: transparent;
  --scrollbar-color-dark-theme: #171820;
  --scrollbar-bg-color-dark-theme: #2d3037;

  --chosen-star-fill-color-dark-theme: #ffac33;
  --not-chosen-star-fill-color-dark-theme: #353647;
}
`;
