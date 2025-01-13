const CheckedIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none">
      <g
        filter="url(#a)"
        // style={{
        //   mixBlendMode: "overlay",
        // }}
      >
        <path
          fill="#000"
          fillOpacity={0.59}
          fillRule="evenodd"
          d="M9 16.833A8.333 8.333 0 1 0 9 .166a8.333 8.333 0 0 0 0 16.667Zm4.755-10.244a.833.833 0 1 0-1.178-1.179l-4.41 4.41-1.912-1.91A.833.833 0 0 0 5.077 9.09l2.5 2.5a.833.833 0 0 0 1.178 0l5-5Z"
          clipRule="evenodd"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="a"
          width={57.188}
          height={57.188}
          x={-19.595}
          y={-20.095}
          // colorInterpolationFilters="sRGB"
          // filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation={10.13} />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_68_1195"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          {/* <feOffset dy={1.013} /> */}
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
          <feBlend
            in2="effect1_backgroundBlur_68_1195"
            result="effect2_dropShadow_68_1195"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_68_1195"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dx={1.013} dy={1.013} />
          <feGaussianBlur stdDeviation={1.013} />
          <feComposite in2="hardAlpha" k2={-1} k3={1} operator="arithmetic" />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0" />
          <feBlend in2="shape" result="effect3_innerShadow_68_1195" />
        </filter>
      </defs>
    </svg>
  );
};

export default CheckedIcon;
