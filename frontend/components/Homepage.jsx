import React from 'react';
import Header from './Header.jsx'
import HomePageBody from './HomePageBody.jsx'
import Footer from './Footer.jsx'

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div id="wrapper">
        <Header/>
        <HomePageBody/>
        <Footer/>
      </div>
    )
  };
}


















//
