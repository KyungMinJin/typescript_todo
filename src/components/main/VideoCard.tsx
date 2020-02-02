import React from 'react';
import styled from 'styled-components';

const VideoCardBlock = styled.div`
  margin: 0 8px 40px 8px;
  width: 334px;
  height: 287px;

  .thumbnail {
    height: 187px;
    background: cadetblue;
  }
  .details {
    display: flex;

    .avatar-link {
      width: 36px;
      height: 36px;
      border-radius: 18px;
      background: black;
      margin: 12px 12px 0 0;
    }

    .meta {
      width: 288px;
      height: 96px;
      padding-right: 24px;

      .video-title-link {
        height: 44px;
        margin: 12px 0 4px 0;
        font-size: 1.17em;
      }

      .metadata {
        color: #888888;
      }
    }
  }
`;

type CardProps = {
  title: string;
  channel_name: string;
  view: string;
  created_at: string;
};

function VideoCard({ title, channel_name, view, created_at }: CardProps) {
  return (
    <VideoCardBlock>
      <div className='thumbnail' />
      <div className='details'>
        <div className='avatar-link'></div>
        <div className='meta'>
          <div className='video-title-link'>
            <h3>{title}</h3>
          </div>
          <div className='metadata'>
            <div className='byline-container'>{channel_name}</div>
            <div className='metadata-line'>
              {view}&nbps;•&nbps;{created_at}
            </div>
          </div>
        </div>
      </div>
    </VideoCardBlock>
  );
}

export default VideoCard;
