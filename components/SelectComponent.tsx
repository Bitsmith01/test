import React, { useState, useEffect } from "react";

interface SelectComponentProps {
  options: string[];
  onChange: (value: string) => void;
}

const SelectComponent: React.FC<SelectComponentProps> = ({ options, onChange }) => {
  const [selectedValue, setSelectedValue] = useState(options[0]);
  const [isListVisible, setListVisible] = useState(false);
  const [firstOption, setFirstOption] = useState(options[0]);

  useEffect(() => {
    setFirstOption(selectedValue);
  }, [selectedValue]);

  return (
    <div className="flex flex-col space-y-1">
      <button
        className="w-fit h-10 p-1 rounded-md bg-white text-sm border-[1px] flex justify-between items-center space-x-2"
        onClick={() => setListVisible(!isListVisible)}
      >
        <span>{firstOption}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="gray"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      {isListVisible && (
        <ul className="rounded-md border-[1px] w-[70%]">
          {options.map((option, index) => (
            <li
              key={index}
              className={`flex h-8 text-sm justify-center items-center cursor-pointer ${
                index % 2 === 0 ? "bg-[#89a5d6]" : "bg-white"
              }`}
              onClick={() => {
                setSelectedValue(option);
                setListVisible(false);
                onChange(option);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectComponent;
