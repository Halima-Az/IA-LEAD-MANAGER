import AddLead from "./pages/AddLead";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/addLead" element={<AddLead />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;