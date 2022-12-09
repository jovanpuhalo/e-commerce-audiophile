import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  //skrolovanje na vrh
  useEffect(() => {
    window.history.scrollRestoration = "manual";

    window.scrollTo({ top: 0 });
  }, [pathname]);
}
