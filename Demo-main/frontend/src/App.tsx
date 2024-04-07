import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Layout from "./layouts/Layout";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Register";
import LandingPagePage from "./pages/Landing";
import { useAppContext } from "./contexts/AppContext";

// import MyHotels from "./pages/MyHotels";
import MyHotel from "./pages/MyHotel";

import AddHotel from "./pages/AddHotel";
import MyHotels from "./pages/MyHotels";

const App = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <p>
                <LandingPagePage />
              </p>
            </Layout>
          }
        />
        <Route
          path="/search"
          element={
            <Layout>
              <p>Search Page</p>
            </Layout>
          }
        />
        <Route
          path="/register"
          element={
            <Layout>
              <SignupPage />
            </Layout>
          }
        />

        <Route
          path="/login"
          element={
            <Layout>
              <LoginPage />
            </Layout>
          }
        />

        {/* Mới thêm vào */}
        {isLoggedIn && (
          <>
            {/* <Route
              path="/hotel/:hotelId/booking"
              element={
                <Layout>
                  <Booking />
                </Layout>
              }
            /> */}

            <Route
              path="/add-hotel"
              element={
                <Layout>
                  <AddHotel />
                </Layout>
              }
            />

            {/* <Route
              path="/edit-hotel/:hotelId"
              element={
                <Layout>
                  <EditHotel />
                </Layout>
              }
            /> */}

            <Route
              path="/my-hotel"
              element={
                <Layout>
                  <MyHotel />
                </Layout>
              }
            />
            <Route
              path="/my-hotels"
              element={
                <Layout>
                  <MyHotels />
                </Layout>
              }
            />

            {/* <Route
              path="/my-bookings"
              element={
                <Layout>
                  <MyBookings />
                </Layout>
              }
            /> */}
          </>
        )}
        {/* Mới thêm */}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
