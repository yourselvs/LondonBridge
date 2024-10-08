import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

const About: React.FC = () => {
  return (<>
  <Link to="/">Home</Link> <Link to="/about">About</Link> <Link to="/news">News</Link>
      <div>About</div>
  </>);
};

const Home: React.FC = () => {
  return (<><Link to="/">Home</Link> <Link to="/about">About</Link> <Link to="/news">News</Link>
    <div>Home</div>
  </>);
};

const News: React.FC = () => {
  return (<><Link to="/">Home</Link> <Link to="/about">About</Link> <Link to="/news">News</Link>
    <div>News</div>
  </>);
};

const App: React.FC = () => {
  return (<>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}/>
            <Route path="/news" element={<News />} />
        </Routes>
    </BrowserRouter>
  </>);
}

export default App;