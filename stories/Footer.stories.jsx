import { COURSE_DUMMY_DATA } from "../dummy-data";
import Footer from "../components/layout/footer/footer";

export default {
  title: "pages / footer component",
  component: Footer,
  argTypes: {},
};

const Template = (args) => <Footer {...args} />;
export const Primary = Template.bind({});
Primary.args = COURSE_DUMMY_DATA;
