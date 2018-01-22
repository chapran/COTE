import React from "react";
import { storiesOf } from "@storybook/react";
import Dropdown from "./Dropdown";

storiesOf("Dropdown", module).add("Normal", () => (
  <Dropdown
    options={[
      { title: "Option 1", value: 1 },
      { title: "Option 2", value: 2 },
      { title: "Option 3", value: 3 }
    ]}
  />
));
