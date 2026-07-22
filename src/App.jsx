import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import { flattenNavRoutes } from "./data/content";
import { LEGACY_REDIRECTS } from "./data/legacyRedirects";
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
import GdprCompliancePage from "./pages/GdprCompliancePage";
import GenericPage from "./pages/GenericPage";
import FleetPage from "./pages/FleetPage";
import ServicesPage from "./pages/ServicesPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailPage from "./pages/BlogDetailPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import FleetVehicleDetailPage from "./pages/FleetVehicleDetailPage";
import CityPage from "./pages/CityPage";

import FaviconManager from "./components/FaviconManager";
import ScrollToTop from "./components/ScrollToTop";
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
  "/about-us": <AboutPage />,
  "/contact": <ContactPage />,
  "/fleet": <FleetPage />,
  "/services": <ServicesPage />,
  "/limo-prom-rental": <PromPage />,
  "/car-service-nashville-airport": <AirportPage />,
  "/birthday-party-bus-rental": <BirthdayPage />,
  "/black-car-service": <BlackCarPage />,
  "/concert-transportation": <ConcertPage />,
  "/executive-chauffeur": <ExecutivePage />,
  "/wedding-limo-chauffeur": <WeddingPage />,
  "/black-mercedes-sedan-hire": <LuxurySedanPage />,
  "/luxury-suv-transportation-nashville": <ExecutiveSuvPage />,
  "/motor-coach-rental-nashville-tn": <MotorCoachPage />,
  "/party-bus-rental-nashville": <PartyBusPage />,
  "/luxury-sprinter-van-rental-nashville": <SprinterVanPage />,
  "/stretch-limousine-hire-nashville": <StretchLimoPage />,
  "/privacy-policy-swift-chauffeurs": <PrivacyPolicyPage />,
  "/terms-conditions": <TermsPage />,
  "/gdpr-compliance": <GdprCompliancePage />,
  "/blog": <BlogPage />,
  // Service Area landing pages (SEO-rich city content via CityPage).
  "/nashville": <CityPage />,
  "/service-area/chattanooga": <CityPage />,
  "/brentwood": <CityPage />,
  "/limo-service-in-franklin-tn": <CityPage />,
  "/murfreesboro-limousine-service": <CityPage />,
  "/service-area/clarksville": <CityPage />,
  "/spring-hill": <CityPage />,
  // Chattanooga & Clarksville sub-dropdown pages.
  "/chattanooga/birthday-party-bus": <CityPage />,
  "/chattanooga/car-service-to-cha": <CityPage />,
  "/chattanooga/prom-limo-rental": <CityPage />,
  "/chattanooga/wedding-chauffeur-service": <CityPage />,
  "/services/airport-shuttle": <CityPage />,
  "/clarksville/shuttle-to-nashville-airport": <CityPage />,
};

function App() {
  const routes = flattenNavRoutes();

  return (
    <AuthProvider>
      <FaviconManager />
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          {routes.map((route) => {
            const element = dedicatedPages[route.path] || <GenericPage />;
            if (route.path === "/") {
              return <Route key={route.path} index element={element} />;
            }
            return <Route key={route.path} path={route.path} element={element} />;
          })}
          {/* Retired URLs. Production serves 301s from vercel.json; these keep
              in-app links and local dev working, and must stay above the
              /services|/fleet/:slug fallbacks so old paths redirect instead of
              rendering an empty detail page. */}
          {Object.entries(LEGACY_REDIRECTS).map(([oldPath, newPath]) => (
            <Route key={oldPath} path={oldPath} element={<Navigate to={newPath} replace />} />
          ))}
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
