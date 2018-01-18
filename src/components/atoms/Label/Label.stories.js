import React from "react";
import { storiesOf } from "@storybook/react";
import Label from "./Label";

storiesOf("Label", module)
  .add("Normal", () => <Label />)
  .add("Required", () => <Label required />);
