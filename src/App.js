import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import HomeScreen from './components/algoApps/HomeScreen';
import SortScreen from './components/algoApps/sortApp/SortScreen';
import GraphScreen from './components/algoApps/graphApp/GraphScreen';
import SearchScreen from './components/algoApps/searchApp/SearchScreen';
import StackScreen from './components/algoApps/stackApp/StackScreen';
import QueueScreen from './components/algoApps/queueApp/QueueScreen';
import QueueInfo from './components/algoApps/queueApp/QueueInfo';
import StackInfo from './components/algoApps/stackApp/StackInfo';
import BubbleInfo from './components/algoApps/sortApp/BubbleInfo';
import InsertionInfo from './components/algoApps/sortApp/InsertionInfo';
import SelectionInfo from './components/algoApps/sortApp/SelectionInfo';
import QuickInfo from './components/algoApps/sortApp/QuickInfo';
import MergeInfo from './components/algoApps/sortApp/MergeInfo';
import LinearInfo from './components/algoApps/searchApp/LinearInfo';
import BinaryInfo from './components/algoApps/searchApp/BinaryInfo';
import BFSInfo from './components/algoApps/graphApp/BFSInfo';
import DFSInfo from './components/algoApps/graphApp/DFSInfo';

import './App.css';

const App = () => {
  return (
    <>
      <Router basename="/algo-canvas">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/sort" element={<SortScreen />} />
          <Route path="/bubble-info" element={<BubbleInfo />} />
          <Route path="/insertion-info" element={<InsertionInfo />} />
          <Route path="/selection-info" element={<SelectionInfo />} />
          <Route path="/merge-info" element={<MergeInfo />} />
          <Route path="/quick-info" element={<QuickInfo />} />
          <Route path="/graph" element={<GraphScreen />} />
          <Route path="/bfs-info" element={<BFSInfo />} />
          <Route path="/dfs-info" element={<DFSInfo />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="/linear-info" element={<LinearInfo />} />
          <Route path="/binary-info" element={<BinaryInfo />} />
          <Route path="/stack" element={<StackScreen />} />
          <Route path="/stack-info" element={<StackInfo />} />
          <Route path="/queue" element={<QueueScreen />} />
          <Route path="/queue-info" element={<QueueInfo />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
