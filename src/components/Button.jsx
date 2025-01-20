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
  border,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`px-4 py-2 text-center font-geist ${border ? border : "border border-primary"} ${
        radius ? radius : "rounded-full"
      } ${weight ? weight : "font-semibold"} ${
        textSize ? textSize : "text-sm md:text-base"
      } ${
        bg
          ? bg
          : "bg-primary text-white transition-all duration-500 hover:bg-white hover:text-primary"
      } ${width ? width : "w-full sm:w-auto"} ${height ? height : "h-12"}`}
    >
      {endIcon ? (
      <span className={`${endIcon && "flex items-center gap-2"}`}>
        {text}
        {endIcon && endIcon}
      </span>
      ): text}
      
    </button>
  );
};

export default Button;
