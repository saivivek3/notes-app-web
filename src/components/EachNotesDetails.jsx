import React from "react";
import { notesData } from "../data";
import TagIcon from "../assets/tag.svg";
import ClockIcon from "../assets/Clock.svg";
import { dateFormatConverter } from "../utils/dateFormatConverter";

function EachNotesDetails() {
  const firstNote = notesData.find((note) => note.id === 1);
  return (
    <section className="flex-3 p-4">
      <div className="max-w-[300px] space-y-3">
        <h1>{firstNote.title}</h1>
        {/* tags */}
        <div className="grid grid-cols-2">
          <div className="flex-vertical-center gap-1">
            <img src={TagIcon} alt="Tagicon" className="h-4 w-4" />
            <span className="text-sm tracking-[-0.3px] text-neutral-300">
              Tags
            </span>
          </div>
          <p className="text-sm tracking-[-0.2px] text-white">
            {firstNote.tags.join(",")}
          </p>
        </div>
        {/* last editing */}
        <div className="grid grid-cols-2">
          <div className="flex-vertical-center gap-1">
            <img src={ClockIcon} alt="clockIcon" className="h-4 w-4" />
            <span className="text-sm tracking-[-0.3px] text-neutral-300">
              Last edited
            </span>
          </div>
          <p className="text-sm tracking-[-0.2px] text-white">
            {dateFormatConverter(firstNote.lastEdited)}
          </p>
        </div>
      </div>

      <div className="border-neutral-800 border-b py-4"></div>
    </section>
  );
}

export default EachNotesDetails;
