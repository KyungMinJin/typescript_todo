import React from 'react';
import styled from 'styled-components';

const RecommendBlock = styled.div`
  .title {
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
