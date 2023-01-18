import ProductCard from 'components/ProductCard';

const Catalog = () => {
  return (
    <div className="my-4 container">
      <div className="row">
        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>

        <div className="col-sm-6 col-lg-4 col-xl-3">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
