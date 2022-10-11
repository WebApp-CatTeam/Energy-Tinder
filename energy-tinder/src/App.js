import logo from './logo.svg';
import './norm.css';
import './App.css';
import {
    Route,
    Routes
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Statistics from "./components/Statistic";



function App() {
  return (
      <div className="css-selector" >
          <Sidebar />
          <Routes>
              <Route path="/" element={<Main />}/>
              <Route path="/statistics" element={<Statistics />}/>
          </Routes>
      </div>


  );
}

export default App;
