import React from "react";
import { MailIcon } from "@heroicons/react/solid";

const Contact = () => {
  return (
    <div id="Contact" className="pb-72 mt-36">
      <div className="table mx-60">
        <MailIcon className="h-5 w-5 mr-4 text-yellow_vs" />
        <code className="table-cell text-[#e6f1ff] text-3xl mt-5 whitespace-nowrap">
          Get In Touch
        </code>
        <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
      </div>
      <div className="text-[#a2aabc] text-lg mt-5 mx-60 flex flex-col items-center text-justify">
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
          <code>
            +82 10-8368-7091
          </code>
        </div>
        <button className=" border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded hover:bg-opacity-10 hover:bg-lightblue_vs w-1/2">
          <a href="assw99145@gmail.com">
            <code>Contact</code>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Contact;
