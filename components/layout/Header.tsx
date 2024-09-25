import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header>
      <nav className="bg-desaturated-dark-cyan">
        <Image src={"/images/bg-header-desktop.svg"} width={1000} height={500} alt="bg" className="w-full h-72" />
      </nav>
    </header>
  );
};

export default Header;
