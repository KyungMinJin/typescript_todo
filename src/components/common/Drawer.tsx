import React from 'react';
import styled from 'styled-components';

const DrawerBlock = styled.div`
  max-width: 240px;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-y: scroll;
  .wrapper {
    margin: 8px 0;
    border-bottom: 1px solid #ececec;
  }
`;

const Item = styled.div`
  height: 40px;
  padding: 0 24px;
`;

const Drawer: React.FC = () => {
  return (
    <DrawerBlock>
      <div className='wrapper'>
        <Item>홈</Item>
        <Item>홈</Item>
        <Item>홈</Item>
      </div>
      <div className='wrapper'>
        <Item>홈</Item>
        <Item>홈</Item>
        <Item>홈</Item>
        <Item>홈</Item>
      </div>
      <div className='wrapper'>
        <Item>구독</Item>
        <Item>홈</Item>
        <Item>홈</Item>
        <Item>홈</Item>
      </div>
      <div className='wrapper'>
        <Item>구독</Item>
        <Item>홈</Item>
        <Item>홈</Item>
        <Item>홈</Item>
      </div>
      <div className='wrapper'>
        <Item>설정</Item>
        <Item>홈</Item>
        <Item>홈</Item>
        <Item>홈</Item>
      </div>
      <footer>
        <div>
          <span>구독</span>
          <span>홈</span>
          <span>홈</span>
          <span>홈</span>
          <span>홈</span>
          <span>홈</span>
          <span>홈</span>
        </div>
        <div>
          <span>홈</span>
          <span>홈</span>
          <span>홈</span>
          <span>홈</span>
          <span>홈</span>
        </div>
      </footer>
    </DrawerBlock>
  );
};

export default Drawer;
