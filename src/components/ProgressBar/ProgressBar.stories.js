import React from "react";
import { storiesOf } from "@storybook/react";
import ProgressBar from "./ProgressBar";

storiesOf("ProgressBar", module).add("Normal", () => (
  <ProgressBar currentStep={5} progress={88} />
));
