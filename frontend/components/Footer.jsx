import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id="Footer">
        <div className="verticalColumn">
          <h4>CareDash</h4>
          <ul className="verticalList">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
            <li><a>Write a Review</a></li>
          </ul>
        </div>
        <div className="verticalColumn">
          <h4>Specialists</h4>
          <ul className="verticalList">
            <li><a>Primary Care Physicians</a></li>
            <li><a>Pediatricians</a></li>
            <li><a>Optometrists</a></li>
            <li><a>Dentists</a></li>
          </ul>
        </div>
        <div id="SocialmediaInfo">
          <h4>Follow Us</h4>
          <ul className="horizontalList">
            <li>F</li>
            <li>T</li>
            <li>I</li>
            <li>P</li>
          </ul>
        </div>
      </div>
    )
  };
}
