import styled, { css } from 'styled-components';
export const CardDetails = styled.div`
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
    background: transparent;
    text-align: right;
    width: 80%;
    height: 80%;

    position: absolute;

    font-size: 1.1rem;
    top: 10%;
    bottom: 50%;
  }
`;
