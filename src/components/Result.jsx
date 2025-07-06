import React from 'react';
import { FaEye } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import './Result.css';

const Result = ({ data }) => {
  return (
    <div className="result-container">
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Info</th>
            <th>Enable</th>
            <th>Status</th>
            <th>Client ID</th>
            <th>AlgoName</th>
            <th>MTM</th>
            <th>Alert</th>
            <th>Duration</th>
            <th>Buy/Sell</th>
            <th>Mult</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              <td>{row.number}</td>
              <td>{row.info}</td>
              <td>{row.enable}</td>
              <td>{row.status}</td>
              <td>{row.clientid}</td>
              <td>{row.algo}</td>
              <td>{row.mtm}</td>
              <td>{row.alert}</td>
              <td>{row.duration}</td>
              <td>{row.buy}</td>
              <td>{row.mult}</td>
              <td>
                <button className="action-button">
                  <FaEye />
                </button>
                <button className="action-button">
                  <MdEdit />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Result;
