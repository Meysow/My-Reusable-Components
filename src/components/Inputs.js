import React from "react";
import ControlledInput from "./ControlledInput";

const Inputs = ({
  label,
  placeholder,
  variant,
  error,
  disabled,
  helperText,
  icon,
  value,
  size,
  fullWidth,
  multiline,
}) => {
  const setVariant = variant ? variant : "default";
  const hasError = error ? error : "";
  const isFullwidth = fullWidth && "fullWidth";
  const isDisabled = disabled ? disabled : "";
  const setSize = size ? size : "md";

  // Helper Text //
  const helperTextComponent = helperText && (
    <span className="helperText">{helperText}</span>
  );

  // Create a Input Component that takes 2 forms, multiline => textarea, otherwise => input //
  let inputComponent = (
    <ControlledInput
      placeholder={placeholder}
      isDisabled={isDisabled}
      value={value}
      rows={multiline}
      setSize={setSize}
      multiline={multiline}
      isFullwidth={isFullwidth}
    />
  );

  // Icon //
  const hasIcon = icon ? icon : []; // return an empty array as a default case, otherwise array [iconPosition, iconName] //
  let iconComponent; // create a component to display the 3 cases : startIcon, endIcon, no icon //

  if (hasIcon[0] === "startIcon") {
    iconComponent = (
      <div className="iconRelative">
        <span className="material-icons-outlined spanStartIcon">
          {hasIcon[1]}
        </span>
        {inputComponent}
      </div>
    );
  } else if (hasIcon[0] === "endIcon") {
    iconComponent = (
      <div className="iconRelative">
        {inputComponent}
        <span className="material-icons-outlined spanEndIcon">
          {hasIcon[1]}
        </span>
      </div>
    );
  } else {
    iconComponent = <>{inputComponent}</>;
  }

  return (
    <div className={`inputWrapper ${isFullwidth}`}>
      <label className={`lbl ${setVariant} ${hasError}`}>
        {label}
        {iconComponent}
        {helperTextComponent}
      </label>
    </div>
  );
};

export default Inputs;
