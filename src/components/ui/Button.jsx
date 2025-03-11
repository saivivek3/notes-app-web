import React from "react";
import { cn } from "../../lib/cn";

function Button({ children, className }) {
  return (
    <button
      className={cn(
        "py-2 px-4 rounded-lg bg-blue-500 flex items-center justify-center cursor-pointer w-full",
        className && className
      )}
    >
      {children}
    </button>
  );
}

export default Button;
