import { useRef, useState } from "react";

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
  const swiperRef = useRef(null);
  const disbleBtnStyle = { opacity: 0.4, pointerEvents: "none" };
  const activeBtnStyle = { opacity: 1, pointerEvents: "auto" };
  const [prevBtnIsActive, setPrevBtnIsActive] = useState(false);
  const [nextBtnIsActive, setNextBtnIsActive] = useState(true);

  // Reviews
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  // Swiper
  SwiperCore.use([Autoplay]);

  const prevSlide = () => {
    setNextBtnIsActive(true);
    if (!swiperRef.current?.swiper.isBeginning) {
      setPrevBtnIsActive(true);
      swiperRef.current?.swiper.slidePrev();
    } else {
      setPrevBtnIsActive(false);
    }
  };

  const nextSlide = () => {
    setPrevBtnIsActive(true);
    if (!swiperRef.current?.swiper.isEnd) {
      setNextBtnIsActive(true);
      swiperRef.current?.swiper.slideNext();
    } else {
      setNextBtnIsActive(false);
    }
  };
  if (reviews.length > 2) {
    setTimeout(() => setPrevBtnIsActive(true), 7000);
  }

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
              <SwiperSlide
                key={slide?.owner?._id || index}
                virtualIndex={index}
              >
                <CardContainer>
                  <TopCardContent>
                    <ImgThumbCard>
                      <LuUser size={18} color="rgba(62, 133, 243, .18)" />
                      {/* <img src={"#"} alt={`${slide.owner.username} avatar`} /> */}
                    </ImgThumbCard>
                    <NameCardContentContainer>
                      <NameCard>
                        {slide?.owner?.username || "Username"}
                      </NameCard>
                      <div>
                        <Rating
                          value={slide?.rating || 5}
                          style={{ maxWidth: 110, gap: 5 }}
                          itemStyles={customStyles}
                          readOnly
                        />
                      </div>
                    </NameCardContentContainer>
                  </TopCardContent>
                  <CardText>{slide?.comment || "User description"}</CardText>
                </CardContainer>
              </SwiperSlide>
            ))}
          <StyledNavigationContainer className="swiper-nav-btns">
            <StyledBtnContainer
              onClick={prevSlide}
              style={prevBtnIsActive ? activeBtnStyle : disbleBtnStyle}
            >
              <LeftArrow />
            </StyledBtnContainer>
            <StyledBtnContainer
              onClick={nextSlide}
              style={nextBtnIsActive ? activeBtnStyle : disbleBtnStyle}
            >
              <RightArrow />
            </StyledBtnContainer>
          </StyledNavigationContainer>
        </Swiper>
      </StyledSwiperContainer>
    </Container>
  );
};
