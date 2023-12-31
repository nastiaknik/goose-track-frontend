import { format } from "date-fns";
import { useEffect, useState, Suspense } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import CalendarToolbar from "../../components/CalendarPage/CalendarToolbar/CalendarToolbar";
import { useDate } from "hooks/useDate";
import { Container } from "./CalendarPage.styled";

const CalendarPage = () => {
  const [isActivePage, setIsActivePage] = useState(false);
  const navigate = useNavigate();
  const urlDate = useDate();
  const location = useLocation();
  const formattedCurrentDate = format(urlDate, "yyyy-MM");

  useEffect(() => {
    if (location.pathname === "/calendar") {
      navigate(`/calendar/month/${formattedCurrentDate}`);
      return;
    }
  }, [formattedCurrentDate, navigate, location.pathname]);

  const doActiveDate = () => {
    setIsActivePage(false);
  };
  const doActiveMonth = () => {
    setIsActivePage(true);
  };

  return (
    <Container>
      <CalendarToolbar
        isActivePage={isActivePage}
        doActiveMonth={doActiveMonth}
        doActiveDate={doActiveDate}
      />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default CalendarPage;
