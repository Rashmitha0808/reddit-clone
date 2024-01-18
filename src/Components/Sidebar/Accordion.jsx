import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Accordion = ({ items, handleAlert }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <hr className="w-100 my-sm border-neutral-border-weak" />
          <div className="flex items-center justify-between p-4 text-slate-600 cursor-pointer " onClick={() => toggleAccordion(index)}>
            <span className="text-14">{item.title}</span>
            <span>{openIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
          </div>
          {openIndex === index && (
            <div className="p-4 " onClick={handleAlert}>
              {item.icon && <div className="mr-2">{item.icon}</div>}
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
