import React from 'react';
import styled from 'styled-components';
import { MdMenu, MdVideoCall, MdApps, MdNotifications } from 'react-icons/md';
import { TiSocialYoutube } from 'react-icons/ti';
import { FaUserCircle } from 'react-icons/fa';

const HeaderBlock = styled.div`
  display: flex;
  width: 100%;
  height: 56px;
  padding: 0 16px;
  align-items: center;
  .wrapper {
    display: flex;
    align-items: center;

    .toggle-menu {
      width: 24px;
      height: 24px;
      /* padding: 8px; */
      margin-right: 16px;
    }
    .brand {
      width: 129px;
      height: 24px;
    }
  }

  .search {
    margin: 0 40px;
    form {
      margin: 0 260px;
    }
  }
  .end {
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      margin-right: 8px;
    }
    .user {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 60px;
      height: 40px;
    }
  }
`;

const StyledInput = styled.input`
  width: 575px;
  height: 30px;
  border-radius: 2px 0 0 2px;
  padding: 3px 6px;
  background: none;
  border: 1px solid #e2e2e2;
  border-right: none;
`;

const Button = styled.button`
  width: 65px;
  height: 30px;
  padding: 2px 7px;
  border-radius: 0 2px 2px 0;
  border: 1px solid #e2e2e2;
  background: #eeeeee;
`;

const Header: React.FC = () => {
  return (
    <HeaderBlock>
      <div className='wrapper'>
        <div className='toggle-menu'>
          <MdMenu />
        </div>
        <div className='brand'>
          <TiSocialYoutube style={{ color: 'Red', fontSize: 20 }} /> Youtube
        </div>
      </div>
      <div className='search'>
        <form>
          <StyledInput placeholder='검색' />
          <Button>검색</Button>
        </form>
      </div>
      <div className='end'>
        <div className='icon'>
          <MdVideoCall />
        </div>
        <div className='icon'>
          <MdApps />
        </div>
        <div className='icon'>
          <MdNotifications />
        </div>
        <div className='user'>
          <FaUserCircle />
        </div>
      </div>
    </HeaderBlock>
  );
};

export default Header;
