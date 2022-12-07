import { Grid, GridItem } from "@chakra-ui/layout";
import { Center, Heading } from "@chakra-ui/react";
import FixForm from "./FixForm";
import { useFormikContext, Formik, Form, Field } from "formik";
import { useState } from "react";
import { FunctionInterpolation } from "@emotion/react";
import { ColdSprayFormProps } from "../../Types";

interface GeneralFormProps {}

const GeneralForm: React.FC<GeneralFormProps> = () => {
  const { handleChange, values } = useFormikContext<ColdSprayFormProps>();
  return (
    <Grid templateColumns="repeat(3, 1fr)" templateRows="repeat(2, 1ft)" columnGap={10} gap="2">
      <GridItem colSpan={3}>
        <Center>
          <Heading fontSize="lg"> General </Heading>
        </Center>
      </GridItem>
      <GridItem>
        <FixForm
          displayName="layers"
          name="layers"
          onChange={handleChange}
          value={values.layers}
        ></FixForm>
      </GridItem>
      <GridItem>
        <FixForm
          displayName="Lines Per Layer"
          name="linesPerLayer"
          onChange={handleChange}
          value={values.linesPerLayer}
        ></FixForm>
      </GridItem>
      <GridItem>
        <FixForm displayName="N" name="N" onChange={handleChange} value={values.N}></FixForm>
      </GridItem>
    </Grid>
  );
};

export default GeneralForm;
