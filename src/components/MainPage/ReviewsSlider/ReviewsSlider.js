import { useCallback, useRef } from "react";

// Redux
import { selectReviews } from "redux/reviews/selectors";
import { useSelector, useDispatch } from "react-redux";
import { getReviews } from "redux/reviews/operations";
import { useEffect } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/virtual";

// Icons
import { ReactComponent as LeftArrow } from "assets/images/landing/icons/leftArrow.svg";
import { ReactComponent as RightArrow } from "assets/images/landing/icons/rightArrow.svg";
import { LuUser } from "react-icons/lu";

// Styles
import {
  Container,
  StyledH2,
  StyledNavigationContainer,
  StyledBtnContainer,
  CardContainer,
  TopCardContent,
  NameCardContentContainer,
  ImgThumbCard,
  NameCard,
  CardText,
  StyledSwiperContainer,
} from "./ReviewsSlider.styled";

// Rating
import { Rating, ThinRoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const customStyles = {
  itemShapes: ThinRoundedStar,
  activeFillColor: "#FFAC33",
  inactiveFillColor: "#CEC9C1",
};

export const ReviewsSlider = () => {
  // Reviews
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);

  useEffect(() => {
    dispatch(getReviews());
    window.scrollTo(0, 16000);
  }, [dispatch]);

  // Swiper
  const swiperRef = useRef(null);
  SwiperCore.use([Autoplay]);

  const prevSlide = useCallback(() => {
    swiperRef.current?.swiper.slidePrev();
  }, [swiperRef]);

  const nextSlide = useCallback(() => {
    swiperRef.current?.swiper.slideNext();
  }, [swiperRef]);

  return (
    <Container>
      <StyledH2>Reviews</StyledH2>
      <StyledSwiperContainer>
        <Swiper
          autoHeight={true}
          ref={swiperRef}
          autoplay={{ delay: 7000 }}
          spaceBetween={24}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            1024: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
        >
          {reviews.length !== 0 &&
            reviews.map((slide, index) => (
              <SwiperSlide key={slide.owner._id} virtualIndex={index}>
                <CardContainer>
                  <TopCardContent>
                    <ImgThumbCard>
                      <LuUser size={18} color="rgba(62, 133, 243, .18)" />
                      {/* <img src={"#"} alt={`${slide.owner.username} avatar`} /> */}
                    </ImgThumbCard>
                    <NameCardContentContainer>
                      <NameCard>{slide.owner.username}</NameCard>
                      <div>
                        <Rating
                          value={slide.rating}
                          style={{ maxWidth: 110, gap: 5 }}
                          itemStyles={customStyles}
                          readOnly
                        />
                      </div>
                    </NameCardContentContainer>
                  </TopCardContent>
                  <CardText>{slide.comment}</CardText>
                </CardContainer>
              </SwiperSlide>
            ))}
          <StyledNavigationContainer className="swiper-nav-btns">
            <StyledBtnContainer onClick={prevSlide}>
              <LeftArrow />
            </StyledBtnContainer>
            <StyledBtnContainer onClick={nextSlide}>
              <RightArrow />
            </StyledBtnContainer>
          </StyledNavigationContainer>
        </Swiper>
      </StyledSwiperContainer>
    </Container>
  );
};
