import "modern-normalize";
import { GlobalStyles } from "./styles/GlobalStyles";
import { StyleVariables } from "./styles/StyleVariables";
import { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChoosedMonth } from "./components/CalendarPage/ChoosedMonth/ChoosedMonth";
import { ChoosedDay } from "./components/CalendarPage/ChoosedDay/ChoosedDay";

import { useDispatch } from "react-redux";
import { refresh } from "redux/auth/operations";
import { GusLoader } from "components/Loader/GusLoader";

const MainPage = lazy(() => import("pages/MainPage/MainPage"));
const LoginPage = lazy(() => import("pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("pages/RegisterPage/RegisterPage"));
const AccountPage = lazy(() => import("pages/AccountPage/AccountPage"));
const CalendarPage = lazy(() => import("pages/CalendarPage/CalendarPage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage/NotFoundPage"));
const StatisticsPage = lazy(() =>
  import("pages/StatisticsPage/StatisticsPage")
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />
      <StyleVariables />
      <Suspense fallback={<GusLoader />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/calendar" element={<CalendarPage />}>
            <Route path="month/:currentDate" element={<ChoosedMonth />} />
            <Route path="day/:currentDay" element={<ChoosedDay />} />
          </Route>
          <Route
            path="/account"
            element={
              <Suspense fallback={<GusLoader />}>
                <AccountPage />
              </Suspense>
            }
          />
          <Route path="/statistics" element={<StatisticsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
