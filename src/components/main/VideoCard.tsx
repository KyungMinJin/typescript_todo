import React from 'react';
import styled from 'styled-components';

const VideoCardBlock = styled.div`
  margin: 0 8px 40px 8px;
  width: 360px;
  height: 301px;

  .thumbnail {
    height: 202px;
    background: cadetblue;
  }
`;

function VideoCard() {
  return (
    <VideoCardBlock>
      <div className='thumbnail' />
    </VideoCardBlock>
  );
}

export default VideoCard;
