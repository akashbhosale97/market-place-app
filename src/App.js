import { Routes, Route } from "react-router-dom";
import Btn from "./Btn";
import Input from "./Input";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  console.log(location);

  return (
    <Routes>
      <Route path="/" element={<Btn />} />
      <Route path="/config" element={<Input />} />
    </Routes>
  );
}

export default App;
