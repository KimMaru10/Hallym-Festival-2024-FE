import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import HallymFestival from "./pages/HallymFestival/HallymFestival.jsx";
import Info from "./pages/Info/Info.jsx";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/hallymfestival" element={<HallymFestival />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
};

export default App;
