import TextInput from "../components/common/TextInput.js";

export default {
  title: "atomic components / input",
  component: TextInput,
  argTypes: {},
};

const Template = (args) => <TextInput {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  type: "text",
};
