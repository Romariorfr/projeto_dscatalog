import './styles.css';

const Form = () => {
  return (
    <div className="product-crud-container">
      <div className="base-card product-crud-form-card">
        <h1 className="product-crud-form-title">DADOS DO PRODUTO</h1>

        <form action=''>
          <div className="row product-crud-input-contaiener">
            <div className="col-lg-6 product-crud-inputs-left-container">
              <div className="margin-bottom-30">
                <input type="text" className="form-control base-input" />
              </div>
              <div className="margin-bottom-30">
                <input type="text" className="form-control base-input" />
              </div>
              <div className="product-crud-input">
                <input type="text" className="form-control base-input" />
              </div>
            </div>
            <div className="col-lg-6">
              <textarea rows={10} className="base-input"></textarea>
            </div>
          </div>
          <div className='product-crud-buttons-container'>
            <button className="btn btn-outline-danger">CANCELAR</button>
            <button className="btn btn-outline-primary">SALVAR</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
