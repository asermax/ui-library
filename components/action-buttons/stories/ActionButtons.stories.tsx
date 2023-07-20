/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import { Meta, StoryObj } from "@storybook/react";
import { ActionButtons } from "../src/ActionButtons";

const meta: Meta<typeof ActionButtons> = {
  title: "ActionButtons",
  component: ActionButtons,
};

export default meta;
type Story = StoryObj<typeof ActionButtons>;

export const TwoButtons: Story = {
  render: ActionButtons,
  args: {
    actions: [
      { key: "1", label: "One", color: "#ff0000" },
      { key: "2", label: "Two", color: "#00ff00" },
    ],
  },
};

export const ThreeButtons: Story = {
  render: ActionButtons,
  args: {
    actions: [
      { key: "1", label: "One", color: "#ff0000" },
      { key: "2", label: "Two", color: "#00ff00" },
      { key: "3", label: "Three", color: "#0000ff" },
    ],
  },
};
