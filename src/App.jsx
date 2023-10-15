import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.sass";
import Home from "./pages/Home.jsx";
import Video from "./pages/VideoPage.jsx";
import Subscriptions from "./pages/NonAvailablePage.jsx";
import History from "./pages/NonAvailablePage.jsx";
import Explore from "./pages/NonAvailablePage.jsx";
import MyAccount from "./pages/NonAvailablePage.jsx";
import Upload from "./pages/NonAvailablePage.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/video/:id' element={<Video />} />
        <Route path='/subscriptions' element={<Subscriptions />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/myaccount' element={<MyAccount />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/history' element={<History />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
