import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.sass';
import Home from './pages/Home.jsx'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;