import React from "react";

const Button = ({
  children,
  color,
  variant,
  disableShadow,
  disabled,
  icon,
  size,
}) => {
  const setColor = color ? color : "grey";
  const setVariant = variant ? variant : "default";
  const setSize = size ? size : "md";
  const hasIcon = icon ? icon : [];
  const hasShadow = disableShadow && { boxShadow: "none" };

  return (
    <div className="buttonWrapper">
      <button
        className={`btn ${setColor} ${setVariant} ${setSize} ${hasIcon[0]}`}
        style={hasShadow}
        disabled={disabled}
        data-icon={hasIcon[1]}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
