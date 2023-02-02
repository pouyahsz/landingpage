import { COURSE_DUMMY_DATA } from "../dummy-data";
import Product from "../pages/product";
import { store } from "../store/store";
import { Provider } from "react-redux";
import Layout from "../components/layout/Layout";

export default {
  title: "pages / product component",
  component: Product,
  argTypes: {},
};

const Template = (args) => (
  <Layout>
    <Provider store={store}>
      <Product {...args} />
    </Provider>
  </Layout>
);
export const Primary = Template.bind({});
Primary.args = COURSE_DUMMY_DATA;
