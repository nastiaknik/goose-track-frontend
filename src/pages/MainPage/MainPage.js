import { AuthSection } from "components/MainPage/AuthSection/AuthSection";
import { Description } from "components/MainPage/Description/Description";
import { ReviewsSlider } from "components/MainPage/ReviewsSlider/ReviewsSlider";
import { ScrollUp } from "components/ScrollUp/ScrollUp";

function MainPage() {
  return (
    <>
      <AuthSection />
      <Description />
      <ReviewsSlider />
      <ScrollUp />
    </>
  );
}

export default MainPage;
