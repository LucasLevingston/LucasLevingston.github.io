import React from "react";

export default function Header() {
  return (
    <div className="hover:text-mainTextColor">
      <div
        className="text-left min-w-[50%] bg-aboutBgColor"
        id="about-container "
      >
        <h1 className="text-4xl 2xl:text-8xl mb-[15px] text-bioBorderColor">
          Lucas Levingston
        </h1>
        <p
          className="text-[20px] 2xl:text-6xl 2xl:pb-6 2xl:pt-3 mb-[15px] font-bold text-mainColor"
          id="title"
        >
          <span>Desenvolvedor Full-Stack</span>
        </p>
      </div>
    </div>
  );
}
