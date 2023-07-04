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
  StyledBtn,
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
const p = "This is an awesome app! Thanks for all the GooseTrack Serv";
console.log(p.length);

export const ReviewsSlider = () => {
  const swiperRef = useRef(null);

  // Reviews
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);

  const [prevBtnDisable, setPrevBtnDisable] = useState(true);
  const [nextBtnDisable, setNextBtnDisable] = useState(false);

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  // Swiper
  SwiperCore.use([Autoplay]);

  const prevSlide = () => {
    if (!swiperRef.current?.swiper.isBeginning) {
      swiperRef.current?.swiper.slidePrev();
    }
  };

  const nextSlide = () => {
    if (!swiperRef.current?.swiper.isEnd) {
      swiperRef.current?.swiper.slideNext();
    }
  };

  swiperRef.current?.swiper.on("slideChange", () => {
    swiperRef.current?.swiper.isBeginning
      ? setPrevBtnDisable(true)
      : setPrevBtnDisable(false);
    swiperRef.current?.swiper.isEnd
      ? setNextBtnDisable(true)
      : setNextBtnDisable(false);
  });

  return (
    <Container>
      <StyledH2>Reviews</StyledH2>
      <StyledSwiperContainer>
        <Swiper
          autoHeight={true}
          ref={swiperRef}
          autoplay={{ delay: 7000 }}
          spaceBetween={24}
          grabCursor={true}
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
                    <ImgThumbCard
                      style={slide.owner?.imgURL && { border: "none" }}
                    >
                      {slide.owner?.imgURL ? (
                        <img
                          src={`${slide.owner.imgURL}`}
                          alt={`${slide.owner?.username} avatar`}
                        />
                      ) : (
                        <LuUser size={18} color="rgba(62, 133, 243, .18)" />
                      )}
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
                  {/* <CardText>{slide?.comment || "Stand with Ukraine"}</CardText> */}
                  <CardText title={slide?.comment}>
                    {slide?.comment.length > 58
                      ? `${slide?.comment.slice(0, 59)}...`
                      : slide?.comment}
                  </CardText>
                </CardContainer>
              </SwiperSlide>
            ))}
          <StyledNavigationContainer className="swiper-nav-btns">
            <StyledBtn onClick={prevSlide} disabled={prevBtnDisable}>
              <LeftArrow />
            </StyledBtn>
            <StyledBtn onClick={nextSlide} disabled={nextBtnDisable}>
              <RightArrow />
            </StyledBtn>
          </StyledNavigationContainer>
        </Swiper>
      </StyledSwiperContainer>
    </Container>
  );
};
