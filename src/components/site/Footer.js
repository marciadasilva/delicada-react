import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCategoryFilter } from '../../actions/filters';

const Footer = props => {
  // const iconLogged = props.isAuthenticated ? 'fas fa-home' : 'fas fa-lock';
  const onCategoryChange = id => {
    if (id) {
      props.setCategoryFilter(id);
    }
  };
  return (
    <footer className="footer wrapper">
      <div className="footer__links">
        <span className="footer__title">Mais Informações</span>
        <ul className="footer__list">
          <li>
            <Link to="/" className="color-link">
              <i className="fas fa-angle-right" /> Início
            </Link>
          </li>
          <li className="color-link">
            <i className="fas fa-angle-right" /> Formas de Pagamento
            <ul className="sub-link">
              <li className="color-link">- Cartão de Crédito</li>
              <li className="color-link">- Dinheiro</li>
            </ul>
          </li>
          <li>
            <Link to="/about" className="color-link">
              <i className="fas fa-angle-right" /> Sobre
            </Link>
          </li>
          <li>
            <Link to="/login" className="color-link">
              <i className="fas fa-angle-right" /> Login
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer__products">
        <span className="footer__title">Produtos</span>
        <ul className="footer__list">
          {props.categories.map(category => (
            <li key={category.id} onClick={() => onCategoryChange(category.id)}>
              <Link to="/products" className="color-link">
                <i className="fas fa-angle-right" />
                &nbsp;
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="footer__contact">
        <span className="footer__title">Contato</span>
        <ul className="footer__list">
          <li className="color-link">
            <i className="fab fa-whatsapp" /> 959465121
          </li>
          <li className="color-link">
            <i className="fas fa-envelope" /> email@email.com
          </li>
          <li className="color-link">
            <i className="fas fa-location-arrow" /> Ijuí - RS
          </li>
        </ul>
      </div>
    </footer>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid,
  categories: state.categories
});

const mapDispatchToProps = dispatch => ({
  setCategoryFilter: category => dispatch(setCategoryFilter(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
