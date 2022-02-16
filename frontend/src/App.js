import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import Navbar from "./components/Navbar";
import "bulma/css/bulma.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <Routes>
                <Route exact path="/" element={<ProductList />} />
                <Route path="/" element={<Navbar />} />
                <Route path="/add" element={<AddProduct />} />
                <Route path="/edit/:id" element={<EditProduct />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
