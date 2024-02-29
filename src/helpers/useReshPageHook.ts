import { useMutation, useQueryClient } from "@tanstack/react-query";
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
export const useRefreshList = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: fetchData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["haftkhan-list"] });
    },
  });
  return {
    mutate,
  };
};
