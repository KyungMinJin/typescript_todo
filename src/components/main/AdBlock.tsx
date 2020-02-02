import React from 'react';
import styled from 'styled-components';

const AdBlockBlock = styled.div`
  margin: 12px 24px 0 24px;
  display: flex;
  .left {
    width: 828px;
    height: 239px;
    margin-right: 16px;
    background: gray;
  }
  .right {
    width: 436px;
    height: 239px;
    background: #ecfe42;
  }
`;

const AdBlock: React.FC = () => {
  return (
    <AdBlockBlock>
      <div className='left'></div>
      <div className='right'></div>
    </AdBlockBlock>
  );
};

export default AdBlock;
