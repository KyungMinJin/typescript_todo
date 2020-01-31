import React from 'react';
import styled from 'styled-components';
import VideoCard from './VideoCard';

const VideoListBlock = styled.div`
  /* display: flex; */
  /* flex-wrap: wrap; */
  max-width: 85%;
`;

const Wrapper = styled.div`
  display: flex;
`;

function VideoList() {
  return (
    <VideoListBlock>
      <Wrapper>
        <VideoCard
          title='리액트공부하자리액트공부 하자리액트공부하자 리액트공부하자 '
          channel_name='데이식스'
          view='조회수 131만회'
          created_at='1년전'
        />
        <VideoCard
          title='리액트공부하자리액트공부하 자리액트공부하자 리액트공부하자 '
          channel_name='데이식스'
          view='조회수 131만회'
          created_at='1년전'
        />
        <VideoCard
          title='리액트공부하자 리액트공부하자리액트공부하자 리액트공부하자 '
          channel_name='데이식스'
          view='조회수 131만회'
          created_at='1년전'
        />
        <VideoCard
          title='리액트공부하자리액트공부하자리 액트공부하자 리액트공부하자 '
          channel_name='데이식스'
          view='조회수 131만회'
          created_at='1년전'
        />
      </Wrapper>
      <Wrapper>
        <VideoCard
          title='리액트공부하자리액트공부하자리 액트공부하자 리액트공부하자 '
          channel_name='데이식스'
          view='조회수 131만회'
          created_at='1년전'
        />
        <VideoCard
          title='리액트공부하자리액트공부하자리 액트공부하자 리액트공부하자 '
          channel_name='데이식스'
          view='조회수 131만회'
          created_at='1년전'
        />
        <VideoCard
          title='리액트공부하자리액트공부하자리 액트공부하자 리액트공부하자 '
          channel_name='데이식스'
          view='조회수 131만회'
          created_at='1년전'
        />
        <VideoCard
          title='리액트공부하자리액트공부하자리 액트공부하자 리액트공부하자 '
          channel_name='데이식스'
          view='조회수 131만회'
          created_at='1년전'
        />
      </Wrapper>
    </VideoListBlock>
  );
}

export default VideoList;
