import React from "react";

function Header(props) {
  return (
    <div className="mx-60 py-60 items-center justify-center w-1/2 text-justify">
      <div className="flex flex-col">
        <code className="text-lightblue_vs">안녕하세요.</code>
        <code className="text-[#e6f1ff] text-5xl mt-5">안소현입니다</code>
      </div>
      <button
        className="border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2"
        onClick={() => props.SetScroll("Projects")}
      >
        <code>Projects!</code>
      </button>
    </div>
  );
}

export default Header;