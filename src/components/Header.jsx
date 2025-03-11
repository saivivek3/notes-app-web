import React from "react";
import Search from "./Search";
import SettingIcon from "../assets/Setting.svg";

function Header() {
  return (
    <header className="flex justify-between items-center px-6 border-b-1 border-b-neutral-800 py-4">
      <h1>All Notes</h1>
      <div className="flex items-center gap-4">
        <Search />
        <img src={SettingIcon} alt="SettingIcon" className="h-6 w-6" />
      </div>
    </header>
  );
}

export default Header;
