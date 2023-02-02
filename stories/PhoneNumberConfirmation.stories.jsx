import { COURSE_DUMMY_DATA } from "../dummy-data";
import PhoneNumberConfirmation from "../pages/Phone-number-confirmation";
import { store } from "../store/store";
import { Provider } from "react-redux";
import Layout from "../components/layout/Layout";

export default {
  title: "pages / phonenumber confirmation component",
  component: PhoneNumberConfirmation,
  argTypes: {},
};

const Template = (args) => (
  <Layout>
    <Provider store={store}>
      <PhoneNumberConfirmation {...args} />
    </Provider>
  </Layout>
);
export const Primary = Template.bind({});
Primary.args = COURSE_DUMMY_DATA;
