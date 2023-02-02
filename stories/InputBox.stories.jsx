import InputBox from "../components/common/InputBox";
import TextInput from "../components/common/TextInput";

export default {
  title: "atomic components / input box",
  component: InputBox,
  argTypes: {},
};

const Template = (args) => (
  <InputBox {...args}>
    <TextInput type="text" />
  </InputBox>
);
export const Primary = Template.bind({});
