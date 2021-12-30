import React from 'react';
import LocationBarChart from './LocationBarChart';
import JobBarChart from './JobBarChart';
import './DashboardStyles.css';


const dummyData = [
  {
    title: 'Total Revenue',
    price: '$406,411.29',
    color: "green",
  },
  {
    title: 'Total Jobs Avg',
    price: '$620',
  },
  {
    title: 'Tickets Created',
    price: '655',
  },
  {
    title: 'Tickets Scheduled',
    price: '735',
  },
  {
    title: 'Outstanding Amount',
    price: '$110,448.8',
    color: "red",
  },
  {
    title: 'Membership Sold',
    price: '105',
  },
  {
    title: 'Jobs Completed',
    price: '$436',
  },
  {
    title: 'Total Cancelled',
    price: '65',
  },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="metrics">
        <h2>Company Metrics</h2>
        <div className="company-metrics">
          {dummyData.map((el, index) => {
            return (
              <div className="card" key={index}>
               <h3 className={el.color ? el.color : ''}>{el.price}</h3>
                <h3>{el.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
      <div className="charts">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h2>Revenue By Job Location</h2>
          <div className="Wrapper">
            <div>
              <LocationBarChart />
            </div>
            <div style={{ marginTop: '20px' }}>
              <LocationBarChart />
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h2>Revenue By Job Types</h2>
          <div className="Wrapper">
            <div>
              <JobBarChart />
            </div>
            <div style={{ marginTop: '20px' }}>
              <JobBarChart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
