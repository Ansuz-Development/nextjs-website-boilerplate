import Layout from "../components/Layout";
import "../styles/tailwind.css";

const MyApp = ({Component, pageProps}) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
