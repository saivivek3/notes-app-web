import React, { useState } from "react";
import FeatherIcon from "../assets/Feather.svg";
import NotesIcon from "../assets/Notes.svg";
import HomeIcon from "./ui/HomeIcon";
import ArchiveIcon from "./ui/ArchiveIcon";
import { cn } from "../lib/cn";
import Tags from "./Tags";
import ChevronRightIcon from "../assets/Chevron-right.svg";

function Sidebar() {
  const [selectedItem, setSelectedItem] = useState(null);

  function handleSelectedItem(item) {
    setSelectedItem(item);
  }
  return (
    <div className="min-w-60  border-r-neutral-800 border-r-2 px-2">
      {/* Logo-start */}
      <div className=" gap-1 flex-vertical-center mb-4">
        <img
          src={FeatherIcon}
          alt="Feather Icon"
          className="w-7 h-7 object-cover"
        />
        <img
          src={NotesIcon}
          alt="Notes Icon"
          className="w-fit h-7 object-cover"
        />
      </div>
      {/* Logo-end */}
      {/* Tabs-start */}
      <div className="space-y-2 text-white mb-4 ">
        <div
          className={cn(
            "flex-vertical-center justify-between cursor-pointer p-2",
            selectedItem === "all" &&
              "bg-neutral-800 rounded-lg   transition-all duration-300 "
          )}
          onClick={() => handleSelectedItem("all")}
        >
          <div className="flex-vertical-center gap-2">
            <HomeIcon
              fill={selectedItem === "all" ? "#335cff" : "#E0E4EA"}
              className="transistion-all duration-300"
            />
            <p className="paragraph text-white ">All Notes</p>
          </div>
          {selectedItem === "all" && (
            <img src={ChevronRightIcon} alt="chevron-right" />
          )}
        </div>
        <div
          className={cn(
            "flex-vertical-center justify-between cursor-pointer p-2 ",
            selectedItem === "archived" &&
              "bg-neutral-800 rounded-lg    transition-all duration-300 "
          )}
          onClick={() => handleSelectedItem("archived")}
        >
          <div className="flex-vertical-center gap-2">
            <ArchiveIcon
              fill={selectedItem === "archived" ? "#335cff" : "#E0E4EA"}
              className="transistion-all duration-300"
            />
            <p className=" text-white  paragraph">Archived Notes</p>
          </div>
          {selectedItem === "archived" && (
            <img src={ChevronRightIcon} alt="chevron-right" />
          )}
        </div>
      </div>
      {/* Tabs-end */}

      <div className="border border-neutral-800"></div>
      <section className="my-4 space-y-3 p-2">
        <h2 className=" text-neutral-500 paragraph">
          Tags
        </h2>
        <Tags />
      </section>
    </div>
  );
}

export default Sidebar;
