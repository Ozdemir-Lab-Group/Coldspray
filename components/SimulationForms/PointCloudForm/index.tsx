import { Container, Heading, Button, Text } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { Center, Grid, GridItem } from "@chakra-ui/layout";
import { useFormik } from "formik";
import GeneralForm from "./GeneralForm";
import SprayOriginForm from "./SprayOriginForm";
import NozzleForm from "./NozzleForm";

interface FormProps {}

const ColdSprayForm: React.FC<FormProps> = ({}) => {
  return (
    <Container width="75%">
      <Formik
        initialValues={{
          X: "",
          Y: "",
          Z: "",
          velocityLong: "",
          velocityStep: "",
          scanLength: "",
          scanWidth: "",
          nozzleLift: "",
          layers: "",
          linesPerLayer: "",
          N: "",
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            console.log(values);
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Grid templateColumns="repeat(10, 1fr)" templateRows="repeat(5, 1ft)">
              <GridItem colSpan={10} padding={5}>
                <GeneralForm />
              </GridItem>
              <GridItem colSpan={3} padding="5">
                <SprayOriginForm />
              </GridItem>
              <GridItem colSpan={7} padding="5">
                <NozzleForm />
              </GridItem>
              <GridItem colSpan={10}>
                <Center>
                  <Button type="submit" isLoading={isSubmitting} color="black">
                    Plot
                  </Button>
                </Center>
              </GridItem>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default ColdSprayForm;
