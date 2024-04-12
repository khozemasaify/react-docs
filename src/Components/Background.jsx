import React from "react";

function Background() {
    React
  return (
    <>
    <div className=" w-full h-screen fixed  z-[0]">
      <div className="absolute left-1/2 -translate-x-1/2 py-12 font-bold text-neutral-700/100  text-xl">
        Documents
      </div>
      <h1 className="  text-zinc-900 absolute top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%] tracking-tighter font-semibold text-[13vw] ">
        Docs.
      </h1>
    </div>
    </>
  );
}

export default Background;
