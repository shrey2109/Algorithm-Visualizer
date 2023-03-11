import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import HomeScreen from './components/algoApps/HomeScreen'
// import SortScreen from './components/algoApps/sortApp/SortScreen'
import GraphScreen from './components/algoApps/graphApp/GraphScreen'
// import SearchScreen from './components/algoApps/seachApp/SearchScreen'
import StackScreen from './components/algoApps/stackApp/StackScreen'
import QueueScreen from './components/algoApps/queueApp/QueueScreen'

function App() {
  return (
    <>
      {/* <h1> HELLO FOR FIRST TIME!! </h1> */}
      <Router>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        {/* <Route path="/sort" element={<SortScreen/>}/> */}
        <Route path="/graph" element={<GraphScreen/>}/>
        {/* <Route path="/search" element={<SearchScreen/>}/> */}
        <Route path="/stack" element={<StackScreen/>}/> 
        <Route path="/queue" element={<QueueScreen/>}/> 
      </Routes>
    </Router>
    </>
  );
}

export default App;
