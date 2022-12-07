import './styles.css';

import ProductImg from 'assets/images/product.png';

const ProductCard = () => {
  return (
    <div className="base-card product-card">
      <div className="card-top-container">
        <img src={ProductImg} alt="nome do produto" />
      </div>
      <div className="card-bottom-container">
        <h6>Nome do Produto</h6>
        <p>preço do producto</p>
      </div>
    </div>
  );
};

export default ProductCard;
