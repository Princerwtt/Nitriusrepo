import React from 'react';
import './Batches.css';
import BatchesDetails from "./BatchesDetails"
import OtherDetails from './OtherDetails';

const Batches = () => {
  return (
    <div>
      <div className='heading'>
        <h2>Our Upcoming Batches</h2>
        <h3>VIEW ALL BATCHES »</h3>
      </div>
      <div className="batches">
        <div className="batch-details">
          <div className="batch-type">
            <h3>BATCHTYPE</h3>
            <h3>NAME</h3>
            <h3>DURATION</h3>
            <h3>DETAILS</h3>
            <h3>TIMINGS</h3>
            <h3>FEE</h3>
          </div>
          {/* Example batch data */}
          <BatchesDetails/>
          <br/>
          <BatchesDetails/>
          <br/>
          <BatchesDetails/>
          <br/>
          <BatchesDetails/>
        
        </div>
      </div>
      <div className='mid-strip'>
          <h3>
          Enim, erat curabitur ac et est,lectus quis.
          </h3>
          <button className='learn-more'>Learn More</button>
        </div>
        <OtherDetails/>
    </div>
  );
};

export default Batches;
