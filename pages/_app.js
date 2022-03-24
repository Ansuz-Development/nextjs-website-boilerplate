import Layout from "../components/Layout";
import "../styles/tailwind.scss";

const MyApp = ({Component, pageProps}) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
