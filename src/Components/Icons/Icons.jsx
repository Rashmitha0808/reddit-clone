import React from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";

const Icons = () => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <div className="flex items-center justify-between p-4 cursor-pointer" onClick={() => toggleAccordion(index)}>
            <span className="text-14">{item.title}</span>
            <span>{openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
          </div>
          {openIndex === index && (
            <div className="p-4 ">
              {item.icon && <div className="mr-2">{item.icon}</div>}
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Icons;
