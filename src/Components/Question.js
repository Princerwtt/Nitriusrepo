import React from 'react';
import './Question.css';
import Footer from "./Footer"

const Question = () => {
  return (
    <>
    <div className='main-div'>
    <div className='questions'>
     <div>
        <h3>
     Frequently asked questions
     </h3>
    
     </div>
    <p>Facilisi feugiat nulla quam iaculis vitae. Elementum consequat non. -
    <p> Euismod et massa, laoreet in tristique mauris. 
        <br/>Commodo pellentesque et feugiat faucibus purus
        <br/> 
metus congue imperdiet. Quam platea lectus diam 
<br/>rhoncus sed nunc. Vivamus non convallis fringilla 
<br/>
quam vulputate tristique vulputate convallis sed. 
<br/>Commodo congue sit rutrum pharetra nisi, a.</p>
     </p>  
     
    </div>
    <div className='que-2'>
        <p> <br/></p>
        <h3>Ullamcorper quis lectus aenean gravida in. + </h3>
     </div>
     <div className='que-2'>
        <p> <br/></p>
        <h3>Ullamcorper quis lectus aenean gravida in. + </h3>
     </div>
    </div>
    <Footer/>
    </>
  );
};

export default Question;
