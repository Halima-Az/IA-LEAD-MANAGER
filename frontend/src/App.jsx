import Header from "./componnents/Header";
import AddLead from "./pages/AddLead";
import Dashboard from "./pages/Dashboard";
import EditLead from "./pages/EditLead"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/addLead" element={<AddLead />} />
        <Route path="/editLead/:id" element={< EditLead/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
