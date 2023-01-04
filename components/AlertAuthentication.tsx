import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Center,
  CloseButton,
} from "@chakra-ui/react";

import { AlertProps } from "../Types";

const AlertAuthentication: React.FC<AlertProps> = ({ status, description, onClose }) => {
  return (
    <Alert status={status}>
      <AlertIcon />
      <Center>
        <AlertTitle fontSize="lg">{status}</AlertTitle>
      </Center>
      <AlertDescription maxWidth="sm" alignContent="center">
        {description.length < 100 ? description.toString() : status}
      </AlertDescription>
      <CloseButton
        alignSelf="flex-start"
        position="relative"
        right={-1}
        top={-1}
        onClick={onClose}
      />
    </Alert>
  );
};

export default AlertAuthentication;
