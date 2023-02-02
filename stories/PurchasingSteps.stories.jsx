import PurchasingSteps from "../components/common/PurchasingSteps";

export default {
  title: "atomic components / purchasing steps",
  component: PurchasingSteps,
  argTypes: {},
};

const Template = (args) => <PurchasingSteps {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  step: "loging-info",
};
