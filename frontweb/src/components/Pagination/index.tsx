import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';

const Pagination = () => {
  return (
    <div className="pagination-container">
      <ArrowIcon />
      <div className="pagination-item">1</div>
      <div className="pagination-item">2</div>
      <div className="pagination-item">3</div>
      <div className="pagination-item">4</div>
      <div className="pagination-item">...</div>
      <div className="pagination-item">10</div>
      <ArrowIcon />
    </div>
  );
};

export default Pagination;
