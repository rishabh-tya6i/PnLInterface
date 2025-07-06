import React from 'react';
import './PnLStats.css';
import { motion } from 'framer-motion';

const PnLStats = () => {
  const totalPnl = 7407;
  const maxProfit = 10020;
  const maxLoss = -6141;
  const winRatio = 44.44;

  return (
    <motion.div 
      className="pnl-stats-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="pnl-cards">
        <div className="pnl-card positive">
          <p>Total PnL</p>
          <h2>+{totalPnl.toFixed(2)}</h2>
        </div>
        <div className="pnl-card positive">
          <p>Max Profit</p>
          <h2>+{maxProfit.toFixed(2)}</h2>
        </div>
        <div className="pnl-card negative">
          <p>Max Loss</p>
          <h2>{maxLoss.toFixed(2)}</h2>
        </div>
      </div>

      <hr />

      <div className="win-ratio">
        <p>Winning Ratio:-</p>
        <div className="progress-bar" data-percent={`${winRatio.toFixed(2)}%`}>
            <div className="progress-fill" style={{ width: `${winRatio}%` }}>
            </div>
        </div>

      </div>
    </motion.div>
  );
};

export default PnLStats;
