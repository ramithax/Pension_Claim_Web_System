import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";

import { Homepage } from "./pages/client/Homepage"
import { About } from "./pages/client/About"
import { ClaimType } from "./pages/client/ClaimType";
import { Eligibility } from "./pages/client/Eligibility";
import { Documents } from "./pages/client/Documents";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<PublicLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/claim-type" element={<ClaimType />} />
          <Route path="/eligibility" element={<Eligibility />} />
          <Route path="/documents" element={<Documents />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;