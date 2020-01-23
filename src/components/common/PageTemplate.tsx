import React from 'react';
import styled from 'styled-components';
import Drawer from './Drawer';
import Header from './Header';

const Wrapper = styled.div`
  display: flex;
`;

const PageTemplate: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>
        <Drawer />
        <div className='child'>{children}</div>
      </Wrapper>
    </>
  );
};

export default PageTemplate;
