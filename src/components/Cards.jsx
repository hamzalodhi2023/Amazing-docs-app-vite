import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

function Cards({ data }) {
  return (
    <div className="m-10 relative w-60 h-72 bg-zinc-900 rounded-[45px] text-white  px-5 py-10 overflow-hidden">
      <FaRegFileAlt />
      <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full   left-0">
        <div className="flex items-center justify-between mb-3 py-3 px-8">
          <h5>{data.fileSize}</h5>
          <span className="flex rounded-full items-center justify-center bg-zinc-600 w-7 h-7">
            <FiDownload color="#fff" />
          </span>
        </div>
        <div className="tag w-full py-4 bg-green-600 flex items-center justify-center">
          <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
        </div>
      </div>
    </div>
  );
}

export default Cards;
