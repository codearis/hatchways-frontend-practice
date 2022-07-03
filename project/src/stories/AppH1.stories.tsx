import { AppH1 } from "../components/app/barrel";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "AppH1",
  component: AppH1,
} as ComponentMeta<typeof AppH1>;

const Template: ComponentStory<typeof AppH1> = (args) => <AppH1 {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: "Lorem Ipsum",
  size: "64px",
  color: "blue",
};
