import React from 'react';

const ExpensesFilter = ({ changeData }) => {
  return (
    <div className="dropdown">
      <div className="dropdown_control">
        <label>Kategori Keluhan</label>
        <select onChange={(e) => changeData('category', e.target.value)}>
          <option value="none">None...</option>
          <option value="Komputer dan Laptop">Komputer {'&'} Laptop</option>
          <option value="cctv">CCTV</option>
          <option value="ac">AC</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
