import Navbar from 'components/Navbar';
import ProductCard from 'components/ProductCard';

const Catalog = () => {
  return (
    <>
      <Navbar />
      <div className="my-4 container">
        <ProductCard/>
      </div>
    </>
  );
};

export default Catalog;
