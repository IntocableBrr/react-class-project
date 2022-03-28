import React, { useState, useEffect } from 'react';
import './style.css';
import Navbar from './Components/Navbar/Navbar';
import ColorList from './Components/ColorList/ColorList';
import ColorBox from './Components/ColorBox/ColorBox';
import TicTacToe from './Components/TicTacToe/TicTacToe';

//DCM(1a) -+ import {ColorList, ColorBox} from './Components/ComponentImportList';
//DCM(1b) -- The Code in comment 1a is an alternative way of importing all component pieces in fewer lines of code using the file ComponentImportList.js.

const Routes = {
  TicTacToe: 'Tic Tac Toe'
  ColorList: 'Fungii',
  DakotaPage: 'Dakota',
  ColorBox: 'Damian'
};

export default function App() {
  const [route, setRoute] = useState(null);

  function setNewRoute(newRoute) {
    switch (newRoute) {
      case 'ColorList':
        return <ColorList />;
      case 'TicTacToe':
        return <TicTacToe />;
      case 'ColorBox':
        return <ColorBox />;
      ///  new routes
      case 'DakotaPage':
        return <DakotaPage/>;
      default:
        <div />;
    }
  }

  return (
    <div>
      <Navbar setSelected={setRoute} routes={Routes} />
      {setNewRoute(route)}
    </div>
  );
}
