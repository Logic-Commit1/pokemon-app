import React, { useState } from "react";
import "./FilterModal.css";

const FilterModal = ({
  typesList,
  selectedTypes,
  setSelectedTypes,
  onClose,
  onSelectType,
}) => {
  const handleCheckboxChange = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((item) => item !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSelectType(selectedTypes);
    console.log(selectedTypes);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Types</h2>
        <form onSubmit={handleSubmit}>
          <ul>
            {typesList.map((type, index) => (
              <li key={index}>
                <label>
                  <input
                    type="checkbox"
                    value={type}
                    checked={selectedTypes.includes(type)}
                    onChange={() => handleCheckboxChange(type)}
                  />
                  {type}
                </label>
              </li>
            ))}
          </ul>
          <button type="submit">Submit</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default FilterModal;
