import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component for routing

interface NavBarProps {
    items: string[];
  }
  
  const NavigationBar: React.FC<NavBarProps> = ({ items }) => {
    return (
      <nav>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </nav>
    );
  };
  export default NavigationBar;