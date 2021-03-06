import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import {
  setTextFilter,
  setCategoryFilter,
  sortByDate,
  sortByPrice,
  sortByPriceReverse,
  sortByName
} from '../../../actions/filters';
import selectProducts from '../../../selectors/products';

export class ProductListFilters extends React.Component {
  state = {
    category: this.props.filters.category
      ? this.props.filters.category
      : 'default'
  };
  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = e => {
    if (e.target.value === 'date') {
      this.props.sortByDate();
    } else if (e.target.value === 'price') {
      this.props.sortByPrice();
    } else if (e.target.value === 'price-reverse') {
      this.props.sortByPriceReverse();
    } else if (e.target.value === 'name') {
      this.props.sortByName();
    }
  };
  onCategoryChange = e => {
    if (e.target.value) {
      this.props.setCategoryFilter(e.target.value);
      this.setState({
        category: e.target.value
      });
    }
  };
  componentWillUnmount() {
    // this.props.setCategoryFilter('default');
    this.props.sortByDate();
    this.props.setTextFilter('');
  }
  render() {
    return (
      <div className="wrapper products">
        <div className="input-group products__input">
          <div className="input-group__item">
            <input
              type="text"
              className="text-input-site"
              placeholder="Procurar um produto"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group__item">
            <select
              className="select--site"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value="date">Data</option>
              <option value="name">Nome</option>
              <option value="price">Maior Preço</option>
              <option value="price-reverse">Menor Preço</option>
            </select>
          </div>
          <div className="input-group__item">
            <select
              className="select--site"
              onChange={this.onCategoryChange}
              value={this.state.category}
            >
              <option key="default" value="default" disabled>
                Categoria
              </option>
              {this.props.categories.map(category => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                );
              })}
              <option key="all" value="all">
                Todas
              </option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters,
  categories: state.categories,
  products: selectProducts(state.products, state.filters)
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  setCategoryFilter: category => dispatch(setCategoryFilter(category)),
  sortByDate: () => dispatch(sortByDate()),
  sortByPrice: () => dispatch(sortByPrice()),
  sortByPriceReverse: () => dispatch(sortByPriceReverse()),
  sortByName: () => dispatch(sortByName())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductListFilters);
