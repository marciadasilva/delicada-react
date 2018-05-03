import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import selectProducts from '../../../selectors/products';
import { setProductFilter } from '../../../actions/filters';
import { Animated } from 'react-animated-css';

class Latest extends React.Component {
  state = {
    onoff: true
  };

  getInitialState() {
    return {
      onoff: this.props.onoff
    };
  }

  componentWillMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        onoff: !this.state.onoff
      });
    }, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="wrapper latest">
        <h3 className="latest__title">Novidades</h3>
        <div className="wrapper latest__list">
          {this.props.products
            .slice(
              0,
              this.props.products.length >= 4 ? 4 : this.props.products.length
            )
            .map(product => {
              return (
                <div key={product.id}>
                  <Link
                    to="/products/details"
                    className="wrapper"
                    onClick={() => this.props.setProductFilter(product.id)}
                  >
                    <div className="latest__image__overlay">
                      <img
                        className="latest__image"
                        src={product.image}
                        alt=""
                      />
                    </div>
                    <span className="latest__description">{product.name}</span>
                  </Link>
                </div>
              );
            })}
        </div>
        <Animated
          animationIn="jello"
          animationOut="tada"
          isVisible={this.state.onoff}
        >
          <Link className="button button--home" to="/products">
            Mais
          </Link>
        </Animated>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: selectProducts(state.products, state.filters)
});

const mapDispatchToProps = dispatch => ({
  setProductFilter: product => dispatch(setProductFilter(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(Latest);
