import React from "react";
import { render, fireEvent } from "@testing-library/react";

import DropdownMenu from "../DropdownMenu";
import MenuItem from "../MenuItem";

const getById = (id: string) => {
  const el = document.getElementById(id);
  if (!el) {
    throw new Error();
  }

  return el;
};

const PROPS = {
  id: "dropdown",
  children: "Dropdown",
};

describe("DropdownMenu", () => {
  it("should render correctly with a list of strings, numbers, ListItemProps, ReactElement, or a mixture of all", () => {
    const items1 = ["Item 1", "Item 2", "Item 3"];
    const { container, rerender } = render(
      <DropdownMenu {...PROPS} items={items1} />
    );
    expect(container).toMatchSnapshot();

    fireEvent.click(getById("dropdown"));
    expect(container).toMatchSnapshot();

    const items2 = [0, 1, 2, 3, 4];
    rerender(<DropdownMenu {...PROPS} items={items2} />);
    expect(container).toMatchSnapshot();

    const items3 = [
      {
        children: "Item 1",
      },
      { leftIcon: <i>icon</i>, children: "Item 2" },
      { rightIcon: <i>icon</i>, children: "Item 3" },
    ];
    rerender(<DropdownMenu {...PROPS} items={items3} />);
    expect(container).toMatchSnapshot();

    // Note: no key required
    const items4 = [
      <li id="item-1" role="menuitem">
        Item 1
      </li>,
      <MenuItem>Item 2</MenuItem>,
      "Item 3",
      4,
    ];
    rerender(<DropdownMenu {...PROPS} items={items4} />);
    expect(container).toMatchSnapshot();
  });
});
