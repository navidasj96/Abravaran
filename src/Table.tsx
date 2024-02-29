import React from "react";
interface Props {
  items: {
    name: string;
  }[];
}

const Table = ({ items }: Props) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 fontIR px-4 border-b">لیست محصولات</th>
            {/* Add additional headers if needed */}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-100" : ""}
            >
              <td className="py-2 px-4 border-b">{item.name}</td>
              {/* Add additional cells if needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
