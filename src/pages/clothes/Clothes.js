import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductCard from '../../components/productCard/ProductCard';
import { getClothes } from '../../redux/actions/getClothes';

import withRouter from '../../utils/WithRouter';

class Clothes extends Component {
  async componentDidMount() {
    await this.props.getclothes(
      this.props.router.location.pathname.split('/')[1]
    );
  }
  render() {
    const data = this.props?.ReduxStore?.clothes?.clothes?.category;

    return (
      <div
        style={{
          display: 'grid',
          gap: 10,
          gridTemplateColumns: '1fr 1fr 1fr',
          width: '90%',
          marginTop: '2rem',
          height: '100vh',
          marginRight: 'auto',
          marginLeft: 'auto',
        }}
      >
        {data?.products?.map((item) => (
          <ProductCard
            name={item.name}
            key={item.id}
            brand={item.brand}
            gallery={item.gallery}
            inStock={item.inStock}
            prices={item.prices}
            category={item.category}
            id={item.id}
            attributes={item.attributes}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ReduxStore: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getclothes: (data) => dispatch(getClothes(data)),
  };
};

const me = withRouter(Clothes);

export default connect(mapStateToProps, mapDispatchToProps)(me);
