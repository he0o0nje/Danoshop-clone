import HomePage from "../../pages/HomePage/HomePage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import * as style from "./AppStyle";
import GlobalStyles from "../../GlobalStyles";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/detail" element={<AboutPage></AboutPage>} />
      </Routes>
      <style.ShadowLayer></style.ShadowLayer>
    </>
  );
}

export default App;
