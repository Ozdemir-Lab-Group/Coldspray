import ThreeReact from "../../components/ThreeReact";
import FixMenu from "../../components/FixMenu";
import { Spacer, Grid } from "@chakra-ui/react";
function AboutPage() {
  return (
    <Grid templateColumns="repeat(5, 1fr)">
      <FixMenu />
      <Spacer />
      <ThreeReact URL="" />
    </Grid>
  );
}

export default AboutPage;
