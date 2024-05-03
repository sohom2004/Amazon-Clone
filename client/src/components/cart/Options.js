import React from 'react';
import './options.css';

const Options = () => {
  return (
    <div className='options'>
        <select>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
        </select>
        <p>Delete</p><span>|</span>
        <p>Save For Later</p><span>|</span>
        <p>See More Like This</p>
    </div>
  )
}

export default Options
