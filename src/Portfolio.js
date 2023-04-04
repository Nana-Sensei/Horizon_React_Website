import React from 'react';
import TN1 from './Images/View-3.jpg';
import TN2 from './Images/View-4.jpg';
import TN3 from './Images/View-8.jpg';
import TN4 from './Images/View-2.jpg';
import Card from './Card';
import './horizon.css';

const Plans = () => {
  return (
    <div className="container-fluid menu-list">
      <h2 className="menuTitle text-center"><span className="see">SEE OUR</span> PORTFOLIO</h2>
      <hr/>
      <div className="row cards-row">
        <Card imgsrc={TN1} cardtitle="Huawei Building" body="Lorem ipsum dolor sit amet, consectetur 
          adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>

        <Card imgsrc={TN2} cardtitle="The Riviera" body="Lorem ipsum dolor sit amet, consectetur 
          adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>

        <Card imgsrc={TN3} cardtitle="Cantonments City" body="Lorem ipsum dolor sit amet, consectetur 
          adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>

        <Card imgsrc={TN4} cardtitle="The Village" body="Lorem ipsum dolor sit amet, consectetur 
          adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
      </div>
    </div>
  )
}

export default Plans;