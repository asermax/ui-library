/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import { Meta, StoryObj } from "@storybook/react";
import Alert from "../src/Alert";

const meta: Meta<typeof Alert> = {
  title: "Alert",
  component: Alert,
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Simple: Story = {
  render: Alert,
  args: {
    message: "This is an alert message",
    type: "info",
  },
};
