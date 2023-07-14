import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { StyledBtnUp } from "./ScrollUp.styled";

export const ScrollUp = () => {
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= window.innerHeight) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);

  const onClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    scrollTop && (
      <StyledBtnUp onClick={onClick}>
        <IoIosArrowUp size={36} />
      </StyledBtnUp>
    )
  );
};
