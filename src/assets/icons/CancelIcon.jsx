import React from "react";

const CancelIcon = () => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_125_2926)">
        <rect
          width="32"
          height="32"
          rx="16"
          transform="matrix(1 0 0 -1 8 32)"
          fill="#FCFCFD"
          fillOpacity="0.1"
        />
        <g clipPath="url(#clip0_125_2926)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289L24 14.5858L29.2929 9.29289C29.6834 8.90237 30.3166 8.90237 30.7071 9.29289C31.0976 9.68342 31.0976 10.3166 30.7071 10.7071L25.4142 16L30.7071 21.2929C31.0976 21.6834 31.0976 22.3166 30.7071 22.7071C30.3166 23.0976 29.6834 23.0976 29.2929 22.7071L24 17.4142L18.7071 22.7071C18.3166 23.0976 17.6834 23.0976 17.2929 22.7071C16.9024 22.3166 16.9024 21.6834 17.2929 21.2929L22.5858 16L17.2929 10.7071C16.9024 10.3166 16.9024 9.68342 17.2929 9.29289Z"
            fill="#FCFCFD"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_125_2926"
          x="0"
          y="0"
          width="48"
          height="48"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="8"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_125_2926"
          />
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="8" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0583333 0 0 0 0 0.0583333 0 0 0 0 0.0583333 0 0 0 0.2 0"
          />
          <feBlend
            mode="multiply"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_125_2926"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_125_2926"
            result="shape"
          />
        </filter>
        <clipPath id="clip0_125_2926">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(16 8)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CancelIcon;
