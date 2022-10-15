import React, { useState } from 'react';
import MonthsData from '../data/months.json';

export const MonthForm = ({ setMonth }) => {
  const [value, setValue] = useState(MonthsData[0].id);

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleSubmit = () => {
    setMonth(value);
  }

  return (
    <div className="formContainer">
      <div className="monthForm">
        <select className="selectMonth" onChange={(e) => handleChange(e)} value={value}>
          {MonthsData.map((item) => {
            return (
              <option key={item.id} value={item.id}>{item.name}</option>
            )})}
        </select>
        <button className="butt" onClick={handleSubmit}>Prześlij</button>
      </div>
    </div>
  )
}