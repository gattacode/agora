import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.sass";
import Home from "./pages/Home.jsx";
import Video from "./pages/VideoPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/video/:id' element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
