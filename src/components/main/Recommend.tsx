import React from 'react';
import styled from 'styled-components';

const RecommendBlock = styled.div`
  margin: 0 24px;

  .title {
    font-size: 20px;
    margin: 36px 0 24px 24px;
  }
`;

function Recommend() {
  return (
    <RecommendBlock>
      <div className='title'>맞춤 동영상</div>
    </RecommendBlock>
  );
}

export default Recommend;
