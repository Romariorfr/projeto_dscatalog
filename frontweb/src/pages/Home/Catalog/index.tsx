import ProductCard from 'components/ProductCard';
import { Product } from 'types/product';
import { Link } from 'react-router-dom';

const Catalog = () => {
  const product: Product = {
    id: 2,
    name: 'Smart TV',
    price: 2190.0,
    imgUrl:
      'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg',
    date: '2020-07-14T10:00:00Z',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    categories: [
      {
        id: 1,
        name: 'Livros',
      },
      {
        id: 3,
        name: 'Computadores',
      },
    ],
  };

  return (
    <div className="my-4 container">
      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <Link to="/products/1">
            <ProductCard product={product} />
          </Link>
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-3">
          <Link to="/products/1">
            <ProductCard product={product} />
          </Link>
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-3">
          <Link to="/products/1">
            <ProductCard product={product} />
          </Link>
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-3">
          <Link to="/products/1">
            <ProductCard product={product} />
          </Link>
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-3">
          <Link to="/products/1">
            <ProductCard product={product} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
