import React from 'react';
import Selector from '../components/Selector';
import Result from '../components/Result';
import Graphs from '../components/Graphs';
import resultData from '../data/resultData.json';
import PnLStats from '../components/PnLStats';

const Home = () => {
  return (
    <div className="page-content">
      <Selector />
      <Result data={resultData} />
      <PnLStats />
      <div style={{ padding: '16px' }}>
        <Graphs />
      </div>
    </div>
  );
};

export default Home;
