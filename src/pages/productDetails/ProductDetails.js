import React, { Component } from 'react';

import withRouter from '../../utils/WithRouter';
import { connect } from 'react-redux';

import { CardDetails } from './productDStyles';
import { getALLproducts } from '../../redux/actions/getproductDetails';
import {
  changeCapacity,
  changeColor,
  changeSize,
  changeTouch,
  changeUsb,
} from '../../redux/actions/switcher';
import { AddToCart } from '../../redux/actions/cartAction';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Imgindex: 0,
    };
  }

  async componentDidMount() {
    this.props.getproductDetails(
      this.props.router.location.pathname.split('/')[2]
    );
  }

  ChangeImg = (index) => {
    this.setState({ Imgindex: index });
  };

  render() {
    const id =
      this.props?.ReduxStore?.productDetails?.productDetails?.product?.id;
    const name =
      this.props?.ReduxStore?.productDetails?.productDetails?.product?.name;

    const currencyIndex = this.props.ReduxStore.currencies.currencyIndex;
    const brand =
      this.props?.ReduxStore?.productDetails?.productDetails?.product?.brand;
    const label =
      this.props.ReduxStore?.productDetails?.productDetails?.product?.prices[
        currencyIndex
      ]?.currency?.symbol;

    const price =
      label +
      ' ' +
      this.props.ReduxStore?.productDetails?.productDetails?.product?.prices[
        currencyIndex
      ]?.amount;
    const attributes =
      this.props?.ReduxStore?.productDetails?.productDetails?.product
        ?.attributes;

    const colorIndex = this.props.ReduxStore.switcher.colorIndex;
    const sizeIndex = this.props.ReduxStore.switcher.sizeIndex;
    const capcityIndex = this.props.ReduxStore.switcher.capacityIndex;
    const usbIndex = this.props.ReduxStore.switcher.usbIndex;
    const touchIndex = this.props.ReduxStore.switcher.touchIndex;
    const selectedAttr =
      this.props?.ReduxStore?.productDetails?.productDetails?.product?.attributes?.map(
        (item) => {
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
        }
      );

    const img =
      this.props?.ReduxStore?.productDetails?.productDetails?.product
        ?.gallery[0];

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingBottom: 5,
          gap: 8,
          width: '90%',
          marginTop: '2rem',
          marginRight: 'auto',
          marginLeft: 'auto',
        }}
      >
        <div style={{ flex: 1, padding: 3 }}>
          {this.props?.ReduxStore?.productDetails?.productDetails?.product
            ?.gallery?.length > 1
            ? this.props?.ReduxStore?.productDetails?.productDetails?.product?.gallery?.map(
                (img, i) => (
                  <div className='thumbnail' key={i}>
                    <img
                      onClick={this.ChangeImg.bind(this, i)}
                      src={img}
                      alt='pi'
                      style={{
                        width: '100%',
                        height: '50px',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                )
              )
            : ''}
        </div>

        <div style={{ flex: 4, padding: 3 }}>
          <img
            src={
              this.props?.ReduxStore?.productDetails?.productDetails?.product
                ?.gallery[this.state.Imgindex]
            }
            alt='img'
            style={{ width: '80%', objectFit: 'cover' }}
          />
        </div>
        <CardDetails
          style={{ flex: 3, paddingLeft: 4 }}
          inStock={
            this.props?.ReduxStore?.productDetails?.productDetails?.product
              ?.inStock
          }
          className={
            this.props?.ReduxStore?.productDetails?.productDetails?.product
              ?.inStock === false
              ? 'instock'
              : ''
          }
        >
          <div className='brand'>{this.state.brand}</div>
          <div style={{ marginBottom: 10 }}>{this.state.name}</div>
          {this.props?.ReduxStore?.productDetails?.productDetails?.product
            ?.attributes?.length !== 0 &&
            this.props?.ReduxStore?.productDetails?.productDetails?.product?.attributes.map(
              (attribute, i) => (
                <div key={i}>
                  <h4>{attribute.name}</h4>
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
                          ></button>
                        </div>
                      ))}
                    {attribute.name === 'Size' &&
                      attribute.items.map((s, index) => (
                        <div
                          style={{
                            display: 'flex',
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
                            display: 'flex',
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
                            display: 'flex',
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
                            display: 'flex',
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
              )
            )}

          <div style={{ marginBottom: 5 }}>PRICE:</div>
          <div style={{ marginBottom: 5 }}>
            <h5 style={{ color: 'var(--dark)', fontSize: '.7rem' }}>
              <span>
                {
                  this.props?.ReduxStore?.productDetails?.productDetails
                    ?.product?.prices[currencyIndex]?.currency?.symbol
                }
              </span>{' '}
              {
                this.props?.ReduxStore?.productDetails?.productDetails?.product
                  ?.prices[currencyIndex]?.amount
              }
            </h5>
          </div>
          <div style={{ fontWeight: 600 }}></div>
          <div>
            <button
              style={{
                border: 'none',
                padding: '.7rem',
                color: '#fff',
                background: 'var(--green)',
                cursor: 'pointer',
                textAlign: 'center',
              }}
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
            >
              ADD TO CART
            </button>
          </div>
          <div
            style={{ marginTop: 10 }}
            dangerouslySetInnerHTML={{
              __html: `${this.props?.ReduxStore?.productDetails?.productDetails?.product?.description}`,
            }}
          />
        </CardDetails>
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
    getproductDetails: (id) => dispatch(getALLproducts(id)),
    addtoCART: (id) => dispatch(AddToCart(id)),
    changeColor: (id) => dispatch(changeColor(id)),
    changeSize: (id) => dispatch(changeSize(id)),
    changeCapcity: (id) => dispatch(changeCapacity(id)),
    changeUsb: (id) => dispatch(changeUsb(id)),
    changeTouch: (id) => dispatch(changeTouch(id)),
  };
};

const me = withRouter(ProductDetails);

export default connect(mapStateToProps, mapDispatchToProps)(me);
