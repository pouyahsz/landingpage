import '../styles/globals.scss'
import { Provider } from 'react-redux';
import { store } from '../store/store';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>فرانت هوکس</title>
        <meta name='description' content='سایت خرید دوره' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
