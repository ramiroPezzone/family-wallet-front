import { BrowserRouter, Routes, Route } from "react-router-dom";
import Config from "../components/js/Config";
import Main from "../pages/js/Main";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Config />
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
