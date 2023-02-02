import { COURSE_DUMMY_DATA } from "../dummy-data";
import Dashbord from "../pages/dashbord";
import { store } from "../store/store";
import { Provider } from "react-redux";
import Layout from "../components/layout/Layout";

export default {
  title: "pages / dashbord component",
  component: Dashbord,
  argTypes: {},
};
const Template = (args) => (
  <Layout>
    <Provider store={store}>
      <Dashbord {...args} />
    </Provider>
  </Layout>
);
export const Primary = Template.bind({});
Primary.args = COURSE_DUMMY_DATA;
