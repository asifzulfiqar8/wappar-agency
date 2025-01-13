import React from "react";

const Button = ({
  text,
  width,
  bg,
  height,
  textSize,
  endIcon,
  weight,
  radius,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`px-4 py-2 text-center border border-primary font-geist ${
        radius ? radius : "rounded-full"
      } ${weight ? weight : "font-semibold"} ${
        textSize ? textSize : "text-sm md:text-base"
      } ${bg ? bg : "bg-primary text-white"} ${
        width ? width : "w-full sm:w-auto"
      } ${height ? height : "h-12"}`}
    >
      <span className={`${endIcon && "flex items-center gap-2"}`}>
        {text}
        {endIcon && endIcon}
      </span>
    </button>
  );
};

export default Button;
