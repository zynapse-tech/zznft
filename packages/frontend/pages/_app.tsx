import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'wagmi'
import connectors from "../services/wagmi";
import Layout from "../components/Layouts/layout";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider connectors={connectors}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer position={"bottom-right"} autoClose={4000}/>
    </Provider>
  )
}

export default MyApp
