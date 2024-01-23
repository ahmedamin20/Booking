import React from "react";
interface props {
  type: string;
  placeholder: string;
  name: string;
  value: string;
  require: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const CustomInput = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  require,
}: props) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {placeholder}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type={type}
          name={name}
          value={value}
          required={require}
          onChange={onChange}
          id={name}
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="0.00"
        />
      </div>
    </div>
  );
};

export default CustomInput;
