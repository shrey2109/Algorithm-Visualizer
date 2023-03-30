import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import HomeScreen from './components/algoApps/HomeScreen'
import SortScreen from './components/algoApps/sortApp/SortScreen'
import GraphScreen from './components/algoApps/graphApp/GraphScreen'
import SearchScreen from "./components/algoApps/searchApp/SearchScreen";
import StackScreen from './components/algoApps/stackApp/StackScreen';
import QueueScreen from './components/algoApps/queueApp/QueueScreen';
import QueueInfo from "./components/algoApps/queueApp/QueueInfo";
import StackInfo from "./components/algoApps/stackApp/StackInfo";
import BubbleInfo from "./components/algoApps/sortApp/BubbleInfo";
import InsertionInfo from "./components/algoApps/sortApp/InsertionInfo";
import SelectionInfo from "./components/algoApps/sortApp/SelectionInfo";
import QuickInfo from "./components/algoApps/sortApp/QuickInfo";
import MergeInfo from "./components/algoApps/sortApp/MergeInfo";
import LinearInfo from "./components/algoApps/searchApp/LinearInfo";
import BinaryInfo from "./components/algoApps/searchApp/BinaryInfo";
import BFSInfo from "./components/algoApps/graphApp/BFSInfo";
import DFSInfo from "./components/algoApps/graphApp/DFSInfo";
function App() {
  return (
    <>
      {/* <h1> HELLO FOR FIRST TIME!! </h1> */}
      <Router basename='/Algorithm-Visualizer'>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/sort" element={<SortScreen/>}/>
        <Route path="/bubbleinfo" element={<BubbleInfo/>}/>
        <Route path="/insertioninfo" element={<InsertionInfo/>}/>
        <Route path="/selectioninfo" element={<SelectionInfo/>}/>
        <Route path="/mergeinfo" element={<MergeInfo/>}/>
        <Route path="/quickinfo" element={<QuickInfo/>}/>
        <Route path="/graph" element={<GraphScreen/>}/>
        <Route path="/bfsinfo" element={<BFSInfo/>}/>
        <Route path="/dfsinfo" element={<DFSInfo/>}/>
        <Route path="/search" element={<SearchScreen/>}/>
        <Route path="/linearinfo" element={<LinearInfo/>}/>
        <Route path="/binaryinfo" element={<BinaryInfo/>}/>
        <Route path="/stack" element={<StackScreen/>}/> 
        <Route path="/stackinfo" element={<StackInfo/>}/> 
        <Route path="/queue" element={<QueueScreen/>}/> 
        <Route path="/queueinfo" element={<QueueInfo/>}/> 
      </Routes>
    </Router>
    </>
  );
}

export default App;
