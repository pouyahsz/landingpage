import { COURSE_DUMMY_DATA } from "../dummy-data";
import CompleteInfo from "../pages/complete-info";
import { store } from "../store/store";
import { Provider } from "react-redux";
import Layout from "../components/layout/Layout";

export default {
  title: "pages / complete info component",
  component: CompleteInfo,
  argTypes: {},
};

const Template = (args, { loaded: data }) => (
  <Layout>
    <Provider store={store}>
      <CompleteInfo {...args} />
    </Provider>
  </Layout>
);
export const Primary = Template.bind({});
Primary.args = COURSE_DUMMY_DATA;
