import React from "react";

function Button({
  type,
  width,
  label,
  href,
  size,
  onClick,
  style,
  depth,
  children,
  icon,
}) {
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
      className={`cursor-pointer inline-block rounded-full bg-[#00467F] font-[600] border text-center whitespace-nowrap transition ease-in-out duration-[250ms] ${depth === "medium" ? "shadow-[0_2px_8px_0_rgba(0,0,0,0.15)]" : ""} ${type === "icon" ? "bg-[#FBBF24] h-[48px] flex justify-center hover:scale-[1.15] items-center w-[48px] p-0 fill-[white] py-[0] px-[0]" : ""} ${icon === "left" ? "pl-[12px]" : ""} ${width === "full" ? "w-[100%]" : ""} ${width === "wide" ? "w-[320px]" : ""} ${type == "tonal-white" ? "bg-[#f3f3f3] border-[#f3f3f3] text-[#00467F] hover:bg-[#00467F] hover:text-[white] hover:border-[#00467F]" : ""} ${type === "primary" ? "bg-[#00467F] border-[#00467F] text-[white] hover:bg-[white] hover:text-[#00467F] text-[500] hover:border-[#00467F]" : ""} ${type === "primary-dark" ? "bg-white border-[white] text-[#00467F] hover:bg-[#00467F] hover:text-[white] hover:border-[#00467F]" : ""} ${type === "outline" ? "bg-white border-[#00467F] text-[#00467F] hover:bg-[#00467F] hover:text-[white]" : ""} ${style === "flat" ? "border-b-[1px]" : ""} ${size === "small" ? "py-[8px] px-[24px] text-[14px] lg:py-[12px] lg:px-[32px] lg:text-[16px] tracking-[0.124px]" : "py-[16px] px-[32px] text-[16px] lg:py-[14px] lg:px-[40px] lg:text-[17.5px]"} ${icon === "right" ? "pl-[24px] px-[16px] py-[11.999999999px] pr-[16px] lg:pl-[32px] lg:py-[12px] lg:pr-[16px]" : ""}`}
    >
      {label}
      {children}
    </a>
  );
}

export default Button;
