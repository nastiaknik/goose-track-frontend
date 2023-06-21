import "modern-normalize";
import { GlobalStyles } from "./components/GlobalStyles";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChoosedMonth } from "./components/ChoosedMonth/ChoosedMonth";
import { ChoosedDay } from "./components/ChoosedDay/ChoosedDay";

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
  return (
    <>
      <GlobalStyles />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/calendar"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/calendar"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/calendar"
            element={
              <PrivateRoute redirectTo="/login" component={<CalendarPage />} />
            }
          >
            <Route path="month/:currentDate" element={<ChoosedMonth />} />
            <Route path="day/:currentDay" element={<ChoosedDay />} />
          </Route>
          <Route
            path="account"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <AccountPage />
              </Suspense>
            }
          />
          <Route
            path="/statistics"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={<StatisticsPage />}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
