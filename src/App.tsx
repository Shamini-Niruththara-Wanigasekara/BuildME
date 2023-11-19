import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import RootRouter from './routes.tsx';
import BuilderComponent from './Components/builderComponents.tsx';
import NavigationBar from './Components/NavigtionBar/navigationBar.tsx';

const App: React.FC = () => {
  const navItems = ['Home', 'About', 'Contact'];
//function App() {
  return (
    <><><BrowserRouter>
      <RootRouter />
    </BrowserRouter>
      <BuilderComponent /></><div>
        <NavigationBar items={navItems} />
      </div></>

  );
}

export default App;



 
  

