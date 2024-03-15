import React, { useRef, useState } from "react";
import Cards from "./components/Cards";

function Foreground() {
  const ref = useRef(null);
  const data = [
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing amet consectetur adipisicing.",
      fileSize: ".9mb",
      close: false,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "bg-blue-600" },
    },
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing amet consectetur adipisicing.",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "bg-red-600" },
    },
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing amet consectetur adipisicing.",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "bg-green-600" },
    },
  ];

  return (
    <div
      ref={ref}
      className="fixed overflow-hidden z-[3] w-full h-full flex gap-5 flex-wrap"
    >
      {data.map((item, index) => (
        <Cards data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
