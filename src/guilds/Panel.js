import { React } from 'react';
import Guild from './Guild'
import './Panel.css';

function Panel(props) {
  return (
    <nav className="Panel">
        <Guild id="global"/>
        <Guild id="bugs"/>
        <Guild id="food"/>
        <Guild id="cats"/>
    </nav>
  )
}

export default Panel;
