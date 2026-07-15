import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
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
      <WhatsAppButton />
      <CookieConsent />
    </SiteSettingsProvider>
  );
}
