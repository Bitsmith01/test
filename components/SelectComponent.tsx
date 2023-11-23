"use client"
import React from "react";

interface SelectComponentProps {
  options: string[];
}

const SelectComponent: React.FC<SelectComponentProps> = ({ options }) => {
  return (
    <select name="CustomSelect" id="customSelect">
      {options.map((value, index) => (
        <option key={index} value={value}>
          {value}
        </option>
      ))}
    </select>
  );
};

export default SelectComponent;

