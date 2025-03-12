import React from "react";

function Tag({ tags }) {
  return tags.map((tag) => (
    <div
      key={tag}
      className="bg-neutral-600 rounded-sm px-2 text-xs tracking-[-0.3px] py-1 text-white"
    >
      {tag}
    </div>
  ));
}

export default Tag;
