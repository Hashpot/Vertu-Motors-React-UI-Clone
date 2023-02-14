import React from "react";
import './performancepage.css';
import image4 from './Images/Feature-02.jpg';

const Blackbox = () =>{

    return(
        <div className="blackbox" width = {100}>
             <div className = "head-text">
              
             <img className='fourth' src={image4} alt ="img4" />
               
           <div class='performancetext'>
            <h1 className='text1performance'> Electrifying performance <br></br> with the BMW i4 </h1>
            <h3 className='text2performance'> From the cool Trend and SUV-inspired Active <br></br> 
            to the sporty ST-Line </h3>
            <div class="flex-container">

             <div class="flex-child magenta">
              <p className="hrtext">02:05 hr</p>
              <h4 className="charging">Charging at home for a <br></br>Range of 64 miles </h4>
               </div>
  
                <div class="flex-child green">
                  <p className="numbertext">365</p>
                  <p className="electric">Electric range in miles</p>
                 </div>
                </div>

             <button className='test-drive' type="button">Book a test drive </button>
           </div>
           </div> 



        </div>


    )
}

export default Blackbox;


