import React from "react";
import { storiesOf } from "@storybook/react";
import { Heading1, Heading2, Title, Subtitle } from "./Heading";

storiesOf("Headings", module)
  .add("Heading1", () => <Heading1>Heading 1</Heading1>)
  .add("Heading1 highlighted", () => (
    <Heading1 highlight>This text is important!</Heading1>
  ))
  .add("Heading 2", () => <Heading2>Heading 2</Heading2>)
  .add("Title", () => <Title>Title</Title>)
  .add("Subtitle", () => <Subtitle>Subtitle</Subtitle>);
