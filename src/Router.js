import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Home';
import Product from './Product';
import ProductItem from './ProductItem';


export default function Webswitch() {
  return (
    <Router>
      <div>
        <nav className="NavBar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Product">Product</Link>
            </li>
            <li>
              <Link to="/ProductItem">ProductItem</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Product"> <Product /> </Route>
          <Route path="/Product/:id"> <ProductItem /> </Route>
          <Route exact path="/"> <Home /> </Route>
          <Route path="*"> <h2>404 Page not found</h2> </Route>
        </Switch>
      </div>
    </Router>
  );
}




