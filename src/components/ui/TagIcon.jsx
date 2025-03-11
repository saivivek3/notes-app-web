import React from "react";

function TagIcon({className,fill="#E0E4EA"}) {
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.51318 4.97239C2.51562 3.79591 3.40507 2.74106 4.55965 2.54241C4.7964 2.50106 7.5734 2.50674 8.72233 2.50754C9.85909 2.50836 10.828 2.917 11.6307 3.71808C13.335 5.41914 15.0377 7.12183 16.7379 8.82616C17.7441 9.83399 17.7579 11.381 16.7558 12.3921C15.3101 13.8515 13.8571 15.3037 12.3985 16.7493C11.3883 17.7507 9.84125 17.7377 8.83259 16.7315C7.11287 15.0166 5.39315 13.3017 3.68074 11.5796C3.01831 10.9132 2.62751 10.108 2.54075 9.16666C2.47102 8.41424 2.51156 5.61698 2.51318 4.97239Z"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.25593 6.9291C8.25268 7.65396 7.64702 8.2499 6.91487 8.24827C6.18757 8.24666 5.5819 7.64017 5.58596 6.91775C5.59082 6.1637 6.18757 5.57587 6.94648 5.57911C7.66647 5.58155 8.25917 6.19208 8.25593 6.9291Z"
        stroke={fill}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default TagIcon;
