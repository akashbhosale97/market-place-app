import { Routes, Route } from "react-router-dom";
import Btn from "./Btn";
import Input from "./Input";
import { useLocation } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/field-extension" element={<Btn />} />
      <Route path="/config" element={<Input />} />
    </Routes>
  );
}

export default App;
