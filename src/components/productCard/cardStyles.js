import styled, { css } from 'styled-components';
export const CardFrame = styled.div`
  padding: 8px;

  background: #fff;
  /* background: #f3f5f7; */

  width: 385px;
  height: 470px;
  position: relative;
  transition: all 0.7s ease;

  ${(props) =>
    props.inStock === false &&
    css`
      background: #fff;
      opacity: 0.5;
    `}

  &.instock::before {
    content: 'OUT OF STOCK';

    text-align: center;
    width: 385px;
    height: 365px;
    position: absolute;
    background: transparent;
    font-size: 1.1rem;
    top: 30%;
    bottom: 50%;
  }

  img {
    /* max-width: 356px; */
    height: 340px;
    object-fit: cover;
    width: 100%;
    cursor: pointer;
  }

  #cart {
    background-color: var(--green);
    padding: 0.3rem;
    border-radius: 50%;
    font-size: 2rem;
    color: var(--white);
    text-align: center;
    position: absolute;
    right: 2.1rem;
    transition: all 0.7s ease;
    cursor: pointer;
    visibility: hidden;
  }

  &:hover #cart {
    visibility: visible;
    transition: all 0.7s ease;
    transform: translateY(-1.5rem);

    ${(props) =>
      props.inStock === false &&
      css`
        background: #fff;
        opacity: 0.2;
        visibility: hidden;
      `}
  }
`;
