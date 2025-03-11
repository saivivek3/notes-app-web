import React from "react";

function ArchiveIcon({ fill = "#E0E4EA", className }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M17.5 6.48513V13.5141C17.5 15.9708 15.7657 17.5 13.3113 17.5H6.68865C4.23432 17.5 2.5 15.9708 2.5 13.5133V6.48513C2.5 4.02837 4.23432 2.5 6.68865 2.5H13.3113C15.7657 2.5 17.5 4.03567 17.5 6.48513Z"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 11.667L9.9985 14.167L7.5 11.667"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99835 14.1663V8.33301"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.4447 5.83301H2.54883"
        stroke={fill}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArchiveIcon;
