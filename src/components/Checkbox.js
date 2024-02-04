import React from "react";

function Checkbox({ label, value, onChange, image }) {
  return (
    <div className="checkbox-container">
      <img src={image} alt="furniture" />
      <label className="checkbox-label">
        <div className="value-box">{label}</div>
        <input
          type="checkbox"
          className="checkbox-input"
          checked={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default Checkbox;
