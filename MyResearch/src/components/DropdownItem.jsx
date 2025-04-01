import React from "react";

const DropdownItem = ({ title, author, date, number }) => {
  return (
    <div className="p-2 cursor-pointer shadow-sm hover:bg-[#adabab10] transition-all flex flex-col gap-2">
      <span className="flex gap-2 items-center">
        <span className="text-bolder text-4xl">{number}.</span>
        <span className="text-bold text-2xl self-end">{title}</span>
      </span>

      <div className="flex justify-between items-center">
        <span className="text-[#6B6B6B] text-sm">{author}</span>

        <span className="text-[#6B6B6B] text-sm">{date}</span>
      </div>
    </div>
  );
};

export default DropdownItem;
