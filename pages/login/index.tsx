import { Button } from "@chakra-ui/button";
import React, { useState } from "react";
import { Card, CardBody, Heading, Center, useDisclosure } from "@chakra-ui/react";
import InputField from "../../components/InputField";
import { useAuth } from "../../context/AuthContext";
import { Form, Formik } from "formik";
import AlertAuthentication from "../../components/AlertAuthentication";
import { AlertProps } from "../../types";

interface RegisterProps {}

const login: React.FC<RegisterProps> = ({}) => {
  const { logInWithEmailAndPassword } = useAuth();
  const { onClose, onOpen, isOpen } = useDisclosure();
  const [alert, setAlert] = useState<AlertProps>(null);

  return (
    <Card>
      <CardBody>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={async (values) => {
            await logInWithEmailAndPassword(values).then((login) => {
              if (login.error) {
                setAlert({ status: "error", description: login.error });
                onOpen();
              }
            });
          }}
        >
          {({ handleSubmit, isSubmitting }) => (
            <>
              <Center>
                <Heading size={"h1"}>Log In</Heading>
              </Center>
              {isOpen && (
                <AlertAuthentication
                  onClose={onClose}
                  status={alert.status}
                  description={alert.description}
                />
              )}
              <Form onSubmit={handleSubmit}>
                <InputField label="Email" name="email" type="email" required></InputField>
                <InputField label="Password" name="password" type="password" required></InputField>
                <Button mt={4} type="submit" isLoading={isSubmitting} color="black">
                  Login
                </Button>
              </Form>
            </>
          )}
        </Formik>
      </CardBody>
    </Card>
  );
};

export default login;
