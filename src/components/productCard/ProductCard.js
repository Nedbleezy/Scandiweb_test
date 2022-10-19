import React, { Component } from 'react';
import { CardFrame } from './cardStyles';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import withRouter from '../../utils/WithRouter';
import { connect } from 'react-redux';
import { AddToCart } from '../../redux/actions/cartAction';
import {
  changeCapacity,
  changeColor,
  changeSize,
  changeTouch,
  changeUsb,
} from '../../redux/actions/switcher';

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  render() {
    const { name, brand, inStock, gallery, id, prices, attributes } =
      this.props;

    const currencyIndex = this.props.ReduxStore.currencies.currencyIndex;
    const colorIndex = this.props.ReduxStore.switcher.colorIndex;
    const sizeIndex = this.props.ReduxStore.switcher.sizeIndex;
    const capcityIndex = this.props.ReduxStore.switcher.capacityIndex;
    const usbIndex = this.props.ReduxStore.switcher.usbIndex;
    const touchIndex = this.props.ReduxStore.switcher.touchIndex;
    const selectedAttr = attributes.map((item) => {
      return {
        NAME: item.name,
        VALUE:
          item.name === 'Color'
            ? item?.items[colorIndex].value
            : item.name === 'Size'
            ? item?.items[sizeIndex].value
            : item.name === 'Capacity'
            ? item?.items[capcityIndex].value
            : item.name === 'With USB 3 ports'
            ? item?.items[usbIndex].value
            : item.name === 'Touch ID in keyboard'
            ? item?.items[touchIndex].value
            : '',
      };
    });

    const label = prices[currencyIndex]?.currency.symbol;
    const price = label + ' ' + prices[currencyIndex]?.amount;
    const img = gallery[0];

    return (
      <>
        <CardFrame
          inStock={inStock}
          className={inStock === false ? 'instock' : ''}
        >
          <div style={{ marginBottom: '1.3rem' }} className='imgContainer'>
            <img
              src={gallery[0]}
              alt={brand}
              key='product'
              onClick={() => this.props.router.navigate(`/product/${id}`)}
            />

            <div className='me'>
              <AiOutlineShoppingCart
                id='cart'
                onClick={() =>
                  this.props.addtoCART({
                    id,
                    name,
                    brand,
                    selectedAttr,
                    price,
                    img,
                    attributes,
                  })
                }
              />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                color: 'var(--offWhite)',
                paddingBottom: '0.2rem',
                fontSize: '0.8rem',
              }}
            >
              <p>
                {brand} {name}
              </p>
            </div>
            <div>
              {attributes?.length !== 0 &&
                attributes?.map((attribute, i) => (
                  <div key={i}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginRight: 5,
                      }}
                    >
                      {attribute.name === 'Color' &&
                        attribute.items.map((u, c) => (
                          <div key={u.id}>
                            <button
                              onClick={() => {
                                this.props.changeColor(c);
                              }}
                              style={{
                                border: `${
                                  c === colorIndex
                                    ? '3px solid var(--green)'
                                    : '1px solid #1D1F22'
                                }`,
                                textAlign: 'center',
                                paddingTop: 3,
                                cursor: 'pointer',
                                marginRight: 7,
                                marginTop: 10,
                                marginBottom: 5,
                                background: `${u.value}`,
                                width: `${
                                  attribute.name === 'Size' ||
                                  attribute.name === 'Color'
                                    ? '20px'
                                    : ''
                                }`,
                                height: `${
                                  attribute.name === 'Size' ||
                                  attribute.name === 'Color'
                                    ? '20px'
                                    : ''
                                }`,
                              }}
                            ></button>
                          </div>
                        ))}
                      {attribute.name === 'Size' &&
                        attribute.items.map((s, index) => (
                          <div
                            style={{
                              display: 'none',
                              alignItems: 'center',
                              textAlign: 'center',
                              marginBottom: 10,
                            }}
                            key={s.id}
                          >
                            <button
                              onClick={() => {
                                this.props.changeSize(index);
                              }}
                              style={{
                                padding: 3,
                                cursor: 'pointer',
                                marginRight: 7,
                                marginTop: 10,
                                border: `${
                                  index === sizeIndex
                                    ? '3px solid var(--green)'
                                    : '1px solid #1D1F22'
                                }`,
                                width: `${
                                  attribute.name === 'Size' ||
                                  attribute.name === 'Color'
                                    ? '30px'
                                    : ''
                                }`,
                                height: `${
                                  attribute.name === 'Size' ||
                                  attribute.name === 'Color'
                                    ? '30px'
                                    : ''
                                }`,
                              }}
                            >
                              {s.value}
                            </button>
                          </div>
                        ))}

                      {attribute.name === 'Capacity' &&
                        attribute.items.map((c, i) => (
                          <div
                            style={{
                              display: 'none',
                              alignItems: 'center',
                              textAlign: 'center',
                              marginBottom: 10,
                            }}
                            key={c.id}
                          >
                            <button
                              onClick={() => {
                                this.props.changeCapcity(i);
                              }}
                              style={{
                                padding: 3,
                                cursor: 'pointer',
                                marginRight: 7,
                                marginTop: 10,
                                border: `${
                                  i === capcityIndex
                                    ? '3px solid var(--green)'
                                    : '1px solid #1D1F22'
                                }`,
                                width: `${
                                  attribute.name === 'Size' ||
                                  attribute.name === 'Color'
                                    ? '30px'
                                    : ''
                                }`,
                                height: `${
                                  attribute.name === 'Size' ||
                                  attribute.name === 'Color'
                                    ? '30px'
                                    : ''
                                }`,
                              }}
                            >
                              {c.value}
                            </button>
                          </div>
                        ))}

                      {attribute.name === 'With USB 3 ports' &&
                        attribute.items.map((u, Uindex) => (
                          <div
                            style={{
                              display: 'none',
                              alignItems: 'center',
                              textAlign: 'center',
                              marginBottom: 10,
                            }}
                            key={u.id}
                          >
                            <button
                              onClick={() => {
                                this.props.changeUsb(Uindex);
                              }}
                              style={{
                                padding: 3,
                                cursor: 'pointer',
                                marginRight: 7,
                                marginTop: 10,
                                border: `${
                                  Uindex === usbIndex
                                    ? '3px solid var(--green)'
                                    : '1px solid #1D1F22'
                                }`,
                                width: `${
                                  attribute.name === 'Size' ||
                                  attribute.name === 'Color'
                                    ? '30px'
                                    : ''
                                }`,
                                height: `${
                                  attribute.name === 'Size' ||
                                  attribute.name === 'Color'
                                    ? '30px'
                                    : ''
                                }`,
                              }}
                            >
                              {u.value}
                            </button>
                          </div>
                        ))}

                      {attribute.name === 'Touch ID in keyboard' &&
                        attribute.items.map((t, Tindex) => (
                          <div
                            style={{
                              display: 'none',
                              alignItems: 'center',
                              textAlign: 'center',
                              marginBottom: 10,
                            }}
                            key={t.id}
                          >
                            <button
                              onClick={() => {
                                this.props.changeTouch(Tindex);
                              }}
                              style={{
                                padding: 3,
                                cursor: 'pointer',
                                marginRight: 7,
                                marginTop: 10,
                                border: `${
                                  Tindex === touchIndex
                                    ? '3px solid var(--green)'
                                    : '1px solid #1D1F22'
                                }`,
                                width: `${
                                  attribute.name === 'Size' ||
                                  attribute.name === 'Color'
                                    ? '30px'
                                    : ''
                                }`,
                                height: `${
                                  attribute.name === 'Size' ||
                                  attribute.name === 'Color'
                                    ? '30px'
                                    : ''
                                }`,
                              }}
                            >
                              {t.value}
                            </button>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div style={{ fontWeight: 600 }}>
            <p style={{ color: 'var(--dark)', fontSize: '.7rem' }}>
              <span>{prices[currencyIndex]?.currency?.symbol}</span>{' '}
              {prices[currencyIndex]?.amount}
            </p>
          </div>
        </CardFrame>
      </>
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
    addtoCART: (id) => dispatch(AddToCart(id)),
    changeColor: (id) => dispatch(changeColor(id)),
    changeSize: (id) => dispatch(changeSize(id)),
    changeCapcity: (id) => dispatch(changeCapacity(id)),
    changeUsb: (id) => dispatch(changeUsb(id)),
    changeTouch: (id) => dispatch(changeTouch(id)),
  };
};

const productCard = withRouter(ProductCard);

export default connect(mapStateToProps, mapDispatchToProps)(productCard);
