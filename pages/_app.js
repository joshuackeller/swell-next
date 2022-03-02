import "../index.css";
import DefaultLayout from "../src/layout/DefaultLayout";

function MyApp({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
}

export default MyApp;
