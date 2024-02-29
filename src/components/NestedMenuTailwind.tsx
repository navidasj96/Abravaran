import React, { useState } from "react";
interface Props {
  items: {
    MainTitle: string;
    subTitle?: {
      title: string;
    }[];
  }[];
}
const NestedMenuTailwind = ({ items }: Props) => {
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleSubMenuClick = (index: any) => {
    setOpenSubMenu(index);
  };

  return (
    <ul className="space-y-4">
      {items.map((item, index) => (
        <li key={index}>
          <button
            onClick={() => handleSubMenuClick(index)}
            className="text-gray-600 hover:text-gray-800"
          >
            {item.MainTitle}
          </button>
          {openSubMenu === index && item.subTitle && (
            <ul className="ml-4 space-y-2">
              {item.subTitle.map((subItem, subIndex) => (
                <li key={subIndex}>
                  <button className="text-gray-500 hover:text-gray-700">
                    {subItem.title}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NestedMenuTailwind;
