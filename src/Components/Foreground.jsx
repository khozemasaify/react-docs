import React, { useRef, useState } from "react";
import Card from "./Card";
function Foreground() {
  const ref = useRef(null)
  console.log(ref);
  const data = [
    {
      filesize: ".9mb",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, rem!",
      close: false,
      color:"#000",
      line:true,
      tag: { isopen: true, tagtitle: "DownloadNow", tagColor: "green" },
    },
    {
      filesize: ".9mb",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, rem!",
      close: true,
      line:true,
      tag: { isopen: false, tagtitle: "DownloadNow", tagColor: "red" },
    },
    {
      filesize: ".3mb",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, rem!",
      close: false,
      line:true,
      tag: { isopen: true, tagtitle: "DownloadNow", tagColor: "geen" },
    },
    {
      filesize: "9mb",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, rem!",
      close: true,
      tag: { isopen: true, tagtitle: "DownloadNow", tagColor: "green" },
      line: false,
    },
    {
      filesize: ".6mb",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, rem!",
      close: false,
      tag: { isopen: true, tagtitle: "DownloadNow", tagColor: "gree" },
      line: true,
    },
    {
      filesize: ".9mb",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, rem!",
      close: false,
      tag: { isopen: true, tagtitle: "DownloadNow", tagColor: "gree" },
      line: true,
    },
    {
      filesize: ".4mb",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, rem!",
      close: true,
      tag: { isopen: true, tagtitle: "DownloadNow", tagColor: "gree" },
      line: false,
    },
];
  return (
      <div ref={ref} className="  top-0 w-full h-screen flex gap-6 flex-wrap fixed p-8 z-[3] ">
        {data.map((item, index) => (
          <Card key={index} data={item} Reference={ref} />
        ))}
    </div>
  );
}
export default Foreground;
