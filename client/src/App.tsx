import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import Parking from './pages/parking';
import Settings from './pages/settings';

const App: React.FC = () => {
  return (<>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/parking" element={<Parking />}/>
            <Route path="/settings" element={<Settings />} />
        </Routes>
    </BrowserRouter>
  </>);
}

export default App;