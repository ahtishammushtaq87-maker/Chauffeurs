import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Header from "./Header";
import Footer from "./Footer";
import CallNowButton from "./CallNowButton";
import SeoManager from "./SeoManager";
import CookieConsent from "./CookieConsent";
import { SiteSettingsProvider } from "../context/SiteSettingsContext";

export default function Layout() {
  return (
    <SiteSettingsProvider>
      <SeoManager />
      <TopBar />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CallNowButton />
      <CookieConsent />
    </SiteSettingsProvider>
  );
}
