import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewsDD: false
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(target, value) {
    let newState = {};

    newState[target] = value;
    this.setState(newState);
  }

  toggleDD() {
    return (event) => {
      if (this.state.reviewsDD) {
        this.updateState('reviewsDD', false)
      } else {
        this.updateState('reviewsDD', true)
      };
    };
  }

  render () {
    let dropDown

    if (this.state.reviewsDD) {
      dropDown= (
        <ul className="HeaderDropDown">
          <li><h3>FIND</h3></li>
          <li>Primary Care Physician</li>
          <li>Dentist</li>
          <li>Pediatrician</li>
          <li>OB/GYN</li>
          <li>Optometrist</li>
          <li>All Doctors</li>
        </ul>
      )
    }

    return (
      <div id="header">
        <img src="http://i.imgur.com/lAHmool.png"/>
        <div id="DD1">
          <h4 id="addArrow" onClick={this.toggleDD()}>Doctor Ratings & Reviews</h4>
          {dropDown}
        </div>
        <h4>Health & Wellness Articles</h4>
        <h4>Review Your Doctor</h4>
      </div>
    )
  };
}
