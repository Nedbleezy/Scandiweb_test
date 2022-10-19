import React, { Component } from 'react';
import { ProductListingWrapper } from './productListStyles';
import ProductCard from '../../components/productCard/ProductCard';
import { connect } from 'react-redux';
import withRouter from '../../utils/WithRouter';

import { Outlet } from 'react-router-dom';
import { getALLproducts } from '../../redux/actions/getallProducts';

class ProductListing extends Component {
  async componentDidMount() {
    await this.props.CategoryAll();
  }

  render() {
    const data = this.props?.ReduxStore?.productList?.productList?.category;
    return (
      <ProductListingWrapper>
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
            placeItems: 'center',
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
              id={item.id}
              attributes={item.attributes}
              myIndex={0}
            />
          ))}
        </div>
        <Outlet />
      </ProductListingWrapper>
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
    CategoryAll: () => dispatch(getALLproducts()),
  };
};

const me = withRouter(ProductListing);

export default connect(mapStateToProps, mapDispatchToProps)(me);
