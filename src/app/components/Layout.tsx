import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { LanguageProvider } from "../context/LanguageContext";
import { ChatBot } from "./ChatBot";

export function Layout() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        <Navigation />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <ChatBot />
      </div>
    </LanguageProvider>
  );
}
