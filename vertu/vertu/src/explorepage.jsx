import React from "react";
import "./explorepage.css"
import img4 from "./Images/Feature-01.jpg";



const Box = () =>{
    return(
        <div className="greybox" width = {100}>
       
            <div className = "head-text">
                <div className="thirdimage">
                <img className='third' src={img4} alt ="img4" />
                </div>
           <div class='text-on-image'>
            <h1 className='text1'> Explore the new BMW<br></br> interior </h1>
            <h3 className='text2'> From the cool Trend and SUV-inspired Active <br></br> 
            to the sporty ST-Line, the eighth generation<br></br> 
             Fiesta impresses across the range. </h3>
             <button className='request' type="button">Request a Personalised Video</button>
           </div>
           </div> 
          
          




        </div>






    );
} 

export default Box;
