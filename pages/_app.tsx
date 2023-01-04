import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { AuthContextProvider } from "../context/AuthContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AuthContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
