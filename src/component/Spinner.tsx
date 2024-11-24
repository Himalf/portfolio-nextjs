"use client";
import React from "react";

const Spinner = () => {
  return (
    <div className="flex h-screen items-center justify-center overflow-hidden">
      <div className="relative w-40 h-40">
        <div className="absolute inset-0 animate-spin-slow">
          <div className="absolute inset-0 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] border-2 border-[#00fdcf] transition-all duration-1000 ease-out"></div>
        </div>
        <div
          className="absolute inset-[-21%] w-[142%] h-[142%] bg-[url('/assets/thinker.jpg')] bg-contain bg-center bg-no-repeat animate-spin-reverse opacity-100"
        ></div>
      </div>
    </div>
  );
};

export default Spinner;
