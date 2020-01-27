import React from 'react';
import styled from 'styled-components';
import {
  MdHome,
  MdSubscriptions,
  MdKeyboardArrowDown,
  MdHistory,
  MdSettings,
  MdVideoLibrary,
  MdFlag
} from 'react-icons/md';
import { FaQuestionCircle, FaUserCircle, FaHotjar } from 'react-icons/fa';
import { AiFillClockCircle, AiFillLike } from 'react-icons/ai';
import { TiSocialYoutube } from 'react-icons/ti';
import { IoMdFilm, IoLogoGameControllerB } from 'react-icons/io';
import { GoBroadcast, GoReport } from 'react-icons/go';

const DrawerBlock = styled.div`
  font-size: 14px;
  max-width: 240px;
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-y: scroll;
  .wrapper {
    margin: 8px 0;
    border-bottom: 1px solid #ececec;
  }
  footer {
    font-size: 12px;
    .foot1 {
      padding: 16px 24px 0 24px;
    }
    .foot2 {
      padding: 12px 24px 0 24px;
    }
    span {
      margin-right: 8px;
    }
    .copyright {
      padding: 16px 24px;
    }
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
        <Item>
          <MdHome style={{ marginRight: 24 }} />홈
        </Item>
        <Item>
          <FaHotjar style={{ marginRight: 24 }} />
          인기
        </Item>
        <Item>
          <MdSubscriptions style={{ marginRight: 24 }} />
          구독
        </Item>
      </div>
      <div className='wrapper'>
        <Item>
          <MdVideoLibrary style={{ marginRight: 24 }} /> 보관함
        </Item>
        <Item>
          <MdHistory style={{ marginRight: 24 }} /> 최근 본 동영상
        </Item>
        <Item>
          <AiFillClockCircle style={{ marginRight: 24 }} />
          나중에 볼 동영상
        </Item>
        <Item>
          <AiFillLike style={{ marginRight: 24 }} />
          좋아요 표시한 동영상
        </Item>
      </div>
      <div className='wrapper'>
        <Item>구독</Item>
        <Item>
          <FaUserCircle style={{ marginRight: 24 }} />
          긱블
        </Item>
        <Item>
          <FaUserCircle style={{ marginRight: 24 }} />
          우왁굳
        </Item>
        <Item>
          <FaUserCircle style={{ marginRight: 24 }} />
          기리보이
        </Item>
        <Item>
          <FaUserCircle style={{ marginRight: 24 }} />
          기리보이
        </Item>
        <Item>
          <FaUserCircle style={{ marginRight: 24 }} />
          기리보이
        </Item>
        <Item>
          <MdKeyboardArrowDown style={{ marginRight: 24 }} />
          2개 더보기
        </Item>
      </div>
      <div className='wrapper'>
        <Item>Youtube 더보기</Item>
        <Item>
          <TiSocialYoutube style={{ marginRight: 24 }} />
          Youtube Premium
        </Item>
        <Item>
          <IoMdFilm style={{ marginRight: 24 }} />
          Youtube 영화
        </Item>
        <Item>
          <IoLogoGameControllerB style={{ marginRight: 24 }} /> 게임
        </Item>
        <Item>
          <GoBroadcast style={{ marginRight: 24 }} /> 실시간
        </Item>
      </div>
      <div className='wrapper'>
        <Item>
          <MdSettings style={{ marginRight: 24 }} />
          설정
        </Item>
        <Item>
          <MdFlag style={{ marginRight: 24 }} />
          신고 기록
        </Item>
        <Item>
          <FaQuestionCircle style={{ marginRight: 24 }} />
          고객센터
        </Item>
        <Item>
          <GoReport style={{ marginRight: 24 }} />
          의견 보내기
        </Item>
      </div>
      <footer>
        <div className='foot1'>
          <span>정보</span>
          <span>프레스</span>
          <span>저작권</span>
          <span>문의하기</span>
          <span>크리에이터</span>
          <span>광고</span>
          <span>개발자</span>
        </div>
        <div className='foot2'>
          <span>이용약관</span>
          <span>개인정보 보호</span>
          <span>정책 및 안전</span>
          <span>새로운 기능 테스트하기</span>
        </div>
        {/* 임시로 16px 사이에 두기 */}
        <div className='copyright' style={{ marginTop: 16 }}>
          © 2020 Google LLC
        </div>
      </footer>
    </DrawerBlock>
  );
};

export default Drawer;
