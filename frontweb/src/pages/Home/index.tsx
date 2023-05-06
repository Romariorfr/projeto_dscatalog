import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import './styles.css';
import ButtonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';
import { isAuthenticated } from 'util/request';

const Home = () => {
  return (
    <div className="home-container">
      <h1>{isAuthenticated() ? 'autenticado ' : 'nao autenticado'}</h1>

      <div className="base-card home-card">
        <div className="home-content-container">
          <div>
            <h1>Conheça o Melhor catálogo de produtos!</h1>
            <p>
              {' '}
              Ajudaremos você a encontrar os melhores produtos disponíveis no
              mercado
            </p>
          </div>

          <div>
            <Link to="/products">
              <ButtonIcon text="INICIE AGORA A SUA BUSCA" />
            </Link>
          </div>
        </div>
        <div className="home-image-container">
          <MainImage />
        </div>
      </div>
    </div>
  );
};

export default Home;
