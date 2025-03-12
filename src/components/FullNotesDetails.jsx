import React, { useMemo, useState } from "react";
import Button from "./ui/Button";
import { notesData } from "../data";
import Tag from "./ui/Tag";
import { dateFormatConverter } from "../utils/dateFormatConverter";
import { cn } from "../lib/cn";

function FullNotesDetails() {
  const [selectedNoteID, setSelectedNoteID] = useState(null);

  function handleSelectedNote(noteDataID) {
    setSelectedNoteID(noteDataID);
  }
  const fullNotesData = useMemo(() => {
    return notesData.filter((noteData) => !noteData.isArchived);
  }, []);

  return (
    <section className="flex-1 px-4">
      <Button className="mt-2">
        <div className="flex-vertical-center gap-1">
          <span className="text-white">+</span>
          <span className="paragraph text-white">Add New Notes</span>
        </div>
      </Button>
      <section className=" divide-y-[1px] divide-neutral-800 ">
        {fullNotesData.map((noteData) => {
          return (
            <div
              className={cn(
                "mt-2 space-y-2 cursor-pointer p-2",
                selectedNoteID === noteData.id &&
                  "bg-neutral-800 rounded-lg   transition-all duration-300"
              )}
              onClick={() => handleSelectedNote(noteData.id)}
            >
              <h1 className="heading text-white">{noteData.title}</h1>
              <div className="flex gap-2">
                <Tag tags={noteData.tags} />
              </div>
              <p className="text-xs text-neutral-200 tracking-[-0.2px]">
                {dateFormatConverter(noteData.lastEdited)}
              </p>
            </div>
          );
        })}
      </section>
    </section>
  );
}

export default FullNotesDetails;
