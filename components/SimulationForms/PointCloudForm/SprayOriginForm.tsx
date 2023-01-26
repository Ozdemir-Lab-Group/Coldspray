import { Grid, GridItem } from "@chakra-ui/layout";
import { Center, Heading } from "@chakra-ui/react";
import { useFormikContext } from "formik";
import { ColdSprayFormProps } from "../../../types";
import FixForm from "./FixForm";

interface SprayOriginProps {}

const SprayOriginForm: React.FC<SprayOriginProps> = () => {
  const formik = useFormikContext<ColdSprayFormProps>();
  return (
    <Grid templateRows="repeat(4, 1ft)" rowGap={3}>
      <GridItem>
        <Center>
          <Heading fontSize="lg"> Spray Origin</Heading>
        </Center>
      </GridItem>
      <GridItem>
        <FixForm
          name="X"
          onChange={formik.handleChange}
          placeholder="X"
          value={formik.values.X}
        ></FixForm>
      </GridItem>
      <GridItem>
        <FixForm
          name="Y"
          onChange={formik.handleChange}
          placeholder="Y"
          value={formik.values.Y}
        ></FixForm>
      </GridItem>
      <GridItem>
        <FixForm
          name="Z"
          onChange={formik.handleChange}
          placeholder="Z"
          value={formik.values.Z}
        ></FixForm>
      </GridItem>
    </Grid>
  );
};

export default SprayOriginForm;
