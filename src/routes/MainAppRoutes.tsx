import { Route, Routes } from "react-router-dom";
// Import your page components here
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Documentation from "../pages/Documentation";
import Playground from "../pages/Playground";
import Components from "../pages/Components";

export default function MainAppRoutes() {
  return (
    <Routes>
      {/* Manual Route Overrides */}
      <Route path="/" element={<Home />} />
      <Route path="/docs" element={<Documentation />} />
      <Route path="/playground" element={<Playground />} />
      <Route path="/components" element={<Components />} />
      <Route path="/docs" element={<Documentation />} />

      {/* 404 Catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
