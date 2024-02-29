// import React from "react";
// import {
//   AppstoreOutlined,
//   MailOutlined,
//   SettingOutlined,
// } from "@ant-design/icons";
// import type { MenuProps } from "antd";
// import { Menu } from "antd";

// type MenuItem = Required<MenuProps>["items"][number];

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[],
//   type?: "group"
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//     type,
//   } as MenuItem;
// }

// const items: MenuProps["items"] = [
//   getItem("دامنه‌های من", "sub1", <MailOutlined />, [
//     getItem(
//       "Item 1",
//       "g1",
//       null,
//       [getItem("Option 1", "1"), getItem("Option 2", "2")],
//       "group"
//     ),
//     getItem(
//       "Item 2",
//       "g2",
//       null,
//       [getItem("Option 3", "3"), getItem("Option 4", "4")],
//       "group"
//     ),
//   ]),

//   getItem("Navigation Two", "sub2", null, [
//     getItem("Option 5", "5"),
//     getItem("Option 6", "6"),
//     getItem("Submenu", "sub3", null, [
//       getItem("Option 7", "7"),
//       getItem("Option 8", "8"),
//     ]),
//   ]),

//   { type: "divider" },

//   getItem("Navigation Three", "sub4", <SettingOutlined />, [
//     getItem("Option 9", "9"),
//     getItem("Option 10", "10"),
//     getItem("Option 11", "11"),
//     getItem("Option 12", "12"),
//   ]),

//   getItem(
//     "Group",
//     "grp",
//     null,
//     [getItem("Option 13", "13"), getItem("Option 14", "14")],
//     "group"
//   ),
// ];

// const NestedList: React.FC = () => {
//   const onClick: MenuProps["onClick"] = (e) => {
//     console.log("click ", e);
//   };

//   return (
//     <Menu
//       onClick={onClick}
//       style={{ width: 256 }}
//       defaultSelectedKeys={["1"]}
//       defaultOpenKeys={["sub1"]}
//       mode="inline"
//       items={items}
//       className="fontIR"
//     />
//   );
// };

// export default NestedList;

import React, { useState } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

interface Props {
  options: {
    MainTitle: string;
    subTitle?:
      | {
          title: string;
        }[]
      | undefined;
  }[];
}
const NestedList = ({ options }: Props) => {
  //   const [openKeys, setOpenKeys] = useState<string[]>([]);

  //   const handleClick = (e: any) => {
  //     console.log("Clicked:", e);
  //   };

  //   const handleOpenChange = (keys: string[]) => {
  //     setOpenKeys(keys);
  //   };
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const handleClick = (e: any) => {
    setSelectedKeys([e.key]);
  };

  return (
    // <Menu
    //   onClick={handleClick}
    //   mode="inline"
    //   openKeys={openKeys}
    //   onOpenChange={handleOpenChange}
    //   className="bg-white"
    // >
    //   {/* <Menu.Item key="mail" icon={<MailOutlined />}>
    //     Navigation One
    //   </Menu.Item>
    //   <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
    //     Navigation Two
    //   </Menu.Item>
    //   <SubMenu key="sub1" icon={<SettingOutlined />} title="Navigation Three">
    //     <Menu.Item key="setting:1">Option 1</Menu.Item>
    //     <Menu.Item key="setting:2">Option 2</Menu.Item>
    //   </SubMenu> */}
    //   <div className="flex flex-col fontIR px-5 w-[300px]">
    //     {options.map((option, index) => {
    //       return (
    //         <div>
    //           {option.subTitle && option.subTitle?.length > 0 && (
    //             <SubMenu key={`sub${index}`} title={option.MainTitle}>
    //               {option.subTitle.map((item) => {
    //                 return <Menu.Item key={item.title}>{item.title}</Menu.Item>;
    //               })}
    //             </SubMenu>
    //           )}
    //           {!option.subTitle && (
    //             <Menu.Item key={index}>{option.MainTitle}</Menu.Item>
    //           )}
    //         </div>
    //       );
    //     })}
    //   </div>
    // </Menu>
    <Menu
      mode="inline"
      selectedKeys={selectedKeys}
      onClick={handleClick}
      style={{
        border: "0px",
        outline: `2px solid transparent`,
        outlineOffset: "2px",
      }}
      // Adjust the width as needed
      className="fontIR outline-none w-[60vw] pl-1 lg:w-[200px]  "
    >
      {options.map((option, index) => (
        <React.Fragment key={index}>
          {option.subTitle && option.subTitle.length > 0 ? (
            <SubMenu
              className="outline-none"
              key={`sub${index}`}
              title={option.MainTitle}
            >
              {option.subTitle.map((item, subIndex) => (
                <Menu.Item
                  className="ouline-none"
                  key={`sub${index}-${subIndex}`}
                >
                  {item.title}
                </Menu.Item>
              ))}
            </SubMenu>
          ) : (
            <Menu.Item
              className="outline-none"
              key={`main${index}`}
            >
              {option.MainTitle}
            </Menu.Item>
          )}
        </React.Fragment>
      ))}
    </Menu>
  );
};

export default NestedList;
