import React, { Component } from 'react';
import {
  HeaderWrapper,
  Badge,
  MiniCartOverlay,
  MiniCartBox,
  MiniCart,
  HeaderContent,
  HeaderLeft,
  HeaderCenter,
  HeaderRight,
} from './HeaderStyles';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { HiShoppingBag } from 'react-icons/hi';
import { AiOutlineDown } from 'react-icons/ai';
import styles from './header.module.css';
import withRouter from '../../utils/WithRouter';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAllCategories } from '../../redux/actions/getallCategories';
import {
  changeCurrency,
  getAllCurrencies,
} from '../../redux/actions/getallCurrencies';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovering: false,
      active: true,
      linkIndex: 0,
    };
  }

  async componentDidMount() {
    await this.props.getAllCategories();
    await this.props.getAllCurrencies();
  }
  handleClick = () => {
    const caret = document.getElementById('caret');
    const selected = document.getElementById('selected');
    const menu = document.getElementById('menu');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
    const options = document.querySelectorAll('.option');
    options.forEach((option) => {
      option.addEventListener('click', () => {
        selected.innerText = option.innerText;

        caret.classList.remove('caret-rotate');
        menu.classList.remove('menu-open');
      });
    });
  };

  handleMouseOver = () => {
    if (this.state.isHovering) {
      this.setState({ isHovering: false });
    } else {
      this.setState({ isHovering: true });
    }
  };

  render() {
    const { currencies, categories } = this.props.ReduxStore;
    // const symbols = currencies?.currencies[0]?.symbol;
    console.log(this.props.ReduxStore);
    return (
      <HeaderWrapper>
        <HeaderContent>
          <HeaderLeft>
            {categories?.categories?.map((category, index) => (
              <div
                className='link-container'
                key={category.name}
                style={{
                  borderBottom: `${
                    this.state.active && index === this.state.linkIndex
                      ? '2px solid var(--green)'
                      : ''
                  }`,
                }}
              >
                <Link
                  to={category.name}
                  onClick={() => this.setState({ linkIndex: index })}
                >
                  {category.name}
                </Link>
              </div>
            ))}
          </HeaderLeft>

          <HeaderCenter>
            <HiShoppingBag
              style={{ color: 'var(--green)', fontSize: '1.5rem' }}
            />
          </HeaderCenter>
          <HeaderRight>
            <div className={styles.dropdown}>
              <div className={styles.select}>
                <span className={styles.selected} id='selected'>
                  $
                </span>
                <div className={styles.caret}>
                  <AiOutlineDown
                    id='caret'
                    onClick={this.handleClick.bind(this)}
                  />
                </div>
              </div>
              <ul className={styles.menu} id='menu'>
                {currencies?.currencies?.map((cur, i) => (
                  <li
                    key={cur.symbol}
                    onClick={() => this.props.changeCurrency(i)}
                  >
                    <span
                      className='option'
                      style={{ paddingLeft: 10, fontWeight: 'bold' }}
                    >
                      {cur.symbol}
                    </span>
                    <span
                      style={{ paddingLeft: 10, fonSize: '5px' }}
                      className='option'
                    >
                      {cur.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className='headerRight-R'>
              <div className='cartCon' style={{ position: 'relative' }}>
                <AiOutlineShoppingCart
                  style={{ fontSize: '1.5rem', color: 'var(--dark)' }}
                  className='icon'
                />
                {document.getElementById('badge')?.innerHTML !== '' && (
                  <Badge id='badge' onClick={this.handleMouseOver.bind(this)}>
                    3
                  </Badge>
                )}
              </div>
              {this.state.isHovering && (
                <MiniCartOverlay id='miniCart'>
                  <MiniCartBox>
                    <div style={{ padding: '10px' }}>
                      <h5>
                        My Bag <span>3 items</span>{' '}
                      </h5>
                    </div>
                    <MiniCart>
                      <div
                        className='me'
                        style={{
                          display: 'flex',
                          background: '#fff',
                          marginBottom: '10px',
                        }}
                      >
                        <div style={{ width: '50%' }}>
                          <h4>Apollo</h4>
                          <p style={{ fontSize: '10px' }}>
                            Apollo Running shorts
                          </p>

                          <h5 style={{ marginTop: '5px' }}>$50.00</h5>
                          <h6 style={{ marginTop: '5px' }}>Size</h6>

                          <div style={{ display: 'flex', marginTop: '5px' }}>
                            <div
                              style={{
                                width: '30px',
                                height: '30px',
                                border: '2px solid black',
                                textAlign: 'center',
                                marginRight: 2,
                              }}
                            >
                              M
                            </div>
                            <div
                              style={{
                                width: '30px',
                                height: '30px',
                                border: '2px solid black',
                                marginRight: 2,
                                textAlign: 'center',
                              }}
                            >
                              L
                            </div>
                            <div
                              style={{
                                width: '30px',
                                height: '30px',
                                border: '2px solid black',
                                marginRight: 2,
                                textAlign: 'center',
                              }}
                            >
                              XL
                            </div>
                            <div
                              style={{
                                width: '30px',
                                height: '30px',
                                border: '2px solid black',
                                marginRight: 2,
                                textAlign: 'center',
                              }}
                            >
                              S
                            </div>
                          </div>
                          <h6>color</h6>
                          <div style={{ display: 'flex', marginTop: '5px' }}>
                            <div
                              style={{
                                width: '15px',
                                height: '15px',
                                border: '2px solid black',
                                textAlign: 'center',
                                marginRight: 2,
                                background: 'cyan',
                              }}
                            ></div>
                            <div
                              style={{
                                width: '15px',
                                height: '15px',
                                border: '2px solid black',
                                marginRight: 2,
                                textAlign: 'center',
                                background: 'brown',
                              }}
                            ></div>
                            <div
                              style={{
                                width: '15px',
                                height: '15px',
                                border: '2px solid black',
                                marginRight: 2,
                                textAlign: 'center',
                                background: 'yellow',
                              }}
                            ></div>
                            <div
                              style={{
                                width: '15px',
                                height: '15px',
                                border: '2px solid black',
                                marginRight: 2,
                                textAlign: 'center',
                                background: 'red',
                              }}
                            ></div>
                          </div>
                        </div>
                        <div
                          style={{
                            marginRight: 2,
                            textAlign: 'center',
                            width: '50%',
                            display: 'flex',
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                              marginRight: 2,
                            }}
                          >
                            <div>
                              <button>+</button>
                            </div>
                            <div>2</div>
                            <div>
                              {' '}
                              <button>-</button>
                            </div>
                          </div>
                          <div style={{ position: 'relative' }}>
                            <img
                              src='/p.jpg'
                              alt='pi'
                              style={{ height: '100%', objectFit: 'cover' }}
                            />
                            <div
                              style={{
                                position: 'absolute',
                                bottom: 3,
                                right: 5,
                              }}
                            >
                              <button style={{ marginRight: '8px' }}>
                                &lt;
                              </button>
                              <button>&gt;</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* dev */}
                      <div
                        className='me'
                        style={{
                          display: 'flex',
                          background: '#fff',
                          marginBottom: '10px',
                        }}
                      >
                        <div style={{ width: '50%' }}>
                          <h4>Apollo</h4>
                          <p style={{ fontSize: '10px' }}>
                            Apollo Running shorts
                          </p>

                          <h5 style={{ marginTop: '5px' }}>$50.00</h5>
                          <h6 style={{ marginTop: '5px' }}>Size</h6>

                          <div style={{ display: 'flex', marginTop: '5px' }}>
                            <div
                              style={{
                                width: '30px',
                                height: '30px',
                                border: '2px solid black',
                                textAlign: 'center',
                                marginRight: 2,
                              }}
                            >
                              M
                            </div>
                            <div
                              style={{
                                width: '30px',
                                height: '30px',
                                border: '2px solid black',
                                marginRight: 2,
                                textAlign: 'center',
                              }}
                            >
                              L
                            </div>
                            <div
                              style={{
                                width: '30px',
                                height: '30px',
                                border: '2px solid black',
                                marginRight: 2,
                                textAlign: 'center',
                              }}
                            >
                              XL
                            </div>
                            <div
                              style={{
                                width: '30px',
                                height: '30px',
                                border: '2px solid black',
                                marginRight: 2,
                                textAlign: 'center',
                              }}
                            >
                              S
                            </div>
                          </div>
                          <h6>color</h6>
                          <div style={{ display: 'flex', marginTop: '5px' }}>
                            <div
                              style={{
                                width: '15px',
                                height: '15px',
                                border: '2px solid black',
                                textAlign: 'center',
                                marginRight: 2,
                                background: 'cyan',
                              }}
                            ></div>
                            <div
                              style={{
                                width: '15px',
                                height: '15px',
                                border: '2px solid black',
                                marginRight: 2,
                                textAlign: 'center',
                                background: 'brown',
                              }}
                            ></div>
                            <div
                              style={{
                                width: '15px',
                                height: '15px',
                                border: '2px solid black',
                                marginRight: 2,
                                textAlign: 'center',
                                background: 'yellow',
                              }}
                            ></div>
                            <div
                              style={{
                                width: '15px',
                                height: '15px',
                                border: '2px solid black',
                                marginRight: 2,
                                textAlign: 'center',
                                background: 'red',
                              }}
                            ></div>
                          </div>
                        </div>
                        <div
                          style={{
                            marginRight: 2,
                            textAlign: 'center',
                            width: '50%',
                            display: 'flex',
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'space-between',
                              marginRight: 2,
                            }}
                          >
                            <div>
                              <button>+</button>
                            </div>
                            <div>2</div>
                            <div>
                              {' '}
                              <button>-</button>
                            </div>
                          </div>
                          <div style={{ position: 'relative' }}>
                            <img
                              src='/p.jpg'
                              alt='pi'
                              style={{ height: '100%', objectFit: 'cover' }}
                            />
                            <div
                              style={{
                                position: 'absolute',
                                bottom: 3,
                                right: 5,
                              }}
                            >
                              <button style={{ marginRight: '8px' }}>
                                &lt;
                              </button>
                              <button>&gt;</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </MiniCart>

                    {/* minicart footer */}
                    <div style={{ padding: '10px' }}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          marginBottom: 12,
                        }}
                      >
                        <h4 style={{ color: 'var(--dark)' }}>Total</h4>
                        <h4 style={{ color: 'var(--dark)' }}>$200.00</h4>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <div>
                          <Link
                            to='/cart'
                            onClick={this.handleMouseOver.bind(this)}
                          >
                            <button
                              style={{
                                padding: 10,
                                border: '1px solid black',
                                cursor: 'pointer',
                                fontWeight: 600,
                              }}
                            >
                              VIEW BAG
                            </button>
                          </Link>
                        </div>
                        <div>
                          <button
                            style={{
                              padding: 10,
                              border: 'none',
                              background: 'var(--green)',
                              color: '#fff',
                              cursor: 'pointer',
                              fontWeight: 600,
                            }}
                          >
                            CHECK OUT
                          </button>
                        </div>
                      </div>
                    </div>
                  </MiniCartBox>
                </MiniCartOverlay>
              )}
            </div>
          </HeaderRight>
        </HeaderContent>
      </HeaderWrapper>
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
    changeCurrency: (i) => dispatch(changeCurrency(i)),

    getAllCategories: () => dispatch(getAllCategories()),
    getAllCurrencies: () => dispatch(getAllCurrencies()),
  };
};

const me = withRouter(Header);

export default connect(mapStateToProps, mapDispatchToProps)(me);
