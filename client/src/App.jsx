import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";

import { Homepage } from "./pages/client/Homepage"
import { About } from "./pages/client/About"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<PublicLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;