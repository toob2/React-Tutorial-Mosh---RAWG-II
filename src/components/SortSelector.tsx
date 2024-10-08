import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

export interface Order {
  value: string;
  label: string;
}

const SortSelector = () => {
  const sortOrders = [
    {
      value: "",
      label: "Relevance",
    },
    {
      value: "-added",
      label: "Date added",
    },
    {
      value: "name",
      label: "Name",
    },
    {
      value: "-released",
      label: "Release date",
    },
    {
      value: "metacritic",
      label: "Popularity",
    },
    {
      value: "rating",
      label: "Average rating",
    },
  ];

  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder) || "";
  console.log("sort order", sortOrder);
  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  console.log("current order", currentSortOrder);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {"Order by: " + (currentSortOrder?.label || "")}
      </MenuButton>
      <MenuList>
        {sortOrders.map((orderBy) => (
          <MenuItem
            onClick={() => setSortOrder(orderBy.value)}
            key={orderBy.value}
            value={orderBy.value}
          >
            {orderBy.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
