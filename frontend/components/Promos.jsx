import React from 'react';

export default class Promos extends React.Component {
  render() { return (
    <div id="Promos">
      <h3>Reasons to Sign Up as a Provider on CareDash</h3>
      <ul id="reasons">
        <li>
          <img src="https://d2p6rm2rz85klc.cloudfront.net/caredash/site/doctor-stethoscope-icon.png"/>
          <h4>FIND A NEW PROVIDER</h4>
          <p>Search our database of millions of doctors to find one that's right for you.</p>
          <button className="greenButton">Search Now</button>
        </li>
        <li>
          <img src="https://d2p6rm2rz85klc.cloudfront.net/caredash/site/review-bubble-icon-2.png"/>
          <h4>REVIEW YOUR PROVIDER</h4>
          <p>Write a doctor review to let others know about your experience.</p>
          <button className="greenButton">Write a Review</button>
        </li>
        <li>
          <img src="https://d2p6rm2rz85klc.cloudfront.net/caredash/site/doctor-profile-icon.png"/>
          <h4>PROVIDERS: UPDATE YOUR PROFILE</h4>
          <p>Update, make changes, or add to your CareDash profile.</p>
          <button className="greenButton">Sign Up Now</button>
        </li>
      </ul>
    </div>
  )}
}
