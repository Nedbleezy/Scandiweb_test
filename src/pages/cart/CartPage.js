import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IncreaseQty } from '../../redux/actions/cartAction';

import withRouter from '../../utils/WithRouter';

class CartPage extends Component {
  render() {
    return (
      <div
        style={{
          marginTop: '3rem',
          width: '90%',
          marginRight: 'auto',
          marginLeft: 'auto',
        }}
      >
        <div style={{ marginBottom: '2rem' }}>
          <h2
            style={{
              textTransform: 'uppercase',
              borderBottom: '.5px solid gray',
              paddingBottom: '20px',
            }}
          >
            CART
          </h2>
        </div>

        {this.props.ReduxStore.cart.cartItems.map((cart, index) => (
          <div style={{ marginTop: '3rem', padding: '1rem' }} key={index}>
            <div className='container'>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                  borderBottom: '.5px solid gray',
                  paddingBottom: '10px',
                }}
              >
                <div className='left' style={{ width: '30%' }}>
                  <div style={{ marginBottom: '10px' }}>
                    <h2>{cart.brand}</h2>
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <h4>{cart.name}</h4>
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <h4>{cart?.price}</h4>
                  </div>
                  <>
                    <div style={{ flex: 3, paddingLeft: 4 }}>
                      {cart?.attributes?.length !== 0 &&
                        cart?.attributes?.map((attribute, i) => (
                          <div key={i}>
                            <h4>{attribute.name}</h4>

                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginRight: 5,
                              }}
                            >
                              {attribute.type === 'swatch'
                                ? attribute.items.map((u) => (
                                    <div key={u.id}>
                                      <div
                                        onClick={() => console.log(u.id)}
                                        style={{
                                          border: '1px solid #1D1F22',
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
                                      ></div>
                                    </div>
                                  ))
                                : attribute.items.map((j) => (
                                    <div
                                      style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        marginBottom: 10,
                                      }}
                                      key={j.id}
                                    >
                                      <span
                                        onClick={() => console.log(j.id)}
                                        style={{
                                          padding: 3,
                                          cursor: 'pointer',
                                          marginRight: 7,
                                          marginTop: 10,
                                          border: '1px solid #1D1F22',
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
                                        {j.value}
                                      </span>
                                    </div>
                                  ))}
                            </div>
                          </div>
                        ))}
                    </div>
                  </>
                </div>

                <div
                  className='right'
                  style={{ width: '30%', display: 'flex' }}
                >
                  <div
                    style={{
                      width: '12%',
                      marginRight: '10px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div>
                      <button
                        style={{
                          fontSize: '1.5rem',
                          cursor: 'pointer',
                          background: '#fff',
                          borderWidth: 1.2,
                          width: '40px',
                          height: '40px',
                        }}
                        onClick={() => this.props.IncreaseQTY(cart.id)}
                      >
                        +
                      </button>
                    </div>
                    <div>
                      <h3>{cart.qty}</h3>
                    </div>
                    <div>
                      <button
                        style={{
                          fontSize: '1.8rem',
                          cursor: 'pointer',
                          background: '#fff',
                          borderWidth: 1.2,
                          width: '40px',
                          height: '40px',
                        }}
                        onClick={() => this.props.DecreaseQTY(cart.id)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div
                    style={{
                      position: 'relative',
                      width: '88%',
                      paddingBottom: '10px',
                    }}
                  >
                    <img
                      src={cart?.img}
                      alt='p1'
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        right: '10%',
                        bottom: '10%',
                      }}
                    >
                      <button
                        style={{
                          marginRight: '10px',
                          paddingLeft: '1px',
                          paddingRight: '2.9px',
                          fontSize: '1.1rem',
                          cursor: 'pointer',
                          background: 'black',
                          color: 'white',
                        }}
                      >
                        {' '}
                        &lt;
                      </button>
                      <button
                        style={{
                          marginRight: '10px',
                          paddingLeft: '1px',
                          paddingRight: '2.9px',
                          fontSize: '1.1rem',
                          cursor: 'pointer',
                          background: 'black',
                          color: 'white',
                        }}
                      >
                        &gt;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* footer of cart section */}
        <div style={{ width: '25%', marginTop: '2rem' }}>
          <div
            style={{
              display: 'flex',
              marginTop: '10px',
            }}
          >
            <p style={{ width: '90px', fontSize: '18px' }}>Tax 21%</p>
            <p style={{ fontWeight: 'bold' }}>$50.00</p>
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: '10px',
            }}
          >
            <p style={{ width: '90px', fontSize: '18px' }}>Quantity:</p>
            <p style={{ fontWeight: 'bold' }}>20</p>
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: '10px',
            }}
          >
            <p style={{ width: '90px', fontSize: '18px' }}>Total:</p>
            <p style={{ fontWeight: 'bold' }}>$200.00</p>
          </div>

          <div>
            <button
              style={{
                background: 'var(--green)',
                color: '#fff',
                paddingLeft: '1rem',
                paddingRight: '1rem',
                paddingBottom: '.5rem',
                paddingTop: '.5rem',

                width: '80%',
                marginTop: '.5rem',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              ORDER
            </button>
          </div>
        </div>
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
    IncreaseQTY: (id) => dispatch(IncreaseQty(id)),
    DecreaseQTY: (id) => dispatch(),
  };
};

const me = withRouter(CartPage);

export default connect(mapStateToProps, mapDispatchToProps)(me);
