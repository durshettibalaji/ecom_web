
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './Containers/Header';
import ProductComponent from './Containers/ProductComponent';
import ProductListing from './Containers/ProductListing';
import ProductDetails from './Containers/ProductDetails';
function App() {
  return (
    <div className="App">
      <Router>
    {/* <Header/> */}
   <Routes>
    <Route path="/" element={<ProductListing/>} />
    <Route path='/product/:productId'  element={<ProductDetails/>}/>
    <Route>ur on unidentified url</Route>
    </Routes>
      </Router>
    </div>
  );
}

export default App;
