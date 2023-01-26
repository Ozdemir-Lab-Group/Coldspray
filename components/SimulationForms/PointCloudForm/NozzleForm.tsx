import { Grid, GridItem } from "@chakra-ui/layout";
import { Center, Heading } from "@chakra-ui/react";
import { useFormikContext } from "formik";
import { ColdSprayFormProps } from "../../../types";
import FixForm from "./FixForm";

interface NozzleFormProps {}

const NozzleForm: React.FC<NozzleFormProps> = () => {
  const { values, handleChange } = useFormikContext<ColdSprayFormProps>();
  return (
    <Grid templateRows="repeat(6, 1ft)" gap="2">
      <GridItem>
        <Center>
          <Heading fontSize="lg"> Nozzle </Heading>
        </Center>
      </GridItem>
      <GridItem>
        <FixForm
          name="velocityLong"
          onChange={handleChange}
          placeholder="Velocity Long"
          value={values.velocityLong}
        ></FixForm>
      </GridItem>
      <GridItem>
        <FixForm
          name="velocityStep"
          onChange={handleChange}
          placeholder="Velocity Step"
          value={values.velocityStep}
        ></FixForm>
      </GridItem>
      <GridItem>
        <FixForm
          name="scanLength"
          onChange={handleChange}
          placeholder="Scan Length"
          value={values.scanLength}
        ></FixForm>
      </GridItem>
      <GridItem>
        <FixForm
          name="scanWidth"
          onChange={handleChange}
          placeholder="Scan Width"
          value={values.scanWidth}
        ></FixForm>
      </GridItem>
      <GridItem>
        <FixForm
          name="nozzleLift"
          onChange={handleChange}
          placeholder="Nozzle Lift"
          value={values.nozzleLift}
        ></FixForm>
      </GridItem>
    </Grid>
  );
};

export default NozzleForm;
