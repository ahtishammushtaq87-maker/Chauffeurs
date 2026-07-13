import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { flattenNavRoutes } from "./data/content";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PromPage from "./pages/PromPage";
import AirportPage from "./pages/AirportPage";
import BirthdayPage from "./pages/BirthdayPage";
import BlackCarPage from "./pages/BlackCarPage";
import ConcertPage from "./pages/ConcertPage";
import ExecutivePage from "./pages/ExecutivePage";
import WeddingPage from "./pages/WeddingPage";
import LuxurySedanPage from "./pages/LuxurySedanPage";
import ExecutiveSuvPage from "./pages/ExecutiveSuvPage";
import MotorCoachPage from "./pages/MotorCoachPage";
import PartyBusPage from "./pages/PartyBusPage";
import SprinterVanPage from "./pages/SprinterVanPage";
import StretchLimoPage from "./pages/StretchLimoPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsPage from "./pages/TermsPage";
import GenericPage from "./pages/GenericPage";

// Pages with bespoke content; everything else in the nav renders GenericPage.
const dedicatedPages = {
  "/": <HomePage />,
  "/about": <AboutPage />,
  "/contact": <ContactPage />,
  "/services/prom": <PromPage />,
  "/services/airport": <AirportPage />,
  "/services/birthday": <BirthdayPage />,
  "/services/black-car": <BlackCarPage />,
  "/services/concert": <ConcertPage />,
  "/services/executive": <ExecutivePage />,
  "/services/wedding": <WeddingPage />,
  "/fleet/luxury-sedan": <LuxurySedanPage />,
  "/fleet/executive-suv": <ExecutiveSuvPage />,
  "/fleet/motor-coach": <MotorCoachPage />,
  "/fleet/party-bus": <PartyBusPage />,
  "/fleet/sprinter-van": <SprinterVanPage />,
  "/fleet/stretch-limousine": <StretchLimoPage />,
  "/privacy-policy": <PrivacyPolicyPage />,
  "/terms": <TermsPage />,
};

function App() {
  const routes = flattenNavRoutes();

  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map((route) => {
          const element = dedicatedPages[route.path] || <GenericPage />;
          if (route.path === "/") {
            return <Route key={route.path} index element={element} />;
          }
          return <Route key={route.path} path={route.path} element={element} />;
        })}
        <Route path="*" element={<GenericPage />} />
      </Route>
    </Routes>
  );
}

export default App;
