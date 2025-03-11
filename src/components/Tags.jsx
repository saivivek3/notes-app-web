import React, { useMemo, useState } from "react";
import { notesData } from "../data";
import CheveronRightIcon from "../assets/Chevron-right.svg";
import { cn } from "../lib/cn";
import TagIcon from "./ui/TagIcon";

function Tags() {
  const [selectedTag, setSelectedTag] = useState(null);
  const allTags = useMemo(() => {
    return notesData
      .flatMap((note) => note.tags)
      .reduce((acc, tag) => {
        if (!acc.includes(tag)) {
          acc.push(tag);
        }
        return acc;
      }, [])
      .sort((a, b) => a.localeCompare(b));
  }, []);

  function handleSelectedTag(tag) {
    setSelectedTag(tag);
  }
  return (
    <section className="space-y-3">
      {allTags.map((tag) => (
        <div
          key={tag}
          className={cn(
            "flex-vertical-center justify-between cursor-pointer p-2 ",
            selectedTag === tag &&
              "bg-neutral-800 rounded-lg transition-all duration-300 "
          )}
          onClick={() => handleSelectedTag(tag)}
        >
          <div className="flex-vertical-center gap-2">
            <TagIcon />
            <p className="text-neutral-200 font-medium text-sm tracking-[-0.2px]">
              {tag}
            </p>
          </div>
          {selectedTag === tag && (
            <img src={CheveronRightIcon} alt="cheveron-right" />
          )}
        </div>
      ))}
    </section>
  );
}

export default Tags;
