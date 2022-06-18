import './App.css';
import { Routes, Route } from "react-router-dom";
import BerryPickingContainer from "./Components/BerryPicking/BerryPickingContainer";
import HomeContainer from './Components/Home/HomeContainer';
import PlaygardenContainer from './Components/Playgardens/PlaygardenContainer';
import AboutUsContainer from './Components/AboutUs/AboutUsContainer';

function App() {
  return (
    <div class="container-fluid">
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/berrypicking" element={<BerryPickingContainer />}/>
        <Route path="/playgardens" element={<PlaygardenContainer />}/>
        <Route path="/aboutus" element={<AboutUsContainer />}/>
      </Routes>
    </div>
  );
}

export default App;
