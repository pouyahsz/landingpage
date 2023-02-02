import { COURSE_DUMMY_DATA } from "../dummy-data";
import LogingInfo from "../pages/loging-info";
import { store } from "../store/store";
import { Provider } from "react-redux";
import Layout from "../components/layout/Layout";

export default {
  title: "pages / loging-info component",
  component: LogingInfo,
  argTypes: {},
};

const Template = (args) => (
  <Layout>
    <Provider store={store}>
      <LogingInfo {...args} />
    </Provider>
  </Layout>
);
export const Primary = Template.bind({});
Primary.args = COURSE_DUMMY_DATA;
