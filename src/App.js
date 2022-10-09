import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/index";
import Home from "./pages/home/index";
import Item from "./pages/Item/index"
import {useDispatch} from "react-redux"
import { fetchTopSellers} from "./redux/slices/topSellerSlice";
import { fetchHotBids } from "./redux/slices/hotBidsSlice";
import './App.css';
import { useEffect } from "react";

function App() {
  const dispatch =useDispatch()

  useEffect(() => {
    dispatch(fetchTopSellers())
    dispatch(fetchHotBids())
  }, [])
  
  return (
    <div className="App">

      <Router>
        <Routes>

          <Route path="/" exact element={<Layout><Home /></Layout>} />
          <Route path="/ıtem" element={<Layout><Item /></Layout>} />
        </Routes>



      </Router>






    </div>
  );
}

export default App;
