import React from 'react';
import './User.css';
import Image from './Image/jane-doe.jpg';
import Question from './Question';


const User = () => {
  return (
    <>
    <div className='user'>
      <div className="profile">
        <img src={Image} alt="John Doe" className="profile-pic" />
        <h4>John Doe <p>Stanford University | MS, Civil Engineering</p> </h4>
      </div>
      
      <div className="profile">
        <img src={Image} alt="Jane Doe" className="profile-pic" />
        <h4>Jane Doe <br/> <p>Stanford University | MS, Civil Engineering</p></h4>
      </div>
      
    </div>
    <Question/>
    </>
  );
};

export default User;
