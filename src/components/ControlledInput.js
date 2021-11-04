import React, { useState } from "react";

const ControlledInput = ({
  placeholder,
  isDisabled,
  value,
  setSize,
  isFullwidth,
  multiline,
}) => {
  const [input, setInput] = useState({ ...value });

  const handleInputChange = (e) =>
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value,
    });

  return multiline ? (
    <textarea
      className={`ipt ${setSize} ${isFullwidth}`}
      placeholder={placeholder}
      disabled={isDisabled}
      onChange={handleInputChange}
      rows={multiline}
      defaultValue={value}
    />
  ) : (
    <input
      className={`ipt ${setSize} ${isFullwidth}`}
      placeholder={placeholder}
      disabled={isDisabled}
      onChange={handleInputChange}
      defaultValue={value}
    />
  );
};

export default ControlledInput;
