
import React from 'react';

const Input = ({ label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  className = '',
  checked,
  tel,
  ...rest
}) => {
  return (
    <>
    
       <div className="flex flex-col gap-1">
      {label && <label htmlFor={name} className="text-xs mb-[10px] md:mb-[14px] md:text-[20px] font-normal font-Inter leading-[100%]">{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        value={type === 'checkbox' ? undefined : value}
        checked={type === 'checkbox' ? checked : undefined}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`border  px-3 py-2 rounded-md  outline-none ${className}`}
        {...rest}
      />
    </div>
    </>
  );
}

export default Input;
