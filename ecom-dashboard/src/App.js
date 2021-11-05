import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import Header from "./Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import AddProducts from "./AddProducts";
import UpdateProducts from "./UpdateProducts";
import Protected from "./Protected";
import ProductList from "./ProductList";
import SearchProduct from "./SearchProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/add">
            <Protected Cmp={AddProducts} />
            {/*<AddProducts />*/}
          </Route>
          <Route path="/update/:id">
            <Protected Cmp={UpdateProducts} />
            {/*<UpdateProducts />*/}
          </Route>

          <Route path="/search">
            <Protected Cmp={SearchProduct} />
            {/*<UpdateProducts />*/}
          </Route>

          <Route path="/">
            <Protected Cmp={ProductList} />
            {/**/}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
