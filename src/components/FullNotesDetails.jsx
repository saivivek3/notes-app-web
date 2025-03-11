import React from "react";
import Button from "./ui/Button";

function FullNotesDetails() {
  return (
    <section className="flex-1 px-4">
      <Button>
        <div className="flex-vertical-center gap-1">
          <span className="text-white">+</span>
          <span className="paragraph text-white">Add New Notes</span>
        </div>
      </Button>
    </section>
  );
}

export default FullNotesDetails;
