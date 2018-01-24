import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Footer extends Component {
  render(){
   return (
    <div className="footer">
     <div className="fttr_bttn_primary"> 
       <button className="fftr_exchange">Contact Us</button>
       <button className="fftr_exchange">Fees</button>
       <button className="fftr_exchange">Privacy Policy</button>
       <button className="fftr_exchange">Terms and Conditions</button>
     </div>    
     <div className="fttr_title"> 
        <div className="divider"></div>
        <div className="fttr_title">
          <span className="fttr_name_address">HRK COIN</span>
          <span className="fttr_address">@HRK Solutions INC, Frisco, Texas, US </span>
        </div>
     </div>
    </div>
  )
 }
}

export default connect(null)(Footer);
