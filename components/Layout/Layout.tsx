import { VStack, Container } from "@chakra-ui/layout";
import { Fragment } from "react";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <VStack>
      <Nav />
      <Container centerContent>{children}</Container>
    </VStack>
  );
};

export default Layout;
