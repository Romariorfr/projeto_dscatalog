import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import Catalog from 'pages/Catalog';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Admin from 'pages/Admin';
import ProductDetails from 'pages/ProductDetails';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products" exact>
          <Catalog />
        </Route>
        <Route path="/products/:productId">
          <ProductDetails />
        </Route>
        <Redirect from="/admin" to="/admin/products" exact />
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Rotas;
