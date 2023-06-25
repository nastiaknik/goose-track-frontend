import { AuthSection } from "components/MainPage/AuthSection/AuthSection";
import { Description } from "components/MainPage/Description/Description";
import { ReviewsSlider } from "components/MainPage/ReviewsSlider/ReviewsSlider";

import { TaskToolbar } from "components/CalendarPage/TaskToolbar/TaskToolbar";

function MainPage() {
  return (
    <>
      <AuthSection />
      <Description />
      <ReviewsSlider />

      <TaskToolbar />
    </>
  );
}

export default MainPage;
