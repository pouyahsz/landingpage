import { COURSE_DUMMY_DATA } from "../dummy-data";
import ExtraInfo from "../pages/extra-info";
import { store } from "../store/store";
import { Provider } from "react-redux";
import Layout from "../components/layout/Layout";

export default {
  title: "pages / extra info component",
  component: ExtraInfo,
  argTypes: {},
};

const Template = (args) => (
  <Layout>
    <Provider store={store}>
      <ExtraInfo {...args} />
    </Provider>
  </Layout>
);
export const Primary = Template.bind({});
Primary.args = COURSE_DUMMY_DATA;
