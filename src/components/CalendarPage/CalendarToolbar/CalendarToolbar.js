import { useLocation } from "react-router-dom";
// import { PeriodPaginator } from "../PeriodPaginator/PeriodPaginator";
import { PeriodTypeSelect } from "../PeriodTypeSelect/PeriodTypeSelect";
import { Wrapper } from "./CalendarToolbar.styled";

const CalendarToolbar = () => {
  const location = useLocation();

  const activePage = (arr) => {
    let active;
    arr.map((page) => {
      if (location.pathname.includes(page)) {
        active = page;
      }
      return active;
    });

    return active;
  };

  const pages = ["month", "day"];

  return (
    <Wrapper>
      {/* <PeriodPaginator activePage={activePage(pages)} /> */}
      <PeriodTypeSelect activePage={activePage(pages)} />
    </Wrapper>
  );
};

export default CalendarToolbar;
