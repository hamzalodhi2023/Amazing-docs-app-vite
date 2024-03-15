import React, { useState } from "react";
import Cards from "./components/Cards";

function Foreground() {
  // const data = [
  //   desc,fileSize,closeOrDownload,tagDetails
  // ];
  const data = [
    {
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing amet consectetur adipisicing.",
      fileSize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Hello My name is Hamza Khan Lodhi",
      fileSize: ".5mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Hello", tagColor: "green" },
    },
  ];
  return (
    <div className="fixed z-[3] w-full h-full flex items-center justify-center">
      {data.map((item, index) => (
        <Cards data={item} />
      ))}
    </div>
  );
}

export default Foreground;
