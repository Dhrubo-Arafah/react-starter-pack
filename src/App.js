import './App.css';
import Home from './components/Home/Home';
import WatchList from './components/WatchList/WatchList';
import Watched from './components/WatchList/Watched';
import Add from './components/Add';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import ShowDetail from './components/Show/ShowDetail';

function App() {
  return (
    <div className='bg-black'>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exat path="show/:id" element={<ShowDetail/>}/>
          <Route exact path="/watched" element={<Watched />} />
          <Route exact path="/add" element={<Add />} />
        </Routes>
      </Router>
     </div>
  );
}

export default App;
