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
      <>
          <Sidebar />
          <Routes>
              <Route path="/" element={<Main />}/>
              <Route path="/statistics" element={<Statistics />}/>
          </Routes>
      </>


  );
}

export default App;
