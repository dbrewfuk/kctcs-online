import React from "react";

function Button({ type, label, href, size, onClick, style, children }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      onClick && onClick(event);
    }
  };

  return (
    <a
      href={href}
      onClick={onClick}
      role="button"
      aria-label={label}
      tabIndex="0"
      onKeyDown={handleKeyDown}
      className={`cursor-pointer rounded-full bg-[#00467F] font-[600] border whitespace-nowrap transition ease-in-out duration-[250ms] ${type === "primary" ? "bg-[#00467F] border-[#00467F] text-[white] hover:bg-[white] hover:text-[#00467F] hover:border-[#00467F]" : ""} ${type === "primary-dark" ? "bg-white border-[white] text-[#00467F] hover:bg-[#00467F] hover:text-[white] hover:border-[#00467F]" : ""} ${type === "outline" ? "bg-white border-[#00467F] text-[#00467F] hover:bg-[#00467F] hover:text-[white]" : ""} ${style === "flat" ? "border-b-[1px]" : ""} ${size === "small" ? "py-[8px] px-[24px] text-[14px] lg:py-[12px] lg:px-[32px] lg:text-[16px] tracking-[0.124px]" : "py-[16px] px-[36px] text-[17.5px] lg:py-[16px] lg:px-[48px] lg:text-[17.5px]"}`}
    >
      {label}
      {children}
    </a>
  );
}

export default Button;
