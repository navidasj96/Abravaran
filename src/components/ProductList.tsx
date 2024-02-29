import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import Table from "../Table";
const fetchData = async () => {
  const response = await fetch(
    "http://100.124.5.231/Sale/v1/Category/haftkhan/List/",
    {
      method: "POST",
      body: JSON.stringify({
        totalCount: 10,
        pageIndex: 1,
        itemsPerPage: 10,
        items: "",
        sortBy: "id",
        sortOrder: 0,
      }),
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
};

export default function ProductList() {
  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["haftkhan-list"],
    queryFn: fetchData,
  });

  return (
    <div>
      {data && data.content && data.content.items && (
        <Table items={data.content.items} />
      )}
    </div>
  );
}
