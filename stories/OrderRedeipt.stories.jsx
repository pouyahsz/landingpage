import { COURSE_DUMMY_DATA } from "../dummy-data";
import OrderReceipt from "../pages/order-receipt";
import { store } from "../store/store";
import { Provider } from "react-redux";
import Layout from "../components/layout/Layout";

export default {
  title: "pages / order-receipt component",
  component: OrderReceipt,
  argTypes: {},
};

const Template = (args) => (
  <Layout>
    <Provider store={store}>
      <OrderReceipt {...args} />
    </Provider>
  </Layout>
);
export const Primary = Template.bind({});
Primary.args = COURSE_DUMMY_DATA;
