import React from "react";

const Textarea = ({
  textColor,
  background,
  border,
  label,
  type = "text",
  icon,
  height,
  labelText,
  ...rest
}) => {
  return (
    <div>
      <label
        className={`${
          labelText
            ? labelText
            : "text-white text-base md:text-[22px] mb-2 md:mb-3"
        } font-geist font-medium  block`}
      >
        {label}
      </label>
      <div
        className={`${height && height} flex items-center ${
          border ? border : "border border-[#FFFFFF1A]"
        } bg-grad  rounded-[16px] shadow-sm w-full`}
        style={{
          background:
            background ||
            "linear-gradient(0deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 88.89%)",
        }}
      >
        {icon && (
          <span className="mr-4 text-white text-base md:text-[22px]">
            {icon}
          </span>
        )}
        <textarea
          rows={4}
          type={type}
          {...rest}
          className={`py-3 md:py-5 px-4 md:px-6 bg-transparent outline-none ${
            textColor ? textColor : "text-white text-base md:text-[22px]"
          }  font-geist w-full`}
        />
      </div>
    </div>
  );
};

export default Textarea;
