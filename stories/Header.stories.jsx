import { COURSE_DUMMY_DATA } from "../dummy-data";
import Header from "../components/layout/header/header";

export default {
  title: "pages / header component",
  component: Header,
  argTypes: {},
};

const Template = (args) => <Header {...args} />;
export const Primary = Template.bind({});
Primary.args = COURSE_DUMMY_DATA;
