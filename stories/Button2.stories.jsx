import Button from "../components/common/Button";

export default {
  title: "atomic components / Button",
  component: Button,
  argTypes: {},
};

const Template = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  text: "کلیک کنید",
};
