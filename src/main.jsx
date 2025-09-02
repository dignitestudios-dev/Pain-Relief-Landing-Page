import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { ToasterContainer } from "./components/global/Toaster.jsx";
import { AppContextProvider } from "./context/AppContext.jsx";
import "swiper/css";
import "swiper/css/navigation";
import ScrollToTop from "./components/global/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div>App is under construction</div>
    {/* <BrowserRouter>
      <AppContextProvider>
        <ToasterContainer />
        <ScrollToTop />
        <App />
      </AppContextProvider>
    </BrowserRouter> */}
  </StrictMode>
);
