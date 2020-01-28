import React from 'react';
import './Menu.css'

const Menu = ( {updateSource} ) => {
    return (
      <div className='Menu'>
        <button className='src-btn' name='local' onClick={updateSource}>Local News</button>
        <button className='src-btn' name='technology' onClick={updateSource}>Technology</button>
        <button className='src-btn' name='entertainment' onClick={updateSource}>Entertainment</button>
        <button className='src-btn' name='science' onClick={updateSource}>Science</button>
        <button className='src-btn' name='health' onClick={updateSource}>Health</button>
      </div>
    )
  }


export default Menu;
