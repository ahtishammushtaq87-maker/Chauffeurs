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
import FleetPage from "./pages/FleetPage";
import ServicesPage from "./pages/ServicesPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import FleetVehicleDetailPage from "./pages/FleetVehicleDetailPage";

import { AuthProvider } from "./admin/AuthContext";
import RequireAuth from "./admin/RequireAuth";
import AdminLayout from "./admin/AdminLayout";
import LoginPage from "./admin/pages/LoginPage";
import DashboardHome from "./admin/pages/DashboardHome";
import ServicesAdmin from "./admin/pages/ServicesAdmin";
import FleetAdmin from "./admin/pages/FleetAdmin";
import BlogAdmin from "./admin/pages/BlogAdmin";
import UsersAdmin from "./admin/pages/UsersAdmin";
import SeoAdmin from "./admin/pages/SeoAdmin";
import AppointmentsAdmin from "./admin/pages/AppointmentsAdmin";
import QuoteRequestsAdmin from "./admin/pages/QuoteRequestsAdmin";
import SettingsAdmin from "./admin/pages/SettingsAdmin";

// Pages with bespoke content; everything else in the nav renders GenericPage.
const dedicatedPages = {
  "/": <HomePage />,
  "/about": <AboutPage />,
  "/contact": <ContactPage />,
  "/fleet": <FleetPage />,
  "/services": <ServicesPage />,
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
  "/blog": <BlogPage />,
};

function App() {
  const routes = flattenNavRoutes();

  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          {routes.map((route) => {
            const element = dedicatedPages[route.path] || <GenericPage />;
            if (route.path === "/") {
              return <Route key={route.path} index element={element} />;
            }
            return <Route key={route.path} path={route.path} element={element} />;
          })}
          {/* Fallback routes for services/fleet items added via the dashboard. */}
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/fleet/:slug" element={<FleetVehicleDetailPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="*" element={<GenericPage />} />
        </Route>

        <Route path="/admin/login" element={<LoginPage />} />
        <Route
          path="/admin"
          element={
            <RequireAuth>
              <AdminLayout />
            </RequireAuth>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="services" element={<ServicesAdmin />} />
          <Route path="fleet" element={<FleetAdmin />} />
          <Route path="blog" element={<BlogAdmin />} />
          <Route path="seo" element={<SeoAdmin />} />
          <Route path="appointments" element={<AppointmentsAdmin />} />
          <Route path="quotes" element={<QuoteRequestsAdmin />} />
          <Route
            path="users"
            element={
              <RequireAuth roles={["admin"]}>
                <UsersAdmin />
              </RequireAuth>
            }
          />
          <Route
            path="settings"
            element={
              <RequireAuth roles={["admin"]}>
                <SettingsAdmin />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
