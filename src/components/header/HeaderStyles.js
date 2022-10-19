import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background: #fdfdfd;
  height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
`;
export const HeaderContent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`;

export const HeaderRight = styled.div`
  display: flex;
  width: 18vh;
  justify-content: space-between;
  align-items: center;
`;

export const Badge = styled.span`
  position: absolute;
  right: -18px;
  top: -17px;
  padding: 4px 8px;
  border-radius: 50%;
  background: var(--dark);
  color: #fff;
  cursor: pointer;
`;
export const CartIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  position: relative;
`;

export const HeaderCenter = styled.div`
  margin-right: 200px;
  cursor: pointer;
`;

export const HeaderLeft = styled.div`
  display: flex;
  .link-container {
    margin-right: 15;
    padding: 1.5rem;

    text-transform: uppercase;
  }
  .active {
    border-bottom: 3px solid red;
  }
`;

//from component2
//mini
export const MiniCartOverlay = styled.div`
  width: 100%;
  position: absolute;
  right: 0;
  top: 12vh;
  height: 100vh;
  background: gray;
  opacity: 0.9;
  display: flex;
  justify-content: flex-end;
`;
export const MiniCartBox = styled.div`
  width: 22vw;
  background: #fff;
  height: 400px;
  margin-right: 40px;

  z-index: 50;
`;
export const MiniCart = styled.div`
  height: 250px;
  overflow-y: auto;
  padding: 10px;

  background: #fff;

  &::-webkit-scrollbar {
    width: 5px;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: rgb(229, 154, 154);
  }
`;
