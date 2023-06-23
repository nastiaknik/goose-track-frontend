import { AuthSection } from "components/MainPage/AuthSection/AuthSection";
import { Description } from "components/MainPage/Description/Description";
import { ReviewsSlider } from "components/MainPage/ReviewsSlider/ReviewsSlider";

function MainPage() {
  return (
    <>
      <AuthSection />
      <Description />
      <ReviewsSlider />
    </>
  );
}

export default MainPage;
