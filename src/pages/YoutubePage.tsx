import React from 'react';
import PageTemplate from '../components/common/PageTemplate';
import AdBlock from '../components/main/AdBlock';
import Recommend from '../components/main/Recommend';

const YoutubePage = () => {
  return (
    <PageTemplate>
      <AdBlock />
      <Recommend />
    </PageTemplate>
  );
};

export default YoutubePage;
